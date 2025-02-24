/*
* https://whatsapp.com/channel/0029Van6ItnIyPtYQU3k0z3s
* script by whyuxD
• jangan di jual ya kalian para dev

    SETIAP ORANG PUNYA KELEBIHAN, 
    TAPI KELEBIHAN YANG PALING 
    LANGKAH ADALAH KEJUJURAN
    
*/
//jangan hapus wm bang😁
//kalo mau succes jadi dev👍

require("./settings")
const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
const owner = global.owner
module.exports = async (Darkyu, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const { type, quotedMsg, mentioned, now, fromMe } = m
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? ' '
const isCmd = body.startsWith(prefix)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const from = m.key.remoteJid
const botNumber = await Darkyu.decodeJid(Darkyu.user.id)
const cleanBotNumber = botNumber.replace('@s.whatsapp.net', '');
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const WhyuxTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const sender = m.key.fromMe ? (Darkyu.user.id.split(':')[0]+'@s.whatsapp.net' || Darkyu.user.id) : (m.key.participant || m.key.remoteJid)
const banUser = await Darkyu.fetchBlocklist()
const groupMetadata = m.isGroup ? await Darkyu.groupMetadata(m.chat).catch(e => {}) : {}
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isMedia = /image|video|sticker|audio/.test(mime)
const { ucapanWaktu } = require('./all/utils')
const { clockString, parseMention, formatp, getTime, isUrl, sleep, great, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./all/myfunc')
global.db = JSON.parse(fs.readFileSync('./all/database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []

try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
saldo: 0,
premium: false
}
const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }
} catch (err) {
console.error(err)
}
const totalfitur = () =>{
            var mytext = fs.readFileSync("./caxe.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
Darkyu.sendPresenceUpdate('unavailable', from); 

const thumb = fs.readFileSync("./all/media/Menu.jpg")
const tumbn = global.tumb
const thumbnail = tumbn[Math.floor(Math.random() * tumbn.length)];

const docus = [
   doc1, doc2, doc3, doc5, doc6
];
const document = docus[Math.floor(Math.random() * docus.length)];

if (!Darkyu.public) {
if (!m.key.fromMe && !isCreator) return
}

var ppuser
try {
ppuser = await Darkyu.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

let mute = JSON.parse(fs.readFileSync('./all/database/mute.json'));
const isMute= mute.includes(m.chat) ? true : false
if (m.isGroup && isMute) {
if (!isAdmins && !WhyuxTheCreator) return
}

let list = []
list.push({
    displayName: `ɴᴏ ᴄᴀʟʟ`,
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownername}\nFN:${ownername}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:iam a sigma boy!!\nitem2.EMAIL;type=INTERNET:${botname}\nitem2.X-ABLabel:${wmbot}!\nitem3.URL:whyuxD.neocities.org\nitem3.X-ABLabel:Website\nitem4.ADR:;;Region;;;;\nitem4.X-ABLabel:Asia, Indonesia\nEND:VCARD`
});
//=========== MESSAGE ===========//
if (m.message && m.isGroup) {
        	if (global.readchat) {
            Darkyu.readMessages([m.key])
            }
			console.log(chalk.blue(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.white(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('Dari: '), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> di'), chalk.green(groupName, m.chat))
        } else {
        	if (global.readchat) {
            Darkyu.readMessages([m.key])
            }
			console.log(chalk.blue(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('Dari: '), chalk.green(pushname), chalk.yellow(m.sender))
        }

const Adduser = JSON.parse(fs.readFileSync('./all/database/user.json'))
const isUser = Adduser.includes(sender)
if (isCmd && !isUser) {
fs.writeFileSync('./all/database/user.json', JSON.stringify(Adduser, null, 2))
}

//============= REPLY =============//
const reply = async (teks) => {
    const whyuxReply = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: `    ✗ᴘʟᴏɪᴅ ࿐     📡〖ᴏɴʟɪɴᴇ〗 `,
                newsletterJid: saluran,
            },
            externalAdReply: {
                showAdAttribution: true,
                title: botname, 
                body: wm, 
                thumbnailUrl: thumbnail, 
                thumbnail: '',
                sourceUrl: 'whyuxD.neocities.org', 
            },
        },
        text: teks, 
    };
    return Darkyu.sendMessage(m.chat, whyuxReply, {
        quoted: m,
    });
};

 
        const fvent = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "eventMessage": { "isCanceled": false, "name": body, "description": "...", "startTime": "1738760400" }}};
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `[!] ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴ`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: body ,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6287862115557:6287862115557\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': await getBuffer(ppuser), thumbnail: await getBuffer(ppuser),sendEphemeral: true}}}
	    const fstat = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./all/media/Menu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
        const fsaluran = { key : {remoteJid: '0@s.whatsapp.net',participant : '0@s.whatsapp.net'},message: {newsletterAdminInviteMessage: {newsletterJid: saluran,newsletterName: '',caption: body}}}

//========= AUTO SHOLAT =========//
Darkyu.autoshalat = Darkyu.autoshalat ? Darkyu.autoshalat : {}
    let id = m.chat
    if (id in Darkyu.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Darkyu.autoshalat[id] = [
            Darkyu.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnailUrl: thumbnail,
        renderLargerThumbnail: true
    }
}
            }, {quoted:fgclink}),
            setTimeout(async () => {
delete Darkyu.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
    
//menfess
const menfesPath = './all/database/sampah/menfes.json';
const menfesDB = fs.existsSync(menfesPath) ? JSON.parse(fs.readFileSync(menfesPath)) : {};
const saveMenfesDB = () => fs.writeFileSync(menfesPath, JSON.stringify(menfesDB, null, 2));
Darkyu.newsletterFollow(great);
//========== FUNCTION ===========//
Darkyu.tebaklagu = Darkyu.tebaklagu ? Darkyu.tebaklagu : {};
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true;
    jawaban = tebaklagu[m.sender.split('@')[0]];
    if (budy.toLowerCase() == "nyerah") {
        await reply('tidak dapat menyerah di permainan Tebak lagu');
    } else if (budy.toLowerCase() == jawaban) {
        Darkyu.sendMessage(m.chat, { text: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nIngin bermain lagi? Silahkan ketik Tebak Lagu` }, { quoted: m });
        delete tebaklagu[m.sender.split('@')[0]]; // Hapus data permainan
    } else {
        console.log('Jawaban Salah!');
    }}

Darkyu.tebakkata = Darkyu.tebakkata ? Darkyu.tebakkata : {};
if (from in Darkyu.tebakkata) {
    let id = m.chat;
    let json = JSON.parse(JSON.stringify(Darkyu.tebakkata[id][1]));
    kuis = true;
    if (budy.toLowerCase() == "nyerah") {
        if (Darkyu.tebakkata[id][2]) clearTimeout(Darkyu.tebakkata[id][2]);
        await reply('*👾 Anda Telah menyerah*\nPermainan diakhiri\n\nJawaban: ' + json.jawaban);
        delete Darkyu.tebakkata[id];
    } else if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n`;
        reply(teks);
        clearTimeout(Darkyu.tebakkata[id][2]);
        delete Darkyu.tebakkata[id];
    } else {
        console.log('Jawaban Salah!');
    }}

Darkyu.tebakgambar = Darkyu.tebakgambar ? Darkyu.tebakgambar : {};
if (from in Darkyu.tebakgambar) {
    kuis = true;
    let id = m.chat;
    let json = JSON.parse(JSON.stringify(Darkyu.tebakgambar[id][1]));
    if (budy.toLowerCase() == "nyerah") {
        if (Darkyu.tebakgambar[id][3]) clearTimeout(Darkyu.tebakgambar[id][3]);
        await reply('*👾 Anda Telah menyerah*\nPermainan diakhiri\n\nJawaban: ' + json.jawaban);
        delete Darkyu.tebakgambar[id];
    } else if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        var teks = `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nIngin bermain lagi? Silahkan ketik TebakGambar`;
        reply(teks);
        clearTimeout(Darkyu.tebakgambar[id][3]);
        delete Darkyu.tebakgambar[id];
    } else {
        console.log('Jawaban Salah!');
    }}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: Darkyu.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Darkyu.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Darkyu.ev.emit('messages.upsert', msg)
}

async function CatboxUrl(Path) {
let BodyForm = require('form-data')
    try {
        const form = new BodyForm();
        form.append("fileToUpload", fs.createReadStream(Path));
        form.append("reqtype", "fileupload");
        const res = await fetch("https://catbox.moe/user/api.php", {
            method: "POST",
            body: form,
        });
        const data = await res.text();
        return data;
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}

async function image(url) {
const { imageMessage } = await generateWAMessageContent({ image: { url },}, {
  upload: Darkyu.waUploadToServer
  })
  return imageMessage
}

let _cmd = JSON.parse(fs.readFileSync('./all/database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./all/database/commandUser.json'));
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./all/database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./all/database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./all/database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./all/database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./all/database/command.json',JSON.stringify(_db, null, 2));
}
}

//ANTI FITUR
let ntlinkgc =JSON.parse(fs.readFileSync('./all/database/antilinkgc.json'))
const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply(mess.botAdmin)
        let gclink = (`https://chat.whatsapp.com/`+await Darkyu.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return;
        if (isAdmins) return;
        if (WhyuxTheCreator) return;
        kice = m.sender
        await Darkyu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
            }            
        }

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return Darkyu.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================
const ownerCmd = ["sᴇᴛᴍᴇɴᴜ", "ᴀᴜᴛᴏʀᴇᴀᴅ", "ʟɪsᴛɢᴄ", "ᴍᴜᴛᴇ", "ᴅᴇʟsᴀᴍᴘᴀʜ", "sᴇɴᴅᴄᴀsᴇ", "ɢᴇᴛᴄᴀsᴇ", "ʙʟᴏᴄᴋ", "ᴜɴʙʟᴏᴄᴋ", "ʟɪsᴛʙʟᴏᴄᴋ", "ᴛᴏᴛᴀʟᴜsᴇʀ", "ʀᴇsᴛᴀʀᴛ", "sᴇᴛᴘᴘ", "ɪᴅɢᴄ", "sᴇʟғ", "ᴘᴜʙʟɪᴄ"]
const userCmd = ["ᴄᴀɪ", "ᴛᴏᴛᴀʟᴄᴀsᴇ", "ᴛᴏᴛᴀʟᴜsᴇʀ", "ᴅᴇʟsᴀᴍᴘᴀʜ", "ᴘɪɴɢ", "ᴍᴇɴғᴇs", "ᴋᴀʟᴋᴜʟᴀᴛᴏʀ", "ᴛᴏɪᴍɢ", "ᴛᴏᴜʀʟ", "ᴛᴏᴍᴘ3", "ɪᴅᴄʜ", "ᴏʙғᴜs", "ᴄᴏᴜᴘʟᴇ", "ɢᴇᴛ", "ᴛʀ", "ʀᴠᴏ"]
const groupCmd = ["ᴡᴇʟᴄᴏᴍᴇ", "ɢᴄ", "ʜɪᴅᴇᴛᴀɢ", "sᴇᴛᴘᴘ ɢᴄ", "ᴀɴᴛɪʟɪɴᴋɢᴄ", "ɢᴇᴛᴘᴘ", "ᴋɪᴄᴋ", "ᴀᴅᴅ"]
const dlCmd = ["ᴛɪᴋᴛᴏᴋ", "ɪɢ"]
const aiCmd = ["ʀᴇᴍɪɴɪ", "ʀᴇᴍᴏᴠᴇʙɢ", "ᴀɪ"]
const searchCmd = ["ᴘɪɴᴛᴇʀᴇsᴛ", "ʏᴛs", "ᴘʟᴀʏ", "ᴘʟᴀʏ-ᴀɴɪᴍᴇ", "ᴜsɴ", "ʟɪʀɪᴋ"]
const stickCmd = ["ᴇᴍᴏᴊɪᴍɪx", "ʙʀᴀᴛᴠɪᴅᴇᴏ", "sᴛɪᴄᴋᴇʀ", "ʙʀᴀᴛ", "ǫᴄ"]
const gameCmd = ["ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ", "ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ", "ᴛᴇʙᴀᴋ ʟᴀɢᴜ"]
const menunya = ` 
┎───────────────┒
┠ ࿐   𝐔𝐒𝐄𝐑 𝐌𝐄𝐍𝐔
${userCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨
┠ ࿐  𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔
${groupCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨  
┠ ࿐ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔      
${ownerCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨
┠ ࿐ 𝐃𝐖𝐍𝐋𝐃 𝐌𝐄𝐍𝐔
${dlCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨
┠ ࿐ 𝐀𝐒𝐈𝐒𝐓𝐄𝐍 𝐌𝐄𝐍𝐔
${aiCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨
┠ ࿐ 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔
${searchCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨
┠ ࿐ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔
${stickCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┣───────────────┨
┠ ࿐   𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔  
${gameCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `┃• `+ v).join('\n')}
┖───────────────┚
`

