module.exports.config = {
	name: "trungthu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "Đếm ngược tới ngày trung thu",
	commandCategory: "Công Cụ",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("september 21, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「𝐓𝐞̂́𝐭 𝐓𝐫𝐮𝐧𝐠 𝐓𝐡𝐮 𝐠𝐚̣ 𝐭𝐫𝐚𝐢 𝐯𝐞̂̀ 𝐩𝐡𝐨̀𝐧𝐠 𝐜𝐡𝐨̛𝐢 😈🎇🌠」\n» ${days} 𝐧𝐠𝐚̀𝐲 ${hours} 𝐭𝐢𝐞̂́𝐧𝐠 ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲 «`, event.threadID, event.messageID);
}