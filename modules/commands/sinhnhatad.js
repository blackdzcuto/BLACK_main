 module.exports.config = {
	name: "sinhnhatad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "Đếm ngược tới ngày sinh nhật của admin",
	commandCategory: "Công Cụ",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("December 12, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「𝗦𝗮̆́𝗽 𝘁𝗼̛́𝗶 𝗻𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵 𝗻𝗵𝗮̣̂𝘁 𝗰𝘂̉𝗮 𝐁𝐋𝐀𝐂𝐊 𝗿𝗼̂̀𝗶 𝗼́ <𝟯」\n» ${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝘁𝗶𝗲̂́𝗻𝗴 ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 «`, event.threadID, event.messageID);
}