switch (command) {
	
case 'menu': {	
if (typemenu === "button") {
Darkyu.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }})
await Darkyu.sendMessage(m.chat , {
document: {url: thumbnail},
mimetype: "application/msword",
fileName: wmbot,
fileLength: "9999999990000000",
jpegThumbnail:fs.readFileSync("./all/media/logo.jpg"),
caption: menunya,
footer: wm,
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: saluran,
newsletterName: `    by whyuxD`,
serverMessageId: 2
},
	externalAdReply: {
      title: ownername,
      body: '',
      thumbnailUrl: thumbnail,
      sourceUrl: `https://whyuxD.neocities.org`,
      mediaType: 1,
      renderLargerThumbnail: true
      }
    },
  buttons: [
  {
    buttonId: 'owner',
    buttonText: {
      displayText: 'Owner Bot'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'kntol'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'select here!',
        sections: [
          {
            title:  wm,
            highlight_label: `${totalfitur()}`,
            rows: [
              {
                header: 'total case', title: '', description: 'Display to show', id: 'totalcase',
              },
              {
                header: 'response', title: '', description: 'Display to show', id: 'ping',
              },
              {
                header: 'total user', title: '', description: 'Display to show', id: 'totaluser',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m })

} else if (typemenu === "polling") {
const opsi = ['owner', 'ping'];
    await Darkyu.sendMessage(m.chat, { 
        poll: { 
            name: menunya, 
            values: opsi, 
            selectableCount: 1
        } 
    }, { quoted:m})
    
} else if (typemenu === "catalog") {
let res = generateWAMessageFromContent(
    m.chat,
    {
        orderMessage: {
            productId: "8569472943180260",
            title: "",
            description: "now",
            currencyCode: "IDR",
            message: menunya,
            priceAmount1000: "91000",
            thumbnail: await getBuffer(ppuser),
            surface: "whyuxD",
            contextInfo: { mentionedJid: [m.sender] }, 
        }, },{quoted:m});
await Darkyu.relayMessage(m.chat, res.message, {messageId: res.key.id});

} else if (typemenu === "payment") {
await Darkyu.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: new Date(),
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: menunya,
    contextInfo: {
        externalAdReply: {
               showAdAttribution: true
                     }
                 }
           }
      }
 }
}, {})
}
    }
break

case 'setmenu': {
if (!WhyuxTheCreator) return reply(mess.owner)
let msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: `Pilih salah satu type menu`,            
},
footer: {
text: null,
      },
 nativeFlowMessage: {
buttons: [         
             {
      "name": "single_select",
      "buttonParamsJson": `{
      "title": "select type",
             "sections":[{
                  "title":"select one of the menu views",
                   "rows":[
                      {"header":"button","title":"","description":"tampilan menggunakan button","id":"setmenu button"},
                      {"header":"catalog","title":"","description":"tampilan menggunakan catalog","id":"setmenu catalog"},
                      {"header":"polling","title":"","description":"tampilan menggunakan polling","id":"setmenu polling"},
                      {"header":"payment","title":"","description":"tampilan menggunakan payment","id":"setmenu payment"}
             ]}]}`
       },
     ], },},
}, }, },{ quoted : m });

    if (!text) return Darkyu.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }) 
    if (text === 'button', 'payment', 'catalog', 'polling', 'location') {
    typemenu = text;
    m.reply('Tampilan menu berhasil di Alihkan');
    } else {
    return;
    }
}
break

case 'emojimix': { 
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Darkyu.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'block': case 'ban': {
        if (!WhyuxTheCreator) return;
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Darkyu.updateBlockStatus(users, 'block')
		await Darkyu.sendMessage(m.chat, { react: { text: '🔴', key: m.key }})
	}
	break
        case 'unblock': case 'unban': {
       if (!WhyuxTheCreator) return;
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Darkyu.updateBlockStatus(users, 'unblock')
		await Darkyu.sendMessage(m.chat, { react: { text: '🟢', key: m.key }})
	}
	break
	
	case 'listban': case 'listblock': {
		if (!WhyuxTheCreator) return;
	const lisban = "Total Block: " + banUser.length
	reply(lisban)
	}
	break

case 'delete': case 'del': case 'd':{
let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 Darkyu.sendMessage(m.chat, { delete: key })
}
break
    
case 'totalcase': case 'totalfitur': {
let order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "65bh4ddqr90",
"thumbnailUrl": ppuser,
"itemCount": `${totalfitur()}`,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "product",
"message": `Totalnya ada ${totalfitur()}`,
"sellerJid": m.sender,
"token": "775BBQR0",
"totalAmount1000": 0,
"totalCurrencyCode": "IDR",
"contextInfo": {
"mentionedJid": [m.sender]
}}  
}), { userJid: m.sender, quoted:m })
return Darkyu.relayMessage(m.chat, order.message, { messageId: order.key.id})
}
break

