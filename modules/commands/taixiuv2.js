module.exports.config = {
    name: "taixiu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chơi tài xỉu",
    commandCategory: "Trò Chơi",
    usages: "[tài/xỉu]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
    if (!args[0]) return api.sendMessage("Bạn phải cược tài hoặc xỉu...", threadID, messageID);
    const choose = args[0]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu') return api.sendMessage("Chỉ đặt cược tài hoặc xỉu!", threadID, messageID)
    const money = args[1]
    if (money < 50 || isNaN(money)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`⚡️Số dư bạn không đủ ${money}$ để có thể chơi`, threadID, messageID);
    try {
        const res = (await axios.get(`https://api.ndtmint.repl.co/taixiu`)).data
        const image = [];
        const result = res.result;
        if(result == false) result = '𝟑 𝐦𝐚̣̆𝐭 𝐜𝐮̀𝐧𝐠 𝐥𝐨𝐚̣𝐢';
        for (let i in res.images) {
            var path = __dirname + `/cache/${i}.png`;
            var img = (await axios.get(`${res.images[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(img, "utf-8"));
            image.push(fs.createReadStream(path));
        }
        if (choose.toLowerCase() == result) {
            await Currencies.increaseMoney(senderID, parseInt(money * 1));
            api.sendMessage({ body: `🏮──── •🎲• ────🏮\nㅤㅤㅤ🎁 𝐁𝐚̣𝐧 𝐭𝐡𝐚̆́𝐧𝐠 𝐥𝐨̛́𝐧 \nㅤㅤㅤ💵 𝐆𝐨𝐦 𝐯𝐞̂̀: ${money*1}$\nㅤㅤㅤ🍀 𝐊𝐞̂́𝐭 𝐪𝐮𝐚̉: ${result}\n🏮──── •🎲• ────🏮`, attachment: image }, threadID, messageID);
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(money));
            api.sendMessage({ body: `🏮──── •🎲• ────🏮\nㅤㅤㅤ📌 𝐁𝐚̣𝐧 𝐭𝐡𝐮𝐚 𝐦𝐞̣ 𝐫𝐨̂̀𝐢\nㅤㅤㅤ🧨 𝐁𝐚𝐲 𝐦𝐚̂́𝐭: ${money}$\nㅤㅤㅤ🍀 𝐊𝐞̂́𝐭 𝐪𝐮𝐚̉: ${result}\n🏮──── •🎲• ────🏮`, attachment: image}, threadID, messageID);
        }
        for(var i = 0; i < image.length; i++) {
            fs.unlinkSync(__dirname + `/cache/${i}.png`);
        }
    } catch(e) {
        console.log(e);
        return api.sendMessage('😌Vui lòng chờ!\n🎋lỗi không mong muốn, bot sẽ được thay api sớm nhất có thể để không ngắt sự trải nghiệm của bạn ', threadID, messageID);
    }
}