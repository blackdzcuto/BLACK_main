module.exports.config = {
    name: "animeinfo",
    version: "1.0.0",
    hasPermision: 0,
    credit: "BLACK",
    description: "Thông tin về phim anime",
    commandCategory: "Tiện Ích",
    usages: "[name anime]",
    cooldowns: 0,
};

module.exports.run = async function({
    api,
    event,
    args,
    utils,
    Users,
    Threads
}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request")
        let {
            threadID,
            senderID,
            messageID
        } = event;
        if (!args[0]) {
            api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐭𝐞̂𝐧 𝐚𝐧𝐢𝐦𝐞", threadID, messageID)
        }
        const res = await axios.get(encodeURI(`https://api-ttk.herokuapp.com/other/anime?name=${args[0]}`));
        console.log(res.data);
        let data = res.data;
        let callback = function() {
            return api.sendMessage({
                body: `𝐓𝐞̂𝐧 𝐩𝐡𝐢𝐦 💎: ${data.title}\n𝐔𝐑𝐋 🔗: ${data.url}\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠 📜: ${data.noidung}\n𝐗𝐞̂́𝐩 𝐡𝐚̣𝐧𝐠 🏆: ${data.xephang}\n𝐒𝐨̂́ 𝐭𝐚̣̂𝐩 💌: ${data.episodes}`,
                attachment: fs.createReadStream(__dirname + `/cache/anime.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.png`), event.messageID);
        };
        return request(encodeURI(data.picture))
            .pipe(fs.createWriteStream(__dirname + `/cache/anime.png`))
            .on("close", callback);

    } catch (err) {
        console.log(err)
        return api.sendMessage(`Đ𝐚̃ 𝐱𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢`, event.threadID)
    }
}