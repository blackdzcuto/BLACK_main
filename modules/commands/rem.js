module.exports.config = {
  name: "rem",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Hầu Gái Rem",
  commandCategory: "Edit-IMG",
  usages: "𝐄𝐝𝐢𝐭-𝐈𝐦𝐠",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apirem.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸𝗥𝗲𝗺 𝗻𝗲̀ <𝟯\n🌸𝗦𝗼̂́ 𝗮̉𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${count} 𝗮̉𝗻𝗵`,
            attachment: fs.createReadStream(__dirname + `/cache/rem.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/rem.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/rem.${ext}`)).on("close", callback);
      })
}