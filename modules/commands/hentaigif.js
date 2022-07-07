module.exports.config = {
	name:"hentaigif",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB-api mod by Kaneki",
	description: "Random ảnh ny Quyền theo api",
	commandCategory: "nsfw",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/hentai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `𝐇𝐢𝐞̣̂𝐧 𝐫𝐨̃ 𝐜𝐚́𝐢 𝐛𝐚̉𝐧 𝐦𝐚̣̆𝐭 𝐝𝐚̂𝐦 𝐝𝐮̣𝐜 𝐜𝐮̉𝐚 𝐞𝐦 𝐢𝐮 𝐤𝐢̀𝐚`,
						attachment: fs.createReadStream(__dirname + `/cache/nyad.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nyad.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nyad.${ext}`)).on("close", callback);
			})
}