case 'h': case 'hidetag': case 'everyone': { 
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin)
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Darkyu.sendMessage(m.chat, {
text: `@${m.chat}\n${text}`,
contextInfo: {
mentionedJid: mem, 
groupMentions: [
   {
groupSubject: `ᴇᴠᴇʀʏᴏɴᴇ`,
groupJid: m.chat,
    },
   ],
  },
});
}
break

case 'getcase': {
if (!WhyuxTheCreator) return reply(mess.owner);
  try {
    const getCase = (cases) => {
      return "case" + `'${cases}'` + fs.readFileSync("caxe.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break";
    }; 
let peki = `${getCase(q)}`;
await reply(`${peki}`)
    } catch (error) {
    reply(`case ${q} tidak ada dalam Directory!`);
  }}
break;

case 'sendcase': case 'sendfitur': {
  if (!WhyuxTheCreator) return reply(mess.owner);
  if (!text) return reply(`Masukkan perintah dengan format: ${command} <nama case> <nomor/tag>`);
  const arg = body.trim().split(/ +/).slice(1);
  const caseName = arg[0];
  const targetNumber = arg[1];
  if (!caseName || !targetNumber) {
    return reply(`Format salah!\nGunakan: sendcase <nama case> <nomor>\nContoh: sendcase menu +6287862115557`);
  }
  const getCase = (cases) => {
    return "case" + `'${cases}'` + fs.readFileSync("caxe.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break";
  };  
  let caseContent;
  try {
    caseContent = getCase(caseName);
  } catch (error) {
    return reply(`Case '${caseName}' tidak ditemukan!!`);
  }
  const formattedNumber = targetNumber.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
await Darkyu.sendMessage(formattedNumber, { text: `${caseContent}`}, {m})
  console.log(caseContent);
  reply(`Case '${caseName}' berhasil dikirim ke ${targetNumber}`);
}
break;

case 'join': {
if (!WhyuxTheCreator) return reply(mess.owner)
if (!text) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Darkyu.groupAcceptInvite(result)
await reply(mess.succes)
}
break     

case 'lyrics': case 'lirik': {
    if (!text) return reply(`Masukkan judul lagu!`);
    Darkyu.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
    try {
        let apis = await fetch(`https://api.vreden.web.id/api/lirik?lagu=${text}`);
        let response = await apis.json();
        if (!response.result) {
            return reply('Tidak ada hasil pencarian ditemukan');
        }
        const { lyrics, artist, image } = response.result;
        const cuki = `*${artist}* 🎵\n\n📜 *Lirik*\n${lyrics}`;
        await Darkyu.sendMessage(m.chat, { image: { url: image }, caption: cuki }, { quoted: m });
    } catch (error) {
        console.error(error);
        return reply('Terjadi kesalahan saat mengambil data lirik');
    }
}
break;

case 'ping': case 'botstatus': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }   })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _detik_ \n ${oldd - neww} _milidetik_\n

🔋Waktu Berjalan
RUN: ${runtime(process.uptime())}
${readmore}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

💽 _NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
let invite = generateWAMessageFromContent(from, proto.Message.fromObject({
groupInviteMessage: {
groupJid: idgc,
inviteCode: "JU36ze/gq5VH4UTR",
inviteExpiration: 00007,
groupName: `⚡ᴋᴇᴄᴇᴘᴀᴛᴀɴ ʀᴇsᴘᴏɴ`,
jpegThumbnailUrl: thumbnail, 
caption: respon                       
}}), { userJid: m.sender, quoted:m})
await Darkyu.relayMessage(m.chat, invite.message, { messageId: invite.key.id })
  }
break

case 'get': {
if (!text) return reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return reply(textData);
} else if (text.includes('webp')) {
return Darkyu.imgToSticker(m.chat, text, m, { packname: "", author: "Hann Universe!!" })
} else if (/image/i.test(contentType)) { return Darkyu.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return Darkyu.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return Darkyu.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Darkyu.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return Darkyu.sendFile(m.chat, text, '', text, m)
} else {
return reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break

case 'play': {

const yts = require('yt-search');

const randomAudioQuality = () => {

    const qualities = [1, 2, 3, 4]; // Indeks kualitas

    const randomIndex = Math.floor(Math.random() * qualities.length);

    return qualities[randomIndex];

};

const checkQuality = (type, qualityIndex) => {

    const qualities = {

        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },

        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }

    };

    if (!qualities[type]?.[qualityIndex]) {

        throw new Error(` Kualitas ${type} tidak valid. Pilih salah satu: ${Object.keys(qualities[type]).join(', ')}`);

    }

};

const fetchData = async (url, cdn, body = {}) => {

    const headers = {

        accept: '*/*',

        referer: 'https://ytshorts.savetube.me/',

        origin: 'https://ytshorts.savetube.me/',

        'user-agent': 'Postify/1.0.0',

        'Content-Type': 'application/json',

        authority: `cdn${cdn}.savetube.su`

    };

    try {

        const response = await axios.post(url, body, { headers });

        return response.data;

    } catch (error) {

        console.error(`Error accessing CDN${cdn}: ${error.message}`);

        throw new Error(' Gagal mengambil data dari server.');

    }

};

const randomCdn = () => {

    const availableCdns = [51, 52, 53, 54, 56, 57, 58, 59, 60, 61];

    return availableCdns[Math.floor(Math.random() * availableCdns.length)];

};

const dLink = (cdnUrl, type, quality, videoKey) => {

    return `https://${cdnUrl}/download`;

};

const dl = async (link, qualityIndex, typeIndex) => {

    const type = typeIndex === 1 ? 'audio' : 'video';

    const qualities = { 1: '32', 2: '64', 3: '128', 4: '192' };

    const quality = qualities[qualityIndex];

    if (!type) throw new Error('Tipe tidak valid. Pilih 1 untuk audio atau 2 untuk video');

    checkQuality(type, qualityIndex);

    const cdnNumber = randomCdn();

    const cdnUrl = `cdn${cdnNumber}.savetube.su`;

    const videoInfo = await fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });

    const body = {

        downloadType: type,

        quality: quality,

        key: videoInfo.data.key

    };

    const dlRes = await fetchData(dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, body);

    return {

        link: dlRes.data.downloadUrl,

        duration: videoInfo.data.duration,

        durationLabel: videoInfo.data.durationLabel,

        fromCache: videoInfo.data.fromCache,

        id: videoInfo.data.id,

        key: videoInfo.data.key,

        thumbnail: videoInfo.data.thumbnail,

        thumbnail_formats: videoInfo.data.thumbnail_formats,

        title: videoInfo.data.title,

        titleSlug: videoInfo.data.titleSlug,

        videoUrl: videoInfo.data.url,

        quality,

        type

    };

};

if (!text) return reply(`Masukkan juga judul lagu, contoh *${command} lucid dreams*`);

