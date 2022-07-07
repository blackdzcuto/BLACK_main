module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Bật tắt chế độ chỉ qtv dùng lệnh",
	commandCategory: "Admin",
	usages: " bật tắt chế độ chỉ admin và qtv dùng lệnh",
    cooldowns: 2,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": `======〘『 𝐀𝐃𝐌𝐈𝐍 』〙======\n\n%1\n\n\n===「 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐇𝐨̂̃ 𝐓𝐫𝐨̛̣ 𝐁𝐨𝐭 」===\n\n%2`,
        "notHavePermssion": 'Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '꧁༺𝐀𝐃𝐌𝐈𝐍༻꧂ 𝐓𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 %1 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐫𝐨̛̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 🔰\n\n%2',
        "removedAdmin": '꧁༺𝐀𝐃𝐌𝐈𝐍༻꧂ 𝐆𝐨̛̃ 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐮̛́𝐜 𝐀𝐝𝐦𝐢𝐧 %1 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐫𝐨̛̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐮𝐬𝐞𝐫:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    if (args.length == 0) return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐬𝐚𝐮 💌\n» 𝗮𝗱𝗺𝗶𝗻 𝗮𝗱𝗱 => 𝘁𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗮𝗱𝗺𝗶𝗻\n» 𝗮𝗱𝗺𝗶𝗻 𝗹𝗶𝘀𝘁 => 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́𝗰 𝗮𝗱𝗺𝗶𝗻\n» 𝗮𝗱𝗺𝗶𝗻 𝗿𝗲𝗺𝗼𝘃𝗲 => 𝗴𝗼̛̃ 𝗯𝗼̉ 𝗮𝗱𝗺𝗶𝗻\n» 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘅𝗼𝗻𝗹𝘆 => 𝗯𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗶̉ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁\n» 𝗮𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆 => 𝗯𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗺𝗼𝗱𝗲 𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁\n» 𝐚𝐝𝐦𝐢𝐧 𝐢𝐛𝐨𝐧𝐥𝐲 => 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐦𝐨𝐝𝐞 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭 𝐭𝐫𝐨𝐧𝐠 𝐢𝐛 𝐫𝐢𝐞̂𝐧𝐠\n» 𝐇𝐃𝐒𝐃: ${global.config.PREFIX} 𝗮𝗱𝗺𝗶𝗻 (𝗹𝗲̣̂𝗻𝗵 𝗯𝗮̣𝗻 𝗰𝗮̂̀𝗻 𝗱𝘂̀𝗻𝗴)
`, event.threadID, event.messageID);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": { 
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`»  ${name}\nLink: https://www.facebook.com/${idAdmin} 💌`);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`» ${name1}\nLink: https://www.facebook.com/${idNDH} 🤖`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n\n"), msg1.join("\n\n")), threadID, messageID);
        }

       
        case "add": { 
            if (event.senderID != 100003134222307) return api.sendMessage(`𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐨̂̀𝐧 𝐛𝐢𝐞̂𝐧 𝐠𝐢𝐨̛́𝐢 🎀`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `『ADMIN』» ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID != 100003134222307) return api.sendMessage(`𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐨̂̀𝐧 𝐛𝐢𝐞̂𝐧 𝐠𝐢𝐨̛́𝐢 🎀`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] ❯ ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] » 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐦𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢  𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] » 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀", threadID, messageID);
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
        case 'ibonly': {
        if (permssion != 3) return api.sendMessage("𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐨̂̀𝐧 𝐛𝐢𝐞̂𝐧 𝐠𝐢𝐨̛́𝐢 🎀", threadID, messageID);
               if (config.adminPaOnly == false) {
                config.adminPaOnly = true;
                api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] » 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐚𝐭 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐁𝐨𝐭 🎀", threadID, messageID);
            } else {
                config.adminPaOnly = false;
                api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] » 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐚𝐭 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐁𝐨𝐭 🎀", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
        break;
    }
    case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐨̂̀𝐧 𝐛𝐢𝐞̂𝐧 𝐠𝐢𝐨̛́𝐢 🎀", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`[ 𝐌𝐎𝐃𝐄 ] » 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`[ 𝐌𝐎𝐃𝐄 ] » 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐦𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}