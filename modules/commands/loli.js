 module.exports.config = {
 name: "loli",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "TuanDz",
 description: "Random แบฃnh pekora",
 commandCategory: "Random-IMG",
 usages: "loli",
 cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://jrt-api.j-jrt-official.repl.co/loli').then(res => {
 let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
 let callback = function () {
					api.sendMessage({
						body: `๐ฬ๐ง๐ก ๐ฅ๐จ๐ฅ๐ข ๐๐ฎฬฬฃ๐ ๐๐ฎ๐ญ๐๐ ๐`,
      attachment: fs.createReadStream(__dirname + `/cache/loli.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/loli.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/loli.${ext}`)).on("close", callback);
   })
}