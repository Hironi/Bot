require("./all/module.js");

//========== Setting ==========//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
global.doc5 = 'application/pdf';
global.doc6 = 'application/vnd.android.package-archive';

// Media Sosial & Identitas
global.tumb = ["https://wa.me/qr/ECCXBWZD4OQSG1", "https://www.instagram.com/hironimusposen09?igsh=MXdsMWVpajR0MjZ1dg=="];
global.owner = ["6282157298268"];  
global.saluran = "120363343611802180@newsletter";
global.idgc = "120363248826862499@g.us";

global.botname = "DARKNESS";
global.ownername = "HIRONI";
global.ownerNumber = ["6282157298268@s.whatsapp.net"];
global.wagc = "https://wa.me/qr/ECCXBWZD4OQSG1";
global.wm = "シ Hironi";
global.wmbot = "彡 Hironi Bot ミ";
global.packname = "by Hironi Bot";
global.author = "HIRONI";
global.prefa = ['','!','.','#','&'];
global.typemenu = "button"; // payment, polling, product

// Pengaturan Bot
global.public = true;
global.welcome = true;
global.readchat = true;

// Pesan Bot
global.mess = {
    success: '✓ 🅂🅄🄲🄲🄴🅂\nSukses kak!',
    admin: '∅ Akses Ditolak\nFitur ini hanya untuk admin!',
    botAdmin: '∅ Akses Ditolak\nBot belum menjadi admin!',
    owner: '∅ Akses Ditolak\nFitur ini hanya untuk Owner!',
    group: '∅ Akses Ditolak\nFitur ini hanya untuk grup!',
    private: '∅ Akses Ditolak\nFitur ini hanya untuk chat private!',
    wait: '🅟🅛🅔🅐🅢🅔 🅦🅐🅘🅣...',
};

// Memantau Perubahan File
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`File '${__filename}' diperbarui!`));
    delete require.cache[file];
    require(file);
});
