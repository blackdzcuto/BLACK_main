module.exports.config = {
  name: "lucy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Lucy Fairy Tail",
  commandCategory: "Random-IMG",
  usages: "lucy",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apilucy.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸𝗟𝘂𝗰𝘆 𝗻𝗲̀ <𝟯\n🌸𝗦𝗼̂́ 𝗮̉𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${count} 𝗮̉𝗻𝗵`,
            attachment: fs.createReadStream(__dirname + `/cache/lucy.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/lucy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/lucy.${ext}`)).on("close", callback);
      })
}