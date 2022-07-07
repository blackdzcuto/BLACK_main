module.exports.config = {
	name: "uptime",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nam",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "System",
	cooldowns: 0
};

function checkTime(i) {
         if (i < 10) {
             i = "0" + i;
           }
             return i;
};

module.exports.run = async function ({ api, event }) {
  const { threadID } = event,
    uptime = process.uptime(),
		hours = Math.floor(uptime / (60 * 60)),
		miutes = Math.floor((uptime % (60 * 60)) / 60),
		seconds = Math.floor(uptime % 60);
  
    return api.sendMessage(
  `➣ 𝐔𝐏𝐓𝐈𝐌𝐄: 『 ${checkTime(hours)}:${checkTime(miutes)}:${checkTime(seconds)} => ${(hours/24).toFixed()} 𝐝𝐚𝐲 』`,
 threadID);
  };