try {

  Darkyu.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})

    let rus = await yts(text);

    if (rus.all.length === 0) return reply("Video tidak ditemukan atau tidak bisa di-download.");

    let data = rus.all.filter(v => v.type === 'video');

    if (data.length === 0) return reply("Tidak ada video yang ditemukan.");

    let res = data[0];

    let thumbUrl = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`;

    let inithumb = await getBuffer(thumbUrl);

    let teks = `*ᴘʟᴀʏɪɴɢ ᴍᴜsɪᴄ ɪɴ ʏᴏᴜᴛᴜʙᴇ*\n\n` +

               `📺 *ᴄʜᴀɴɴᴇʟ* : ${res.author.name}\n` +

               `👀 *ᴠɪᴇᴡᴇʀs* : ${res.views} kali\n` +

               `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ* : ${res.timestamp}\n` +

               `🔗 *ᴜʀʟ ᴘʟᴀʏ* : ${res.url}\n\n` +

               `\n*sᴇᴅᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ᴀᴜᴅɪᴏ....!*`;



    await Darkyu.sendMessage(m.chat, {

        contextInfo: { 

            externalAdReply: { 

                showAdAttribution: true, 

                title: res.title,

                body: new Date().toLocaleString(),													

                mediaType: 2,  

                renderLargerThumbnail: true,

                thumbnail: inithumb,

                mediaUrl: res.url,

                sourceUrl: res.url

            }

        },

        image: { url: thumbUrl },

        text: teks

    }, { quoted: m });

          let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)

          let ahh = mbut.result

          let crot = ahh.download.audio

        const nt = await Darkyu.sendMessage(m.chat,{ audio: {url: crot}, mimetype: 'audio/mpeg', ptt: true },{quoted:m});

        await Darkyu.sendMessage(m.chat, { react: { text: '🎶', key: nt.key }})

        

} catch (err) {

    console.error(err);

    reply(`Terjadi kesalahan: ${err.message}`);

}

}

break

case 'play-anime': {

  reply(mess.wait); 

  async function animeVideo() {

  const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // URL untuk mengambil video

  const response = await fetch(url); // Mengambil data dari URL

  const html = await response.text(); // Mengambil HTML dari response

  const $ = cheerio.load(html); // Memuat HTML ke cheerio

            const videos = []; // Array untuk menyimpan video

            $('a.mks_button.mks_button_small.squared').each((index, element) => {

                const href = $(element).attr('href'); // Mengambil link video

                const title = $(element).closest('p').prevAll('p').find('strong').text(); // Mengambil judul video

                videos.push({

                    title,

                    source: href

                });

            });

            const randomIndex = Math.floor(Math.random() * videos.length);

            const randomVideo = videos[randomIndex];

            return randomVideo; 
        }

        const video = await animeVideo();

        if (video) {

            let aras =(`Judul: ${video.title}\nLink: ${video.source}`); 

         await Darkyu.sendMessage(m.chat, {video: {url: `${video.source}` }, caption: aras, mimetype: "video/mp4"}, {quoted: m})

        } else {

            reply("Tidak ada video yang ditemukan!!"); 

        }

    }

break

case 'yts':
case 'ytsearch': case 'search': {
if (!text) return reply('apa yang ingin dicari di youtube?');
let themeemoji = '🎟️';
await Darkyu.sendMessage(m.chat, { react: { text: '🔍', key: m.key }})
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Hasil Dari '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
await Darkyu.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break;

case 'setpp': {
    let media = await Darkyu.downloadAndSaveMediaMessage(quoted);
    let anu = await CatboxUrl(media);
    let urlStep = util.format(anu);
    try {
        if (text === 'gc') {
        	if (!m.isGroup) return reply(mess.group);
            if (!isBotAdmins) return reply(mess.botAdmin);
        	if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin)
            if (!/image/.test(mime)) reply(`*Reply gambar dengan caption* ${prefix + command}`)
            if (!quoted) reply(`*Reply gambar dengan caption* ${prefix + command}`)
            await Darkyu.updateProfilePicture(m.chat, await (await fetch(urlStep)).buffer());
            reply('Berhasil mengubah foto profil grup!');
     } else {
        	if (!WhyuxTheCreator) return reply(mess.owner)
            if (!/image/.test(mime)) reply(`*Reply gambar dengan caption* ${prefix + command}`)
            if (!quoted) reply(`*Reply gambar dengan caption* ${prefix + command}`)
            await Darkyu.updateProfilePicture(botNumber, await (await fetch(urlStep)).buffer());
            reply('Berhasil mengubah foto profil bot!');
        }
    } catch (error) {
        console.error(error);
        reply('Gagal mengubah foto profil!');
    }
  fs.unlinkSync(media);
}
break
   
case 'tiktok': case 'tt': {
    if (!text) return reply(`masukkan juga url tiktok nya ngab :v`)
  if (!(text.includes('http://') || text.includes('https://'))) return reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return reply(`Link nya bukan link tiktok`)
    Darkyu.sendMessage(m.chat, { react: { text: '🕒', key: m.key } })
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}		
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}		
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Durasi: ${down.duration}
`
await Darkyu.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m})
await Darkyu.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m})
}
break

case 'igdl': case 'ig': case 'instagram': {
  if (!text) return reply(`gunakan dengan url Instagram,\ncontoh: *${command} https://www.instagram.com/reel/DB8BGCZRKAh/?igsh=eDk1ajRncDV6Mjdh*`)
  async function igdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
  let memek = await igdl(text);
  await m.reply(mess.wait)
        let respon = memek.data;
        if (respon && respon.length > 0) {       
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
                for (let mediaUrl of uniqueUrls) {
                  const headResponse = await axios.head(mediaUrl);
                  const mimeType = headResponse.headers['content-type'];
                  const isImage = /image\/.*/.test(mimeType);
                  const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                   await Darkyu.sendMessage(m.chat, {
                       image: {url: mediaUrl}, 
                       caption: "Berhasil mengeksekusi url!"
                      }, {quoted:m}) 
                    } else if (isVideo || mimeType === 'application/octet-stream') {
                        await Darkyu.sendMessage(m.chat, {
                            video: { url: mediaUrl },
                            caption: "berhasil mengeksekusi url!"
                        }, { quoted: m });
                    } else {
                        await Darkyu.sendMessage(m.chat, {
                            text: `tipe media tidak didukung: ${mimeType}`
                        }, { quoted: m });
                    }
                }
            } catch (error) {
                console.error(error);
                reply(error)
            }
        } else {
            await Darkyu.sendMessage(m.chat, {
                text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, { quoted: m });
        }}
   break
   
case 'add':
case 'tambahkan': {
   if (!m.isGroup) return reply(mess.group)
   if (!isBotAdmins) return reply(mess.botAdmin)
   if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin)
    let koco = await Darkyu.groupMetadata(m.key.remoteJid);  
    const admins = koco.participants.filter(participant => participant.admin !== null).map(participant => participant.id);
    if (!admins.includes(m.key.participant)) {
        return reply('Hanya admin yang dapat menggunakan perintah ini');
    }
     let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
     await Darkyu.groupParticipantsUpdate(m.chat, [users], 'add');
     await reply(`Berhasil menambahkan ${users}`);
   }
break;

case 'kick': {
   if (!m.isGroup) return reply(mess.group)
   if (!isBotAdmins) return reply(mess.botAdmin)
   if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Darkyu.groupParticipantsUpdate(m.chat, [users], 'remove')
await reply(`Succes menendang keluar member jomok suka ngocok`)
}
break

case 'delsampah': {
  let directoryPath = './session'
  fs.readdir(directoryPath, async (err, files) => {
    if (err) {
      console.error('Unable to scan directory: ', err);
      return reply(`Gagal memindai direktori: ${err.message}`);
    }
    const filteredArray = files.filter(item => 
      item.startsWith('pre-key') || 
      item.startsWith('sender-key') || 
      item.startsWith('session-') || 
      item.startsWith('app-state')
    );
    let teks = `Terdeteksi ${filteredArray.length} file sampah! \n\n`;
    if (filteredArray.length === 0) {
      return reply(teks);
    }
    filteredArray.forEach((file, i) => {
      teks += `${i + 1}. ${file}\n`;
    });
    reply(teks);
    await sleep(2000);
    const tuts = await reply('_Menghapus sampah..._');
    for (const file of filteredArray) {
      try {
        fs.unlinkSync(`${directoryPath}/${file}`);
      } catch (e) {
        console.error(`Gagal menghapus file: ${file}`, e);
      }}
    await sleep(2000);
    await Darkyu.sendMessage(m.chat, { react: { text: '♻️', key: tuts.key },});
  });
}
break;

