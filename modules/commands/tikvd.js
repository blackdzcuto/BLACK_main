module.exports.config = {
	name: "tikvd",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Tải video tiktok",
	commandCategory: "Tiện Ích",
	usages: "",
	cooldowns: 5
}, module.exports.onLoad = function() {
	console.log("===TIKTOK DOWNLOAD NO WATERMARK===")
}, module.exports.run = async function({ args,event,	api }) {
  const axios = require("axios");
  const fs = require("fs-extra");
    const request = require("request");
  var img = [];
  if(!args[0]){
    return api.sendMessage(`Chưa nhập nội dung ?`,event.threadID, event.messageID)
  }
  const res = (await axios.get(`http://api.leanhtruong.net/api-no-key/tiktok?url=${encodeURI(args[0])}`)).data
   let imga = (await axios.get(res.thumbail , { responseType: "arraybuffer" } )).data; 
         fs.writeFileSync(__dirname + "/cache/tiktok.png", Buffer.from(imga, "utf-8") );
         img.push(fs.createReadStream(__dirname + "/cache/tiktok.png"));
  var msg = {body: `🎀=====[ 𝐓𝐈𝐊𝐓𝐎𝐊 ]=====🎀\n\n𝐓𝐢𝐭𝐥𝐞: ${res.title}\n𝐀𝐮𝐭𝐡𝐨𝐫: ${res.author_video}\n𝐓𝐢𝐭𝐥𝐞 𝐌𝐮𝐬𝐢𝐜: ${res.data_music.title}\n\n𝟭. 𝗧𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 🎞\n𝟮. 𝗧𝗮̉𝗶 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝗶𝗸𝘁𝗼𝗸 🎶\n\n[👉] 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣\n\n[❗] 𝐋𝐮̛𝐮 𝐲́: 𝐭𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐱𝐮𝐚̂́𝐭 𝐯𝐢𝐝𝐞𝐨, 𝐚̂𝐦 𝐭𝐡𝐚𝐧𝐡 𝐧𝐡𝐚𝐧𝐡 𝐡𝐚𝐲 𝐜𝐡𝐚̣̂𝐦 𝐭𝐮𝐲̀ 𝐭𝐡𝐞𝐨 𝐝𝐮𝐧𝐠 𝐥𝐮̛𝐨̛̣𝐧𝐠 🗂`,attachment: img}
  return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            video: res.data_nowatermark[0].url,
            mp3: res.data_music.url,
            title: res.title,
          authorvd: res.author_video,
          text : res.data_music.title
        })
    }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
 const axios = require("axios");
  const fs = require("fs-extra");
    const request = require("request");
    let { author, video,mp3, title,authorvd, text  , messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("𝐂𝐡𝐨̣𝐧 𝟏 𝐡𝐨𝐚̣̆𝐜 𝟐 𝐭𝐡𝐨̂𝐢 𝐭𝐡𝐚̆̀𝐧𝐠 𝐧𝐠𝐮 𝐚̣ 😠", event.threadID, event.messageID); 
    switch(handleReply.type) {
        case "reply": {
        switch(event.body){
          case"1":{
            var callback = () => api.sendMessage({body:`𝐂𝐡𝐮̉ 𝐯𝐢𝐝𝐞𝐨: ${authorvd}\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${title}\n`,attachment: fs.createReadStream(__dirname + "/cache/toptop.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.mp4"),event.messageID);
return request(encodeURI(`${video}`)).pipe(fs.createWriteStream(__dirname+'/cache/toptop.mp4')).on('close',() => callback());     
          }
            case"2":{
            var callback = () => api.sendMessage({body:`𝐒𝐨𝐧𝐠: ${text}`,attachment: fs.createReadStream(__dirname + "/cache/toptop.m4a")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.m4a"),event.messageID);
return request(encodeURI(`${mp3}`)).pipe(fs.createWriteStream(__dirname+'/cache/toptop.m4a')).on('close',() => callback());     
          }
        }
        }
    }
}