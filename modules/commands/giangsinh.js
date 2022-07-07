module.exports.config = {
	name: "giangsinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược ngày Noel",
        commandCategory: "Công Cụ",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("December 25, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「 𝗖𝘂̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗻𝗴𝘂̛𝗼̛̣𝗰 𝘁𝗼̛́𝗶 𝗡𝗼𝗲𝗹 𝗻𝗮̀𝗼🎅🎄 」\n» ${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝘁𝗶𝗲̂́𝗻𝗴 ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 «`, event.threadID, event.messageID);
}