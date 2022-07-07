module.exports.config = {
  name: "sukuna",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Drasew",
  description: "Ảnh sukuna",
  commandCategory: "Random-IMG",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-sukuna.badboyminh.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `𝗔̉𝗻𝗵 𝘀𝘂𝗸𝘂𝗻𝗮 𝗻𝗲̀ <𝟯\n𝗦𝗼̂́ 𝗮̉𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${count} 𝗮̉𝗻𝗵`,
            attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
      })
}