const moment = require('moment-timezone');

function ucapanWaktu() {
    const time = moment().tz('Asia/Makassar').format('HH:mm:ss');
    
    if (time < "05:00:00") {
        return "selamat pagi 🌄";
    }
    if (time < "11:00:00") {
        return "selamat siang 🌅";
    }
    if (time < "15:00:00") {
        return "selamat siang 🌞";
    }
    if (time < "18:00:00") {
        return "selamat sore 🌇";
    }
    if (time < "19:00:00") {
        return "selamat sore 🌆";
    }
    return "selamat malam 🌃";
}

module.exports = { ucapanWaktu };