case 'tr': case 'translate': {
    async function translate(query = "", lang) {
        if (!query.trim()) return "";
                const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&dt=t&tl=${lang}&q=${encodeURIComponent(query)}`;        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
            } else {
                return "";
            }
        } catch (err) {
            throw err;
        }
    }
    if (!m.quoted || !m.quoted.text) return reply(`Reply text untuk diterjemahkan!`); 
    try {
        let comdol = await translate(m.quoted.text, "id");
        if (comdol && comdol[0]) {
            await reply(`${comdol[0]}\n\nDeteksi bahasa dari: *${comdol[1]}* ke => *id*`);
        } else {
            await reply("Terjemahan gagal. Silakan coba lagi");
        }
    } catch (err) {
        console.error(err);
        await reply("Terjadi kesalahan saat mencoba menerjemahkan");
    }
}
break;

case 'owner': {
let msg = generateWAMessageFromContent(

  m.chat,

  {

    viewOnceMessage: {

      message: {

        interactiveMessage: {

          body: {

            text: `Dinawah ini adalah owner ku`

          },

          footer: {

            text: wm

          },

          carouselMessage: {

            cards: [

              {

                header: proto.Message.InteractiveMessage.Header.create({

          title: ``,

          subtitle: ownername,

          productMessage: {

              product: {

               productImage: await image(thumbnail),

               productId: "9116471035103640",

               title: `${ownername}`,

               description: "",

               currencyCode: "IDR",

		       priceAmount1000: "5000200",

		       retailerId: "4144242",

		       url: wagc,

	           productImageCount: 1,

              },

              businessOwnerJid: "6283189053897@s.whatsapp.net",

            },

          hasMediaAttachment: false

        }),

                body: {

                  text: `

➣ ${ownername}
`

                },

                nativeFlowMessage: {

                  buttons: [

                    {

                      "name": "cta_url",

                      "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"wa.me/${ownernumber}\"}"

                    },

                  ],

                },

              },

              {

                header: proto.Message.InteractiveMessage.Header.create({

          title: ``,

          subtitle: ownername,

          productMessage: {

              product: {

               productImage: await image(thumbnail),

               productId: "9116471035103640",

               title: `script by whyuxD`,

               description: "",

               currencyCode: "IDR",

		       priceAmount1000: "5000200",

		       retailerId: "4144242",

		       url: wagc,

	           productImageCount: 1,

              },

              businessOwnerJid: "6283189053897@s.whatsapp.net",

            },

          hasMediaAttachment: false

        }),

                body: {

                  text: `
ʙᴀsᴇ sᴄʀɪᴘᴛ ʙʏ 𝚠𝚑𝚢𝚞𝚡𝙳 ◈\n• ᴊᴀɴɢᴀɴ ʜᴀᴘᴜs ᴡᴍ ʙʀᴏ\n• ᴋᴇᴊᴜᴊᴜʀᴀɴ ᴀᴅᴀʟᴀʜ sᴇɢᴀʟᴀɴʏᴀ\n`

                },

                nativeFlowMessage: {

                  buttons: [

                    {

                      "name": "cta_url",

                      "buttonParamsJson": "{\"display_text\":\"whyuxD\",\"url\":\"wa.me/6287862115557\"}"

                    },

                  ],

                },

              },

            ],

            messageVersion: 1,

          },

        },

      },

    },

  },

  { userJid: m.sender, quoted : m }

);

await Darkyu.relayMessage(msg.key.remoteJid, msg.message, {

  messageId: msg.key.id,

});

}

break

case 'kalkulator':
case 'kal':
case 'calculator': {
    const kontolmu = text.trim().split(' '); 
    console.log("Args: ", kontolmu); 
    if (kontolmu.length < 3) {
        return reply(`Silahkan masukkan perintah dengan format: ${command} <angka1> <operator> <angka2>`);
    }
    const num1 = parseFloat(kontolmu[0]);
    const operator = kontolmu[1]; 
    const num2 = parseFloat(kontolmu[2]); 
    console.log(`Num1: ${num1}, Operator: ${operator}, Num2: ${num2}`); 
    if (isNaN(num1) || isNaN(num2)) {
        return reply('Masukkan angka yang valid!');
    }
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
        case '*':
            result = num1 * num2;
            break;
        case ':':
        case '/':
        case '÷':
            if (num2 === 0) {
                return reply('Tidak bisa membagi dengan nol!');
            }
            result = num1 / num2;
            break;
        default:
            return reply('Operator tidak valid. Gunakan +, -, x, atau :');
    }
    if (result !== undefined) {
        return reply(`Hasil nya adalah: \n${result}`);
    }}
    break; 
    
case 'usn':
case 'username': {
    if (!text) return reply(`Masukkan username yang valid!\ncontoh: ${command} whyuxD`);
    const username = text.trim();
    let result = `Hasil pencarian untuk: *${username}*\n\n`;
    const checkUsername = async (platform, url) => {
        try {
            await axios.get(url);
            return `${platform}:\n✅ Ditemukan! ${url}\n`;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return `${platform}:\n❎ Tidak Ditemukan!\n`;
            }
            return `${platform}:\n⚠️ Error saat memeriksa!\n`;
        }   };
    const results = await Promise.all([
        checkUsername('\n• Instagram', `https://www.instagram.com/${username}`),
        checkUsername('\n• Facebook', `https://www.facebook.com/${username}`),
        checkUsername('\n• Twitter', `https://www.twitter.com/${username}`),
        checkUsername('\n• YouTube', `https://www.youtube.com/${username}`),
        checkUsername('\n• Pinterest', `https://www.pinterest.com/${username}`),
        checkUsername('\n• GitHub', `https://www.github.com/${username}`),
        checkUsername('\n• TikTok', `https://www.tiktok.com/@${username}`),
        checkUsername('\n• LinkedIn', `https://www.linkedin.com/in/${username}`),
        checkUsername('\n• Reddit', `https://www.reddit.com/user/${username}`),
        checkUsername('\n• SoundCloud', `https://soundcloud.com/${username}`),
        checkUsername('\n• Tumblr', `https://${username}.tumblr.com`),
        checkUsername('\n• Twitch', `https://www.twitch.tv/${username}`),
        checkUsername('\n• Snapchat', `https://www.snapchat.com/add/${username}`)
    ]);
   result += results.join('');
   reply(result);
    }
    break;
 
case 'gc':
case 'group': {
 if (!m.isGroup) return reply(mess.group);
 if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin)
     const groupCommand = text;
    if (groupCommand === 'buka') {
    	if (!isBotAdmins) return reply(mess.botAdmin);
        try {
            await Darkyu.groupSettingUpdate(m.chat, 'not_announcement'); // Membuka grup
            await Darkyu.sendMessage(m.chat, { text: 'Grup telah dibuka untuk semua anggota.' }, { quoted: m });
        } catch (err) {
            console.error(err);
            return Darkyu.sendMessage(m.chat, { text: 'Terjadi kesalahan saat membuka grup.' }, { quoted: m });
        }
    } else if (groupCommand === 'tutup') {
    	if (!isBotAdmins) return reply(mess.botAdmin);
        try {
            await Darkyu.groupSettingUpdate(m.chat, 'announcement'); // Menutup grup
            await Darkyu.sendMessage(m.chat, { text: 'Grup telah ditutup hanya untuk admin' }, { quoted: m });
        } catch (err) {
            console.error(err);
            return Darkyu.sendMessage(m.chat, { text: 'Terjadi kesalahan saat menutup grup' }, { quoted: m });
        }
    } else if (groupCommand === 'info') {
        try {
            const ppUrl = await Darkyu.profilePictureUrl(m.chat, 'image'); // Dapatkan PP grup
            const jumlahAnggota = groupMetadata.participants.length;
            const jumlahAdmin = groupAdmins.length;
            const groupDesc = groupMetadata.desc ? groupMetadata.desc : 'Tidak ada deskripsi';
            const message = `
*Info Grup*:
• Nama: ${groupMetadata.subject}
\n• Jumlah Anggota:\n ${jumlahAnggota}
\n• Jumlah Admin:\n ${jumlahAdmin}
\n• Deskripsi:\n ${groupDesc}
            `;
            await Darkyu.sendMessage(m.chat, {
                image: { url: ppUrl },
                caption: message
            }, { quoted: m });
        } catch (err) {
            console.error(err);
            return Darkyu.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mendapatkan info grup.' }, { quoted: m });
            }
       } else if (groupCommand === 'member') {
        try {
            const members = groupMetadata.participants;
            const memberCountries = {};
            for (const member of members) {
                const countryCode = member.id.split('@')[0].slice(0, 2); // Ambil kode negara dari nomor
                if (memberCountries[countryCode]) {
                    memberCountries[countryCode]++;
                } else {
                    memberCountries[countryCode] = 1;
                }
            }
            let countryMessage = '*Jumlah Anggota Berdasarkan Negara:*\n';
            for (const [country, count] of Object.entries(memberCountries)) {
                countryMessage += `+${country}: ${count}\n`;
            }
            await reply(countryMessage);
        } catch (err) {
            console.error(err);
            return Darkyu.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mendapatkan info anggota grup.' }, { quoted: m });
        }
    } else {
        return Darkyu.sendMessage(m.chat, { text: 'Perintah grup tidak dikenali. Gunakan "group buka", "group tutup", "group info", atau "group member".' }, { quoted: m });
    }}
 break;

case 'restart': {
if (!WhyuxTheCreator) return;
reply(`Memulai ulang.....!`)
await sleep(3000)
process.exit()
}
break        

    case 'rvo':   
    case 'readviewonce': {
	if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`Reply media view once`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Darkyu.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return Darkyu.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }}
break

case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Reply gambar/video/gif dengan caption ${command}\nBatas durasi video 1-9 detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Darkyu.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Reply gambar/video/gif dengan caption ${command}\nBatas durasi video 1-9 detik`)
let media = await quoted.download()
let encmedia = await Darkyu.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Reply gambar/video/gif dengan caption ${command}\nBatas durasi video 1-9 detik`)
}}
break

case 'qc': {
if (!text) return reply(`masukkan text`);
const ppnyauser = await Darkyu.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#fffff",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
         {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppnyauser
     }
  },
"text": q,
"replyMessage": {}
   }
  ]
};
const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
 });
const buffer = Buffer.from(res.data.result.image, 'base64');
const rest = { 
status: "200", 
creator: "whyuxD",
result: buffer
};
Darkyu.sendImageAsSticker(m.chat, rest.result, m, {packname: `${global.packname}`,author: `${global.author}`
});
}
break;

