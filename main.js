const pino = require('pino');
const { makeInMemoryStore, useMultiFileAuthState, fetchLatestBaileysVersion, makeWASocket, DisconnectReason } = require('@whiskeysockets/baileys');
const fs = require('fs');
const readline = require("readline");
const chalk = require('chalk');
const CFonts = require('cfonts');
const { getBuffer } = require('./all/myfunc');
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const yargs = require('yargs/yargs');
const _ = require('lodash');

const usePairingCode = true;

// Fungsi untuk input nomor telepon dari terminal
const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

// Fungsi utama untuk memulai sesi bot
async function startSesi() {
    console.log(chalk.red(`Ini adalah script free by *Hironi*, please don't sell my script`));
    console.log(chalk.cyan(`Wait...`));

    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
    const { state, saveCreds } = await useMultiFileAuthState(`./session`);
    const { version, isLatest } = await fetchLatestBaileysVersion();

    const connectionOptions = {
        version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ['Mac OS', 'Safari', '10.15.7'],
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
                return msg?.message || undefined;
            }
            return { conversation: 'Hironi' };
        }
    };

    const Darkyu = makeWASocket(connectionOptions);

    if (usePairingCode && !Darkyu.authState.creds.registered) {
        let phoneNumber = await question(chalk.black(chalk.bgCyan(`\nMASUKKAN NOMOR BOT BERAWALAN CODE NEGARA: \n`)));
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        const code = await Darkyu.requestPairingCode(phoneNumber.trim());
        console.log(chalk.black(chalk.bgCyan(`Code : `)), chalk.black(chalk.bgWhite(code?.match(/.{1,4}/g)?.join("-") || code)));
    }

    Darkyu.ev.on('creds.update', saveCreds);
    store.bind(Darkyu.ev);
    Darkyu.public = global.public;

    Darkyu.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const m = chatUpdate.messages[0];
            if (!m.message) return;
            if (m.key && m.key.remoteJid === 'status@broadcast' && global.autoreadsw) {
                Darkyu.readMessages([m.key]);
            }
            if (!Darkyu.public && m.key.remoteJid !== `${global.owner}@s.whatsapp.net` && !m.key.fromMe && chatUpdate.type === 'notify') return;
            if (m.isBaileys) return;
            if (global.autoread) Darkyu.readMessages([m.key]);

            require("./caxe.js")(Darkyu, m, store);
        } catch (err) {
            console.error("Error in messages.upsert:", err);
        }
    });

    Darkyu.ev.on('group-participants.update', async (anu) => {
        try {
            if (!global.welcome) return;
            console.log(anu);
            const metadata = await Darkyu.groupMetadata(anu.id);
            const participants = anu.participants;
            for (let num of participants) {
                let ppuser;
                try {
                    ppuser = await Darkyu.profilePictureUrl(num, 'image');
                } catch {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
                }
                const ppbuffer = await getBuffer(ppuser);

                let messageText = anu.action === 'add' 
                    ? `👋 Selamat datang *@${num.split("@")[0]}* di grup ${metadata.subject}` 
                    : `👋 Selamat tinggal *@${num.split("@")[0]}* dari grup ${metadata.subject}`;

                Darkyu.sendMessage(anu.id, { text: messageText, mentions: [num] });
            }
        } catch (err) {
            console.error("Error in group-participants.update:", err);
        }
    });

    Darkyu.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = lastDisconnect?.error?.output?.statusCode;
            console.error("Koneksi terputus:", lastDisconnect?.error);

            if (reason === DisconnectReason.badSession) {
                console.log("Session buruk, harap hapus session dan scan ulang.");
                startSesi();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Koneksi tertutup, mencoba menyambung kembali...");
                startSesi();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log("Perangkat keluar, silakan scan ulang.");
                Darkyu.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart diperlukan, memulai ulang...");
                startSesi();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Koneksi timeout, menyambung kembali...");
                startSesi();
            }
        } else if (connection === "connecting") {
            console.log("Menghubungkan...");
        } else if (connection === "open") {
            CFonts.say(`Hironi`, { font: 'block', align: 'left', colors: ['cyan'] });
            console.log(chalk.red(`Jangan dijual ya!`));
            Darkyu.sendMessage("6282157298268@s.whatsapp.net", { text: "Script terhubung..." });
        }
    });

    return Darkyu;
}

startSesi();

process.on('uncaughtException', function (err) {
    console.error("Uncaught exception:", err);
});
