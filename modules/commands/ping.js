module.exports.config = {
	name: "ping",
	version: "0.0.3",
	hasPermssion: ,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "Box Chat",
	usages: "[Text]",
	cooldowns: 10
};

module.exports.run = async function({ api, event, args, Threads }) { 
  const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗛𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝗧𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗡𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const res = await axios.get("https://apikanna.khoahoang3.repl.co/");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
	try {
		const botID = api.getCurrentUserID();
		var listAFK, listUserID;
		global.moduleData["afk"] && global.moduleData["afk"].afkList ? listAFK = Object.keys(global.moduleData["afk"].afkList || []) : listAFK = []; 
		listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		listUserID = listUserID.filter(item => !listAFK.includes(item));
		var body = (args.length != 0) ? args.join(" ") : "𝐃𝐚̣̂𝐲 𝐫𝐚 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐧𝐚̀𝐨 𝐦𝐚̂́𝐲 𝐜𝐨𝐧 𝐦𝐚̣̆𝐭 𝐝𝐚̀𝐲", mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body: `📣====𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎====📣\n\n[🌸] - ${body}\n----------------------------\n[🦋] - 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀: ${thu} || ${gio}`, attachment: download, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}