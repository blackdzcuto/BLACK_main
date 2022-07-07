module.exports.config = {
    name: "addfile",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "BLACK",
    description: "Upload file lên buildtool.dev và áp dụng code từ buildtool.dev",
    commandCategory: "ADMIN",
    cooldowns: 0
  };
  
  module.exports.run = async function ({ api, event,args }) {
     const permission = ["100005201702431"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Vô thay id đi moá :>", event.threadID, event.messageID);
    const request = require('request')
    const cheerio = require('cheerio');
    const fs = require('fs')
    const { threadID, messageID } = event;
    const content = args.join(' ');
    if(!content) return api.sendMessage('𝐓𝐡𝐢𝐞̂́𝐮 𝐝𝐮̛̃ 𝐥𝐢𝐞̣̂𝐮!', threadID, messageID);
    if(content.endsWith(".js") || content.endsWith(".json")) {
      var data = await fs.readFile(
        `${__dirname}/${content}`,
        "utf-8",
        async function (err, data) {
          if (err) return api.sendMessage(`Không tìm thấy file "${content}".`, threadID, messageID);
          await builtooldev(data)
        }
      );
    }
    else if(event.type == "message_reply" && (event.messageReply.body.indexOf('https://buildtool.') !== -1 || event.messageReply.body.indexOf('https://tinyurl.com') !== -1)) {
      if(!args[0]) return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐭𝐞̂𝐧 𝐟𝐢𝐥𝐞 𝐦𝐮𝐨̂́𝐧 𝐚́𝐩 𝐝𝐮̣𝐧𝐠 𝐜𝐨𝐝𝐞 𝐦𝐨̛́𝐢!', threadID, messageID);
      const options = {
        method: 'GET',
        url: event.messageReply.body
      };
      request(options, function (error, response, body) {
        if(error) return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐢̉ 𝐫𝐞𝐩𝐥𝐲 𝐥𝐢𝐧𝐤 (𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐮̛́𝐚 𝐠𝐢̀ 𝐤𝐡𝐚́𝐜 𝐧𝐠𝐨𝐚̀𝐢 𝐥𝐢𝐧𝐤)', threadID, messageID);
        const load = cheerio.load(body);
        load('.language-js').each((index, el) => {
          if(index !== 0) return;
          var code = el.children[0].data
          fs.writeFile(`${__dirname}/${args[0]}.js`, code, "utf-8",
            function(err) {
              if (err) return api.sendMessage(`Đ𝐚̃ 𝐱𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢 𝐤𝐡𝐢 𝐚́𝐩 𝐝𝐮̣𝐧𝐠 𝐜𝐨𝐝𝐞 𝐦𝐨̛́𝐢 𝐜𝐡𝐨 "${args[0]}.js".`);
              return api.sendMessage(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 𝐜𝐨𝐝𝐞 𝐧𝐚̀𝐲 𝐯𝐚̀𝐨 "${args[0]}.js".`, threadID, messageID);
            }
          );
        });
      });
    }
    else {
      await builtooldev(content)
    }
    async function builtooldev(content) {
      const options = {
          method: 'POST',
          url: 'https://buildtool.dev/verification',
          headers: {
            'cookie': 'paste_submitted=yes; last_code_class=language-js; last_page_link=code-viewer.php%3Fpaste%3D097ba7.language-js'
          },
          form: {
            'content': content,
            'code_class': 'language-js'
          }
      };
      request(options, function (error, response, body) {
        if(error) return api.sendMessage('Đ𝐚̃ 𝐜𝐨́ 𝐥𝐨̂̃𝐢 𝐱𝐚̉𝐲 𝐫𝐚!', threadID, messageID);
        const $ = cheerio.load(body);
        $('a').each((index, el) => {
        if(index !== 0) return;
          return api.sendMessage(`𝐋𝐢𝐧𝐤 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 đ𝐚̂𝐲: https://buildtool.dev/${el.attribs.href}`, threadID,
              async function(error, info) {
                  if(error) return await shortLink(el.attribs.href)
              }, messageID);
        });
      });
    }
    async function shortLink(link) {
      const turl = require('turl');
      turl.shorten('https://buildtool.dev/' + link).then((res) => {
        return api.sendMessage(`𝐃𝐨 𝐛𝐢̣ 𝐡𝐚̣𝐧 𝐜𝐡𝐞̂́ 𝐧𝐞̂𝐧 𝐠𝐮̛̉𝐢 𝐥𝐢𝐧𝐤 𝐫𝐮́𝐭 𝐠𝐨̣𝐧: ${res}`, threadID, messageID);
      }).catch((err) => {
        return api.sendMessage(`Bỏ dấu cách: https://buildtool. dev/${link}`, threadID, messageID);
      });
    }
  }