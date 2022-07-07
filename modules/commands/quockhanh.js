module.exports.config = {
  name: "quockhanh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yuuki",
  description: "Đếm ngược tới Quốc Khánh nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam",
  commandCategory: "Công Cụ",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("September 2, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🇻🇳「𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗰𝗵𝗼 𝗤𝘂𝗼̂́𝗰 𝗞𝗵𝗮́𝗻𝗵 𝗻𝘂̛𝗼̛́𝗰 𝗖𝗼̣̂𝗻𝗴 𝗛𝗼̀𝗮 𝗫𝗮̃ 𝗛𝗼̣̂𝗶 𝗖𝗵𝘂̉ 𝗡𝗴𝗵𝗶̃𝗮 𝗩𝗶𝗲̣̂𝘁 𝗡𝗮𝗺」🇻🇳\n» ${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝘁𝗶𝗲̂́𝗻𝗴 ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 «`, event.threadID, event.messageID);
}