module.exports.config = {
    name: "dhbcv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB", // Dựa trên demo của ntkhang not phải bot mirai
    description: "game đuổi hình bắt chữ emoji",
    commandCategory: "Trò Chơi",
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const datagame = (await axios.get("https://goatbot.tk/api/duoihinhbatchuemoji")).data;
    const random = datagame.data;
    var msg = { body: `𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐨̛́𝐢 𝐜𝐚̂𝐮 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 💸\n${random.emoji1}${random.emoji2}\n${random.wordcomplete.replace(/\S/g, "█ ")}`};
    api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            wordcomplete: random.wordcomplete
        })
    });
    console.log(datagame)
};

module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies}) {
    const axios = global.nodemodule['axios'];
    switch (handleReply.type) {
    case "reply": {
        let { author,  wordcomplete, messageID} = handleReply;
        if (event.senderID != author)
            return api.sendMessage("𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐥𝐚̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢 𝐜𝐮̉𝐚 𝐜𝐚̂𝐮 𝐡𝐨̉𝐢 𝐧𝐚̀𝐲 🥲", event.threadID, event.messageID);
        function formatText(text) {
            return text.normalize("NFD")
                .toLowerCase()
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D");
        }(formatText(event.body) == formatText(wordcomplete)) ? api.sendMessage("𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐜𝐨𝐧 𝐯𝐨̛̣ 𝐜𝐚̂𝐮 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐫𝐚̂́𝐭 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 ❤️", event.threadID, event.messageID): api.sendMessage(`𝐒𝐚𝐢 𝐛𝐞́𝐜 𝐫𝐨̂̀𝐢, 𝐧𝐠𝐮 𝐥𝐚̆́𝐦 𝐜𝐨𝐧 𝐚̣, 𝐜𝐚̂𝐮 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 𝐥𝐚̀ 🎀: ${wordcomplete}`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
    }
  }
};