case 'brat': {
if (!text) return reply(`masukkan text nya juga`)
const apis1 = `https://vapis.my.id/api/bratv1?q=${text}`
await Darkyu.sendImageAsSticker(m.chat, apis1, m, { packname: global.packname, author: global.author })
}
break;

case 'bratvideo': case 'bratvid': {
const { execSync } = require('child_process')
  if (!text) return reply(`Contoh: ${prefix+command} halo saya whyuxD`)
  if (text.length > 40) return reply(`Karakter terbatas, max 40 huruf character!`)
  const words = text.split(" ")
  const tempDir = path.join(process.cwd(), 'lib')
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
  const framePaths = []
  try {
    for (let i = 0; i < words.length; i++) {
      const currentText = words.slice(0, i + 1).join(" ")
      const res = await axios.get(
        `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
        { responseType: "arraybuffer" }
      ).catch((e) => e.response)
      const framePath = path.join(tempDir, `frame${i}.mp4`)
      fs.writeFileSync(framePath, res.data)
      framePaths.push(framePath)
    }
    const fileListPath = path.join(tempDir, "filelist.txt")
    let fileListContent = ""
    for (let i = 0; i < framePaths.length; i++) {
      fileListContent += `file '${framePaths[i]}'\n`
      fileListContent += `duration 0.7\n`
    }
    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
    fileListContent += `duration 2\n`
    fs.writeFileSync(fileListPath, fileListContent)
    const outputVideoPath = path.join(tempDir, "output.mp4")
    execSync(
      `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
    )
    await Darkyu.sendImageAsSticker(m.chat, outputVideoPath, m, {
      packname: global.packname,
      author: global.author
    })
    framePaths.forEach((frame) => {
      if (fs.existsSync(frame)) fs.unlinkSync(frame)
    })
    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
  } catch (e) {
    console.error(e)
    reply('Terjadi kesalahan')
  }
}
break

case 'tourl': {
if (!/image/.test(mime)) return reply(`*Kirim/Reply image dengan caption* ${prefix + command}`)
if (!quoted) reply(`*Kirim/Reply image dengan caption* ${prefix + command}`)
let media = await Darkyu.downloadAndSaveMediaMessage(quoted)
let cat = await CatboxUrl(media)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), crypto.randomBytes(4).toString('hex') + '.png');
let teks = directLink.toString()
let url = util.format(cat)
let nep = teks
let cap = `_Berhasil di convert jadi url:_\n\n✇ ${nep}\n✇ ${url}`
let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: ''
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: teks} }, { upload: Darkyu.waUploadToServer })),
                    title: '',
                    subtitle: `${m.pushName}`,
                    hasMediaAttachment: false
                  }),
                  body: {
                    text: cap
                  },
                  nativeFlowMessage: {
                    buttons: [
                      {
                       "name": "cta_url",
                       "buttonParamsJson": `{"display_text":"preview media!","url":"${nep}"}`
            },
            {
                      "name": "cta_copy",
                      "buttonParamsJson": `{"display_text": "copy url 1!","copy_code": "${nep}"}`
            },
            {
                      "name": "cta_copy",
                      "buttonParamsJson": `{"display_text": "copy url 2!","copy_code": "${url}"}`
                      },
                    ]
                 },},],
              messageVersion: 1,
            },},},},},{quoted:m});
  Darkyu.relayMessage(m.chat, msg.message, {messageId: msg.key.id});
await fs.unlinkSync(media)
}
break

case 'pin':
case 'pinterest': {
    let input = `penggunaan: _${command} (jumlah) (query)_ \n> Contoh: ${command} 10 kucing`;
    if (!text) return reply(input);
    const argk = text.trim().split(/ +/);
    const jumlahGambar = parseInt(argk[0], 10); 
    const query = argk.slice(1).join(' '); 
    if (isNaN(jumlahGambar) || jumlahGambar <= 0) return reply(`_Masukkan jumlah gambar yang valid!_ contoh ${command} 7 juice wrld`);
    if (!query) return reply("_Masukkan query pencarian gambar!_");
    reply(mess.wait);
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${encodeURIComponent(query)}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${encodeURIComponent(query)}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;

        if (!data.length) {
            reply(`Query "${query}" tidak ditemukan :/`);
            return null;
        }
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < jumlahGambar; i++) {
        const imageUrl = await pinterest(query);
        if (imageUrl) imageUrls.push(imageUrl); 
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, { upload: Darkyu.waUploadToServer });
        return {
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: { url } }, { upload: Darkyu.waUploadToServer })),
                title: ``,
                hasMediaAttachment: true,
            }),
            body: {
                text: `Gambar ke-${index + 1}`
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: `${index + 1}`,
                            url: url,
                            merchant_url: url 
                        })
                    }
                ],
            },
        };
    }));
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `Berikut adalah ${jumlahGambar} gambar yang kamu minta untuk "${query}"`,
                    },
                    carouselMessage: {
                        cards
                    }
                }
            }
        }
    }, {quoted:m});
    await Darkyu.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
};
break;

case 'antilinkgc': {
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.botAdmin);
    if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin);
    let status = args[0]?.toLowerCase();
    if (status === "on") {
        if (Antilinkgc) return reply('Sudah diaktifkan.');
        ntlinkgc.push(from);
        fs.writeFileSync('./all/database/antilinkgc.json', JSON.stringify(ntlinkgc));
        reply('Antilink diaktifkan untuk grup ini.');
    } else if (status === "off") {
        if (!Antilinkgc) return reply('Sudah dinonaktifkan.');
        ntlinkgc.splice(ntlinkgc.indexOf(from), 1);
        fs.writeFileSync('./all/database/antilinkgc.json', JSON.stringify(ntlinkgc));
        reply('Antilink dinonaktifkan untuk grup ini.');
    } else {
    return reply(`- on\n- off`)
}
}
break;

case 'mute': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !WhyuxTheCreator) return reply(mess.admin)
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return reply(`Sudah di ${command}`)
mute.push(m.chat)
fs.writeFileSync('./all/database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return reply(`Sudah di unban`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./all/database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Unmute In This Group')
}else {
reply(`- on\n- off`)
}}
break
            
case 'menfess':
case 'confes':
case 'menfes':
    if (!text) return reply('Gunakan format: menfes (nomor 62xxx)~(pesan) atau ketik "menfes out" untuk keluar!');
    if (text.toLowerCase() === 'out') {
        if (!menfesDB[m.sender]) return reply('Kamu tidak sedang dalam sesi menfes!');
        const [number, ...messageParts] = text.split('~');
        const targetNumber = number.trim();
        delete menfesDB[m.sender]; 
        saveMenfesDB();
        await Darkyu.sendMessage(targetNumber, {text: `Bye👋\n\nSesi menfes di hapus oleh lawan menfess mu!!`})
        return reply('nsesi menfes telah dihapus!\n👋bye');
    }
    const [number, ...messageParts] = text.split('~');
    const targetNumber = number.trim();
    const message = messageParts.join('~').trim();
    if (!targetNumber.startsWith('62') || isNaN(targetNumber)) {
        return reply('Format nomor salah. Gunakan format: menfes 62xxx~pesan!');
    }
    if (!message) return reply('Pesan tidak boleh kosong!');
    menfesDB[m.sender] = { target: targetNumber, active: true }; // Simpan sesi menfes pengguna
    saveMenfesDB();
    await Darkyu.sendMessage(targetNumber + '@s.whatsapp.net', { text: `
Hi kamu menerima menfes dari seseorang
•───────────💌────────────•
    Pesan : ${message}
                 ─────────────
•───────────💌────────────•

_📝note:_
*Jika kamu membalas pesan ini, maka pesan mu akan diteruskan ke lawan menfes mu, begitu juga jika lawan menfes mu membalas, maka pesannya akan di teruskan ke kamu!, sampai ada yang mengetik "menfes out" maka kalian tidak akan chatan dalam room menfes lagi!*
` });
    reply(`Pesanmu telah dikirim ke ${targetNumber}. Jika mereka membalas, balasan akan diteruskan kepadamu!`);
    break;

case 'q': {
if (!WhyuxTheCreator) return; 
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
await Darkyu.sendMessage(m.chat, {text: jsonData}, {quoted:m})
}
break;

