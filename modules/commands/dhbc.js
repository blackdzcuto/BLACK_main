module.exports.config = {
    name: "dhbc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB",
    description: "Đuổi hình bắt chữ trên chính messenger của bạn!!!",
    commandCategory: "Trò Chơi",
    usages: "",
    cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies}) {
    const axios = global.nodemodule['axios'];
    switch (handleReply.type) {
    case "reply": {
        let { author,  wordcomplete, messageID} = handleReply;
        function formatText(text) {
            return text.normalize("NFD")
                .toLowerCase()
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D");
        }(formatText(event.body) == formatText(wordcomplete)) ? api.sendMessage("𝐗𝐢𝐧 𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 𝐜𝐚̂𝐮 𝐡𝐨̉𝐢 𝐜𝐨́ 𝐦𝐮̛́𝐜 𝐤𝐡𝐨́ 𝐜𝐚̂́𝐩 𝐭𝐡𝐞̂́ 𝐠𝐢𝐨̛́𝐢 ❤️", event.threadID, event.messageID): api.sendMessage(`𝐒𝐚𝐢 𝐫𝐨̂̀𝐢 𝐛𝐚̣𝐧 𝐞𝐢𝐢𝐢 𝐧𝐠𝐮 𝐥𝐚̆́𝐦 𝐞𝐦 𝐚̣ 𝐯𝐞̂̀ 𝐡𝐨̣𝐜 𝐭𝐡𝐞̂𝐦 𝐢𝐤, 𝐜𝐚̂𝐮 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 𝐥𝐚̀ 🦋: ${wordcomplete}`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
    }
  }
};

module.exports.run = async function ({ api, event, Users }) {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID } = event;
const res = (await axios.get("https://goatbot.tk/api/duoihinhbatchu")).data;
console.log(res);
const dataGame = res.data
let question = (await axios.get(`${dataGame.image1}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/dhbc1.png`, Buffer.from(question, "utf-8") );
let answer = (await axios.get(`${dataGame.image2}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/dhbc2.png`, Buffer.from(answer, "utf-8") );      
var img_qs = [];
        img_qs.push(fs.createReadStream(__dirname + `/cache/dhbc1.png`));      
        img_qs.push(fs.createReadStream(__dirname + `/cache/dhbc2.png`));
        var msg = {body: `𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐨̛́𝐢 𝐜𝐚̂𝐮 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 🌸\n𝐆𝐨̛̣𝐢 𝐲́ 🎀: ${dataGame.wordcomplete.replace(/\S/g, "█ ")}`, attachment: img_qs}
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            tukhoa: dataGame.wordcomplete,
            dapan: dataGame.wordcomplete,
            wordcomplete: dataGame.wordcomplete
        })
    }) 
}
