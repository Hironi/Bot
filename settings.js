require("./all/module.js")
//========== Setting ==========//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
////////////////////////////////////////////////

global.tumb = ["https://wa.me/qr/ECCXBWZD4OQSG1", "https://www.instagram.com/hironimusposen09?igsh=MXdsMWVpajR0MjZ1dg=="]

global.owner = ["6282157298268"]  
global.saluran = "120363343611802180@newsletter"
global.idgc = "120363248826862499@g.us" 

global.botname = "DARKNESS"
global.ownername = 'HIRONI…⁠ᘛ⁠⁐̤⁠ᕐ⁠ᐷ'
global.ownerNumber = ["6282157298268@s.whatsapp.net"] 
global.wagc = "https://wa.me/qr/ECCXBWZD4OQSG1" 
global.wm = "シうーん、ワヒディ。" 
global.wmbot = "彡 • ᴠᴛʀ-✘ ᴛᴇᴀᴍ ミ" 
global.packname = "by bot hironi"
global.author = "HIRONI…⁠ᘛ⁠⁐̤⁠ᕐ⁠ᐷ "
global.prefa = ['','!','.','#','&']
global.typemenu = "button" //payment, polling, product

//-+++-//
global.public = true
global.welcome = true
global.readchat = true

//messages
global.mess = {
    success: '✓ 🅂🅄🄲🄲🄴🅂\n𝚜𝚞𝚌𝚌𝚎𝚜 𝚔𝚊𝚔 `>//<`',
    admin: '∅ 🄰🄲🄲🄴🅂 🄳🄸🅃🄾🄻🄰🄺\n𝚟𝚒𝚝𝚞𝚛 𝚒𝚗𝚒 𝚔𝚑𝚞𝚜𝚞𝚜 𝚞𝚗𝚝𝚞𝚔 𝚊𝚍𝚖𝚒𝚗',
    botAdmin: '∅ 🄰🄲🄲🄴🅂 🄳🄸🅃🄾🄻🄰🄺\n𝚋𝚘𝚝 𝚋𝚎𝚕𝚞𝚖 𝚖𝚎𝚗𝚓𝚊𝚍𝚒 𝚊𝚍𝚖𝚒𝚗',
    owner: '∅ 🄰🄲🄲🄴🅂 🄳🄸🅃🄾🄻🄰🄺\n𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚊 𝙾𝚠𝚗𝚎𝚛!',
    group: '∅ 🄰🄲🄲🄴🅂 🄳🄸🅃🄾🄻🄰🄺\n𝚟𝚒𝚝𝚞𝚛 𝚒𝚗𝚒 𝚔𝚑𝚞𝚜𝚞𝚜 𝚍𝚒𝚍𝚊𝚕𝚊𝚖 𝚐𝚛𝚘𝚞𝚙',
    private: '∅ 🄰🄲🄲🄴🅂 🄳🄸🅃🄾🄻🄰🄺\n𝚟𝚒𝚝𝚞𝚛 𝚒𝚗𝚒 𝚔𝚑𝚞𝚜𝚞𝚜 𝚍𝚒 𝚌𝚑𝚊𝚝 𝚙𝚛𝚒𝚟𝚊𝚝𝚎',
    wait: '🅟🅛🅔🅐🅢🅔 🅦🅐🅘🅣',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