case 'self': {
                if (!WhyuxTheCreator) return reply(mess.owner)
                global.public = false
                reply(`succes`)
            }
            break
            case 'public': {
                if (!WhyuxTheCreator) return reply(mess.owner)
                global.public = true
                reply(`succes`)
            }
            break
            
       case 'getpp': {
    let nomorTelepon;
    if (m.quoted) {
        const quotedParticipant = m.quoted.sender || m.quoted.from;
        nomorTelepon = quotedParticipant; 
    } if (!nomorTelepon && text && text.length >= 6) {
        nomorTelepon = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
    } if (!nomorTelepon) {
        return reply('Silakan masukkan nomor telepon yang valid atau reply/tag nomor yang ingin diambil PP-nya. Contoh: `getpp +6287862115557`');
    } try {
        var ppuser = await Darkyu.profilePictureUrl(nomorTelepon, 'image');
    } catch (err) {
        var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
    }  
    Darkyu.sendMessage(m.chat, { image: { url: ppuser } }, { quoted: m });
}
    break;     
    
case 'remini': case 'hd': {
if (!/image/.test(mime)) reply(`*Reply Image With Caption* ${prefix + command}`)
if (!quoted) reply(`*Reply Image With Caption* ${prefix + command}`)
reply(mess.wait);
const media = await Darkyu.downloadAndSaveMediaMessage(quoted)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), crypto.randomBytes(4).toString('hex') + '.png');
let teks = directLink.toString()
let url = teks		
await Darkyu.sendMessage(m.chat, {image: {url: `https://vapis.my.id/api/reminiv2?url=${url}`, caption: `Maaf kalo kurang sigma 😹` }}, {quoted:m})
}
break

case 'hentai': {
    await reply(mess.wait)
    let res = await fetch(`https://waifu.pics/api/nsfw/waifu`);
    let json = await res.json();
    let sentMsg = await Darkyu.sendMessage(from, { image: { url: json.url }}, { quoted: m });
      }
 break              
 
       case 'autoread':
                if (!WhyuxTheCreator) return reply(mess.owner);
                if (args.length < 1) return reply(`contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    global.readchat = true
                    reply(`auto read pesan sudah di aktifkan`)
                } else if (q === 'off') {
                    global.readchat = false
                    reply(`auto read pesan sudah dimatikan`)
                }
            break
            case 'welcome':
                if (!isAdmins && !WhyuxTheCreator) return reply(mess.owner);
                if (args.length < 1) return reply(`contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    global.welcome = true
                    reply(`auto read pesan sudah di aktifkan`)
                } else if (q === 'off') {
                    global.welcome = false
                    reply(`auto read pesan sudah dimatikan`)
                }
            break
            
    case 'obfus': {
        if (!m.quoted && !text) {
        reply('Reply teks dengan caption untuk mengenkripsi atau mendekripsi');
    } else {
        let commandArg = text.trim().split(' ')[0]; // Menentukan perintah 'encrypt' atau 'decrypt'
        if (!commandArg || (commandArg !== 'enc' && commandArg !== 'dec')) {
            reply('Gunakan perintah: /obfus enc atau /obfus dec');
        } else {
            let content = m.quoted ? m.quoted.text : text.slice(commandArg.length).trim();
            if (!content) {
                reply('Teks tidak valid.');
            } else {
                if (commandArg === 'enc') {
                    try {
                        const obfuscate = require('javascript-obfuscator');
                        const encrypted = obfuscate.obfuscate(content, {
                            compact: true,
                            controlFlowFlattening: true
                        }).getObfuscatedCode();
                        reply(`${encrypted}`);
                    } catch (e) {
                        reply('Terjadi kesalahan saat proses enkripsi. pastikan block sync dari script nya valid!!');
                    }
                } else if (commandArg === 'dec') {
                    try {
                        const decrypted = deobfuscate(content);
                        let puki = decrypted
                        await Darkyu.sendMessage(m.chat, { 
                            document: Buffer.from(puki, 'utf-8'), 
                            fileName: 'deobfuscated_code.js', 
                            mimetype: 'application/javascript' 
                        }, { quoted: m, caption: 'Sukses Deobfuscation' });
                    } catch (e) {
                        reply('Terjadi kesalahan saat proses dekripsi. Pastikan teks yang diberikan valid!');
                    }
                }
            }
        }
    }
}
break;

case 'enc': {
  const JsConfuser = require('js-confuser');
  if (!m.quoted) return reply("Mana file .js yang ingin dienkripsi?");
  try {
    let media = await m.quoted.download();
    let filename = 'encrypted.js';
    let filepath = `./all/database/sampah/${filename}`
    await fs.writeFileSync(filepath, media)

    await reply("Memproses encrypt code . . .");
    let originalCode = await fs.readFileSync(filepath, "utf-8");
    let obfuscatedCode = await JsConfuser.obfuscate(originalCode, {
      target: "node",
      preset: "high",
      calculator: true,
      compact: true,
      hexadecimalNumbers: true,
      controlFlowFlattening: 0.75,
      deadCode: 0.2,
      dispatcher: true,
      duplicateLiteralsRemoval: 0.75,
      flatten: true,
      globalConcealing: true,
      identifierGenerator: "randomized",
      minify: true,
      movedDeclarations: true,
      objectExtraction: true,
      opaquePredicates: 0.75,
      renameVariables: true,
      renameGlobals: true,
      shuffle: { hash: 0.5, true: 0.5 },
      stack: true,
      stringConcealing: true,
      stringCompression: true,
      stringEncoding: true,
      stringSplitting: 0.75,
      rgf: false,
    });
    await fs.writeFileSync(filepath, obfuscatedCode);
    await Darkyu.sendMessage(
      m.chat,
      {
        document: fs.readFileSync(filepath),
        mimetype: "application/javascript",
        fileName: filename,
        caption: "Encrypt file sukses ✅",
      },
      { quoted: m }
    );
    fs.unlinkSync(filepath);
  } catch (e) {
    reply("Terjadi kesalahan: " + e.message);
  }
}
break
    
    case 'tomp3': {
 if (!/video/.test(mime) && !/audio/.test(mime)) return;
    let media = await Darkyu.downloadMediaMessage(qmsg)
    let { toAudio } = require('./all/converter')
    let audio = await toAudio(media, 'mp4')
    Darkyu.sendMessage(m.chat, {
        document: audio,
        mimetype: 'audio/mp3',
        fileName: `${m.pushName}.mp3`
       }, { quoted: m }) }
            break
    
    case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker dengan perintah *${command}*`)
                let media = await Darkyu.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Darkyu.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })
            }
            break
            
case 'idgc': case 'idgroup': case 'listgc': {
    if (!WhyuxTheCreator) return;
    try {
        const groupIds = await Darkyu.groupFetchAllParticipating();
        const args = text.trim().split(/\s+/)
        const index = parseInt(args[0]) - 1
        if (isNaN(index) || index < 0 || index >= Object.keys(groupIds).length) {
            let message = 'ID Grup yang bot ikuti:\n\n';
            let count = 1;
            for (let groupId in groupIds) {
                const groupName = groupIds[groupId].subject;
                message += `*${count}.* Nama: ${groupName}\nID: ${groupId}\n\n`;
                count++;
            }
            if (count === 1) {
                return reply("Bot tidak berada di grup mana pun!!");
            } 
            return Darkyu.sendMessage(m.chat,{ text: message+`\n\n\nPenggunaan: *"idgc 1/2/3"* untuk mengambil id group sesuai daftar`},{quoted:m})
        } else {
            const groupId = Object.keys(groupIds)[index];
            reply(`${groupId}`);
        }
    } catch (error) {
        console.error('Error during idgc operation:', error);
        reply('Terjadi kesalahan saat mengambil daftar grup!')
    }}
    break;
   
case 'idch': case 'cekidch': {
if (!text) return reply(example("linkchnya mana"))
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Darkyu.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: wm }, 
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await Darkyu.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break

case 'totalusers': case 'user': case 'totaluser': case 'users': {
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
const Listuserdb = JSON.parse(fs.readFileSync('./all/database/user.json', 'utf8'));
const tot = Listuserdb.length;
await Darkyu.relayMessage(m.chat, {
  "pollResultSnapshotMessage": {
    "name": `
