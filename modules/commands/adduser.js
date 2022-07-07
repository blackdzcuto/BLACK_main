module.exports.config = {
	name: "adduser",
	version: "2.4.3",
	hasPermssion: 0,
	credits: "BLACK",
	description: "Thêm người dùng vào nhóm bằng link hoặc id",
	commandCategory: "Box Chat",
	usages: "[args]",
	cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const out = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
	var participantIDs = participantIDs.map(e => parseInt(e));
	if (!args[0]) return out("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐢𝐝 𝐮𝐬𝐞𝐫 𝐜𝐚̂̀𝐧 𝐚𝐝𝐝.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			if (fail == true && id != null) return out(id);
			else if (fail == true && id == null) return out("𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐈𝐃 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠.")
			else {
				await adduser(id, name || "người dùng Facebook");
			}
		} catch (e) {
			return out(`${e.name}: ${e.message}.`);
		}
	}

	async function adduser(id, name) {
		id = parseInt(id);
		if (participantIDs.includes(id)) return out(`${name ? name : "𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧"} đ𝐚̃ 𝐜𝐨́ 𝐦𝐚̣̆𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐨́𝐦.`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			}
			catch {
				return out(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 ${name ? name : "𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠"} 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 .`);
			}
			if (approvalMode === true && !admins.includes(botID)) return out(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 ${name ? name : "𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧"} 𝐯𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 !`);
			else return out(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 ${name ? name : "𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧"} 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 !`)
		}
	}
}