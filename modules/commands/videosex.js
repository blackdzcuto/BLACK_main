module.exports.config = {
  name: "xvideo",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Trung Kiên mod by Kaneki",
  description: "Random Video Sex",
  commandCategory: "nsfw",
  usages: "boobs",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000000) {
  axios.get('https://apituandz1407.herokuapp.com/api/videosex.php').then(res => {
  var image = res.data.url;
        let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `⚡️ 𝗩𝗶𝗱𝗲𝗼 𝗦𝗲𝘅 𝗖𝘂̉𝗮 𝗧𝗵𝗮̆̀𝗻𝗴 𝗔̂́𝘂 𝗗𝗮̂𝗺 𝗡𝗲̀\n-1000000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/videosex.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videosex.mp4`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/videosex.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000000})
      })
  } else return api.sendMessage("Bạn cần 1000000 đô",event.threadID,event.messageID);
}