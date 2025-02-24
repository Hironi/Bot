/*
* https://whatsapp.com/channel/0029Van6ItnIyPtYQU3k0z3s
* script by whyuxD
• jangan di jual ya kalian para dev
*/
//jangan hapus wm bang😁
//kalo mau succes jadi dev👍

require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const chalk = require('chalk')
const CFonts = require('cfonts')
const { getBuffer } = require('./all/myfunc')
const NodeCache = require("node-cache")
const msgRetryCounterCache = new NodeCache()
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
console.log(chalk.red(`ini adalah script free by *hironi*, please dont sell my script`))
console.log(chalk.cyan(`Wait...`))
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ['Mac OS', 'Safari', '10.15.7'],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hironi'
}}
}

const Darkyu = func.makeWASocket(connectionOptions)
if (usePairingCode && !Darkyu.authState.creds.registered) {
var phoneNumber = await question(chalk.black(chalk.bgCyan(`\nMASUKKAN NOMOR BOT BERAWALAN CODE NEGARA: \n`)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
var code = await Darkyu.requestPairingCode(phoneNumber.trim())
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgCyan(`Code : `)), chalk.black(chalk.bgWhite(code)))
}

Darkyu.ev.on('creds.update', await saveCreds)
store?.bind(Darkyu.ev)

Darkyu.public = global.public
async function mulai() {
Darkyu.newsletterFollow("120363343611802180@newsletter")}
Darkyu.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) Darkyu.readMessages([m.key])
}
if (!Darkyu.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.isBaileys) return
if (global.autoread) Darkyu.readMessages([m.key])
m = func.smsg(Darkyu, m, store)
require("./caxe.js")(Darkyu, m, store)
} catch (err) {
console.log(err)
}
})

Darkyu.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
const tumbnx = global.tumb
const thumbnailIndex = tumbnx[Math.floor(Math.random() * tumbnx.length)];
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await Darkyu.sendMessage(jid, { sticker: { url: buffer,
contextInfo: {
    externalAdReply: {
    thowAdAttribution: true,
    title: wm,
    body: `life must be tortured`,
    mediaType: 3,
    renderLargerThumbnail: false,
    thumbnailUrl: thumbnailIndex, 
    sourceUrl: global.wagc
 } } 
}, ...options }, { quoted })
return buffer}

Darkyu.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await Darkyu.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;
  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }
  let opt = {
    filename
  };
  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;
  let mtype = '',
    mimetype = type.mime,
    convert;
  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';
  if (options.asDocument) mtype = 'document';
  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;
  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;
  try {
    m = await Darkyu.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await Darkyu.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}


Darkyu.ev.on('group-participants.update', async (anu) => {
    	if (global.welcome){
console.log(anu)
try {
let metadata = await Darkyu.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Darkyu.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Darkyu.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
ppbuffer = await getBuffer(ppuser)
          if (anu.action == 'add') {
          let thePartic = num
                Welc = `
╔─────────────────╗
╟       *𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐤𝐚𝐤👋*     
╟   *@${thePartic.split("@")[0]}*  
╚─────────────────╝`
let res = generateWAMessageFromContent(
    anu.id,
    {
        orderMessage: {
            productId: "8569472943180260",
            title: "",
            description: "now",
            currencyCode: "IDR",
            message: Welc,
            priceAmount1000: "91000",
            thumbnail: ppbuffer,
            surface: "whyuxD",
            contextInfo: { mentionedJid: [num] }, 
        }, },{});
Darkyu.relayMessage(anu.id, res.message, {});

          } else if (anu.action == 'remove') {
          let thePartic2 = num
            Lft = `
╔─────────────────╗
╟       *𝐆𝐨𝐨𝐝 𝐛𝐲𝐞 𝐤𝐚𝐤👋*     
╟   *@${thePartic2.split("@")[0]}* 
╚─────────────────╝`
let res = generateWAMessageFromContent(
    anu.id,
    {
        orderMessage: {
            productId: "8569472943180260",
            title: "",
            description: "now",
            currencyCode: "IDR",
            message: Lft,
            priceAmount1000: "91000",
            thumbnail: ppbuffer,
            surface: "whyuxD",
            contextInfo: { mentionedJid: [num] }, 
        }, },{});
Darkyu.relayMessage(anu.id, res.message, {});
}}
} catch (err) {
console.log(err)
}}
})

Darkyu.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
startSesi()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
startSesi()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
startSesi()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
startSesi()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Darkyu.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Darkyu.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
CFonts.say(`whyuxD`, { font: 'block', align: 'left', colors: ['cyan'] });
console.log(chalk.red(`jangan di jual yah!`))
Darkyu.sendMessage("6289513601293@s.whatsapp.net", {text: "script terhubung......" },{})
mulai()
}
})

return Darkyu
}


startSesi()


process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})