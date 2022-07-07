module.exports.config = {
	name:"uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB-api mod by Kaneki",
	description: "Random ảnh theo api - uptime",
	commandCategory: "Hệ Thống",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
  const res = await axios.get(`https://apituandz1407.herokuapp.com/api/hearing.php`);
	var poem = res.data.data;
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss ||  D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
axios.get('https://apikanna.khoahoang3.repl.co/').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body :`👾 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀: ${thu} ${gio} 𝐕𝐚̀ 𝐁𝐎𝐓 𝐜𝐮̉𝐚 𝐁𝐋𝐀𝐂𝐊 𝐜𝐡𝐚̣𝐲 đ𝐚̃ 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲.\n👻──── •💜• ────👻\nㅤ===🗃 𝗗𝗔𝗧𝗔 𝗨𝗦𝗘𝗥 🗃===\n🎎 𝐓𝐨̂̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${global.data.allUserID.length}\n🏩 𝐓𝐨̂̉𝐧𝐠 𝐧𝐡𝐨́𝐦: ${global.data.allThreadID.length}\nㅤ=====🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥=====\n🎮 𝐁𝐨𝐭 𝐓𝐲𝐩𝐞: Mirai v2\n🐳 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n💾 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 𝟏.𝟐.𝟏𝟓\n💻 𝐂𝐩𝐮 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${pidusage.cpu.toFixed(1)}\n📈 𝐑𝐚𝐦 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${byte2mb(pidusage.memory)}\n🌐 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}𝐦𝐬\n💬 𝐓𝐡𝐢́𝐧𝐡: ${poem}\n🎀──── •🌸• ────🎀\n𝐁𝐋𝐀𝐂𝐊`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}