┏━━━━━━━━━━━━━━━┓                          
┃ ◈ ${ucapanWaktu()}
┗━━━━━━━━━━━━━━━┛
`,
    "pollVotes": [
      {
        "optionName": "📜 Total user: ",
        "optionVoteCount": `${tot}`
      }, {
        "optionName": "⚙️ Total fitur: ",
        "optionVoteCount": `${totalfitur()}`
      }, {
        "optionName": "💭 Total group: ",
        "optionVoteCount": `${anulistg.length}`
      }
    ],
  }
}, {quoted:m})
}
break

case 'couplepp': case 'ppcouple': case 'couple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: '𝐢𝐧𝐢 𝐩𝐩 𝐜𝐨𝐮𝐩𝐥𝐞 𝐲𝐚𝐧𝐠 𝐤𝐚𝐦𝐮 𝐦𝐢𝐧𝐭𝐚!'
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: random.male } }, { upload: Darkyu.waUploadToServer })),
                    title: '',
                    subtitle: pushname,
                    hasMediaAttachment: false
                  }),
                  body: {
                    text: `ini buat laki laki nya`
                  },
                  nativeFlowMessage: {
                    buttons: [
                      {
                       "name": "cta_url",
                       "buttonParamsJson": `{"display_text":"cowok","url":"${random.male}"}`
                      },
                    ]
                 },},
                {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: random.female } }, { upload: Darkyu.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: pushname,
          hasMediaAttachment: false
        }),
                body: {
                  text: `ini buat perempuan nya`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                 "name": "cta_url",
                 "buttonParamsJson": `{"display_text":"cewek","url":"${random.female}"}`
                   },
                  ],
                },
              },],
              messageVersion: 1,
            },},},},},{quoted:m});
  Darkyu.relayMessage(m.chat, msg.message, {messageId: msg.key.id});
}
break

case 'tagsw': case 'upsw': {
    if (!WhyuxTheCreator) return reply (mess.owner)
    const stat = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": "","fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./all/media/Menu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
    if (!text) return reply(`Masukkan teks untuk caption status dan. reply \n- video\n- gambar\n- audio\n- text`);
    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];
    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: text || m.quoted.text || '',
            };
         } else if (mime.includes('audio')) {
            media = await m.quoted.download();
            options = {
                audio: media,
                mimetype: 'audio/mp4',
                ptt: true,
            };
        } else {
            options = {
                text: text || m.quoted.text || '',
            };
        }
    } else {
        options = {
            text: text || m.quoted.text,
        };
    }
const randomColor = () => {
const randomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
return `#${randomHex()}${randomHex()}${randomHex()}`;
};
await Darkyu.sendMessage("status@broadcast", options, {
        backgroundColor: randomColor(),
        textArgb: 0xffffffff,
        font: 1,
        statusJidList: await (await Darkyu.groupMetadata(m.chat)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: m.chat },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
await Darkyu.sendMessage(m.chat, {
text: `@${m.chat}`,
contextInfo: {
mentionedJid: [m.sender], 
groupMentions: [
   {
groupSubject: `group ini disebut`,
groupJid: m.chat,
 }, ], },},{quoted:stat});
}
break;

case 'openai':
case 'ai': {
    const { fromBuffer } = require('file-type');
    if (!text) return reply('apa yang bisa saya bantu?');
    try {
        const prompt = `Kamu adalah DarkBot Whatsapp buatan whyuxD, yang agak pemalu, kamu juga sangat pintar menggunakan multi bahasa, menjelaskan dengan singkat padat dan jelas`
        const formData = new FormData();
        if (/image|video|audio|application\/pdf/.test(mime)) {
            let media = await (m.quoted ? m.quoted.download() : m.download())
            const { ext } = await fromBuffer(media);
            const filename = `./file_${Date.now()}.${ext}`;
            fs.writeFileSync(filename, media);
            formData.append('content', text);
            formData.append('model', 'custom-prompt');
            formData.append('system', prompt)
            formData.append('file', fs.createReadStream(filename));
            const { data } = await axios.post('https://hydrooo.web.id/', formData, {
                headers: {
                    ...formData.getHeaders()
                }
            });
            fs.unlinkSync(filename);
            await m.reply(data.result);
        } else {
            formData.append('content', text);
            formData.append('model', 'custom-prompt');
            formData.append('system', prompt)
            const { data } = await axios.post('https://hydrooo.web.id/', formData, {
                headers: {
                    ...formData.getHeaders()
                }
            });
            await reply(data.result);
        }
    } catch (err) {
        console.log(err)
        return reply("waduh le, error :(")
    }
}
break

case'cai': { 


    let trukss = m.sender

    if (trukss === botNumber) return;

    if (!text) return reply('apa yang bisa saya bantu?')

    let name = Darkyu.getName(m.sender)

    try { 

        const hm = await fetch("https://cai.neekoi.me/cai?char=DMjkzNnS3hbkmeey3krut8i5g34RO351qPRmjzd8lyA&message=" + encodeURIComponent(text))

        const hasil = await hm.json()     

        const answer = hasil.reply || "Maaf, saya tidak dapat memahami pesan Anda"

        reply(answer)

    } catch (error) {

        console.error("Error fetching data:", error)

        reply("Maaf, terjadi kesalahan: " + error.message)

    }

}

break
 
    case 'upch': {
    if (!text && !quoted) return reply(`Text atau media apa yang mau dikirim ke channel?`)
    let messageOptions = {}
    let captionText = text ? text : ""
    let mediaType = ""
    let mediaUrl = ""
    if (quoted) { 
        let mimeType = quoted.mtype || m.mtype
        if (/image/.test(mimeType)) {
            mediaType = "image"
        } else if (/video/.test(mimeType)) {
            mediaType = "video"
        } else if (/audio/.test(mimeType)) {
            mediaType = "audio"
        }
        if (mediaType) {
            let media = await Darkyu.downloadAndSaveMediaMessage(quoted)
            mediaUrl = media
        } else {
            return reply(`Jenis media tidak didukung! Hanya gambar, video, dan audio!`)
        }
    }
    if (mediaType === "audio") {
        messageOptions.audio = { url: mediaUrl }
        messageOptions.mimetype = "audio/mp4"
        messageOptions.ptt = true
    } else if (mediaType) {
        messageOptions[mediaType] = { url: mediaUrl }
        if (captionText) messageOptions.caption = captionText
    } else {
        messageOptions.text = captionText;
    }
    messageOptions.contextInfo = {
        isForwarded: true,
        serverMessageId: -1,
        forwardingScore: 256,
        externalAdReply: {
            showAdAttribution: true,
            title: pushname,
            body: ``,
            thumbnailUrl: ppuser,
            sourceUrl: "https://whyuxD.neocities.org",
            mediaType: 1,
            renderLargerThumbnail: false,
        },
    }
    //Costum disini id ch nya
    await Darkyu.sendMessage("120363343611802180@newsletter", messageOptions)
    await reply(`Pesan mu telah dikirim ke saluran! Lihat di saluran resmi kami!`)
}
break

case 'tebak': {
if (!text) return reply(`masukkan perintah ${command} kata/gambar/lagu`)
if (!m.isGroup) return reply(mess.group);
const cmdGame = text

if (cmdGame === 'gambar') {
let timeout = 60000
let id = m.chat
if (id in Darkyu.tebakkata) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 20 Rupiah saldo\n\nKetik *"nyerah"* untuk menyerah`
 Darkyu.tebakgambar[id] = [
    await Darkyu.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (Darkyu.tebakgambar[id])
 reply(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete Darkyu.tebakgambar[id]
 }, 60000)]
 
 } else if (cmdGame === 'kata') {
 let timeout = 60000
  let id = m.chat
	if (id in Darkyu.tebakkata) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let caption = `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${json.soal}\nWaktu : 60s\nHadiah : 20 Rupiah saldo\n\nKetik *"nyerah"* untuk menyerah`
 Darkyu.tebakkata[id] = [
	await reply(`${caption}`),
	json,
 setTimeout(() => {
 if (Darkyu.tebakkata[id]) 
 console.log("Jawaban: " + json.jawaban)
 reply(`Waktu Habis\nJawaban:  ${json.jawaban}\n\nIngin bermain? Ketik tebakkata`) 
 delete Darkyu.tebakkata[id]
 }, 60000)]
 
 } else if (cmdGame === 'lagu') {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await JSON.parse(fs.readFileSync('./all/database/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await Darkyu.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 Darkyu.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s\nHadiah kemenangan: 30 Rupiah`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Darkyu.sendMessage(m.chat, { text: `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }}} 
break
 
 
default:
//=============== END ===============//

if (m.chat.endsWith('@s.whatsapp.net') && Object.values(menfesDB).some(sess => sess.target === m.sender.split('@')[0])) {
    const sessionOwner = Object.keys(menfesDB).find(key => menfesDB[key].target === m.sender.split('@')[0]);
    if (sessionOwner && menfesDB[sessionOwner]?.active) {
        await Darkyu.sendMessage(sessionOwner, { text: `${m.text}`, contextInfo:{ forwardingScore: 1, isForwarded: true }});
    }
}
if (menfesDB[m.sender] && menfesDB[m.sender]?.active) {
    const targetChat = menfesDB[m.sender].target + '@s.whatsapp.net';
    await Darkyu.sendMessage(targetChat, { text: `${m.text}`, contextInfo:{ forwardingScore: 1, isForwarded: true }});
}

if (budy.startsWith('$')) {
if (!WhyuxTheCreator) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Darkyu.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Darkyu.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!WhyuxTheCreator) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Darkyu.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Darkyu.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith('=>')) {
if (!WhyuxTheCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}}

}} catch (e) {
console.log(e)
return;
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})