module.exports.config = {
    name: "zwar",
    version: "1.0.6",
    credits: "GinzaTech & Michael", // fix by procodermew
    description: "Chiến đấu với zombie",
    usages: "[register/shop/upgrade/info/prison/status/sell]",
    commandCategory: "Trò Chơi",
    cooldowns: 5,
    dependencies: {
         "fs-extra": "",
         "axios": ""
     }
};

module.exports.onLoad = async () => {
    const fs = require ("fs-extra");
    const axios = require ("axios");

    const dirMaterial = __dirname + `/cache/zwar/`;

    if (!fs.existsSync(dirMaterial)) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "data.json")) (await axios({
            url: "https://raw.githubusercontent.com/GinzaTech/zwar/main/data.json",
            method: 'GET',
            responseType: 'stream'
        })).data.pipe(fs.createWriteStream(dirMaterial + "data.json"));

    if (!fs.existsSync(dirMaterial + "gun.json")) (await axios({
            url: "https://raw.githubusercontent.com/GinzaTech/zwar/main/gun.json",
            method: 'GET',
            responseType: 'stream'
        })).data.pipe(fs.createWriteStream(dirMaterial + "gun.json"));

    return;
}

module.exports.handleReaction = async ({ api, event, handleReaction, Currencies }) => {
    if (handleReaction.author != event.userID) return;
    try {
        switch (handleReaction.type) {
            case "upgradeSlotConfirm": {
                var userData = await Currencies.getData(event.userID),
                    money = userData.money,
                    zwar = userData.data.zwar;

                for (var i = 0; i < handleReaction.choose; i++) {
                    zwar.critters.push({
                        name: "Empty",
                        size: 0.0,
                        price: 0,
                    })
                }

                money = money - (handleReaction.choose * 2000);

                var data = userData;
                data.zwar = zwar;
                await Currencies.setData(event.userID, { money, data });
                return api.sendMessage(`[💰 𝐒𝐇𝐎𝐏 💰] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗺𝘂𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${handleReaction.choose} 𝘃𝗶̣ 𝘁𝗿𝗶́ !`, event.threadID, event.messageID);
            }
            default:
                break;
        }
    }
    catch (e) {
        console.log(e);
        return api.sendMessage("[💀 𝐙𝐖𝐚𝐫 💀] 𝗭𝗼𝗺𝗯𝗶𝗲 𝘃𝘂̛̀𝗮 𝗰𝗮̀𝗻 𝗾𝘂𝗲́𝘁 𝘁𝗶𝗲̂𝘂 𝗱𝗶𝗲̣̂𝘁 𝗵𝗲̂́𝘁 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶", event.threadID, event.messageID);
    }
}

module.exports.handleReply = async function({ api, event, client, handleReply, Currencies }) {
    if (handleReply.author != event.senderID) return;
    const { readFileSync } = require("fs-extra");
    const emptygun = {
        name: "Empty",
        size: 0.0,
        price: 0,
    };

    var datagun = require('./cache/zwar/gun.json');

    switch (handleReply.type) {
        case "shop": {
            switch (event.body) {
                case "1": {
                    var entryList = [],
                        i = 1;
                    for (const gun of datagun.gun) {
                        entryList.push(`${i}. ${gun.name}: ${gun.price} 𝗩𝗡𝗗 💵 [ ❖ ] 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝗲̂̀𝗻: ${gun.duribility}, 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗖𝗵𝗼̛̀ : ${gun.time} 𝗴𝗶𝗮̂𝘆`);
                        i++;
                    }
                    return api.sendMessage(
                        "==== [ 𝐒𝐇𝐎𝐏 𝐖𝐄𝐀𝐏𝐎𝐍 ] ====" +
                        entryList.join("\n") +
                        "\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝘃𝘂̃ 𝗸𝗵𝗶́ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗺𝘂𝗮 ⚔"
                    , event.threadID, (error, info) => {
                        global.client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "buyShop"
                        });
                    }, event.messageID);
                }
                case "2": {
                    var userData = (await Currencies.getData(event.senderID)),
                        moneyAll = 0,
                        index = 0,
                        zwar = userData.data.zwar;

                    for (let gun of zwar.critters) {
                        moneyAll += gun.price;
                        zwar.critters[index] = emptygun;
                        index++;
                    }
                    const money = userData["money"] += moneyAll;
                    await Currencies.setData(event.senderID,{ money, zwar });
                    return api.sendMessage(`[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗯𝗮́𝗻 𝘃𝗮̀ 𝗴𝗼𝗺 𝘃𝗲̂̀ 𝗹𝗮̀: ${moneyAll} 𝗩𝗡𝗗 💵`, event.threadID, event.messageID);
                }
                case "3": {
                    const userData = (await Currencies.getData(event.senderID)).data.zwar;
                    return api.sendMessage(`[ 🎒 ] 𝐔𝐏𝐆𝐑𝐀𝐃𝐄 𝐁𝐀𝐋𝐎 [ 🎒 ]\n𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗰𝗼́: ${userData.critters.length += 1} 𝘃𝗶̣ 𝘁𝗿𝗶́ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗰𝗵𝘂̛́𝗮 𝘃𝗮̣̂𝘁 𝗽𝗵𝗮̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗯𝗮𝗹𝗼 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̀𝗻𝗴 𝘀𝗼̂́ 𝘀𝗹𝗼𝘁 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗻𝗮̂𝗻𝗴 𝗰𝗮̂́𝗽 💸`, event.threadID, (error, info) => {
                        global.client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "upgradeSlot"
                        })
                    })
                }
                default:
                    break;
            }
            return;
        }
        //Shop
        case "buyShop": {
            try {
                const choose = parseInt(event.body);
                var userData = (await Currencies.getData(event.senderID));
                if (isNaN(event.body)) return api.sendMessage("[ ⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️ ] » 𝗟𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝘀𝗼̂́ !", event.threadID, event.messageID);
                if (choose > datagun.length || choose < datagun.length) return api.sendMessage("[ ⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️ ] » 𝗟𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘃𝘂̛𝗼̛̣𝘁 𝗾𝘂𝗮́ 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵", event.threadID, event.messageID);
                const gunUserChoose = datagun.gun[choose - 1];
                if (userData.money < gunUserChoose.price) return api.sendMessage("[ ⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️ ] » 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗵𝗶𝗲̂́𝘂 𝘁𝗶𝗲̂̀𝗻 𝗸𝗵𝗶 𝗺𝘂𝗼̂́𝗻 𝗺𝘂𝗮 𝘀𝘂́𝗻𝗴 𝗺𝗼̛́𝗶", event.threadID, event.messageID);
                userData.data.zwar.weapon.name = gunUserChoose.name;
                userData.data.zwar.weapon.price = gunUserChoose.price;
                userData.data.zwar.weapon.time = gunUserChoose.time;
                userData.money = userData.money - gunUserChoose.price;
                var data = userData;
                data.zwar = userData.data.zwar;
                await Currencies.setData(event.senderID, { money: userData.money, data });
                return api.sendMessage(`[ 💰 𝐒𝐇𝐎𝐏 💰 ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗺𝘂𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${gunUserChoose.name} 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́ ${gunUserChoose.price} 𝗩𝗡𝗗 💵`, event.threadID, event.messageID);
            }
            catch (e) {
                console.log(e);
                return api.sendMessage("Đã xảy ra lỗi!", event.threadID, event.messageID); 
            }
        }
        //upgrade
        case "upgradeSlot": {
            try {
                const choose = parseInt(event.body);
                var userData = (await Currencies.getData(event.senderID));
                if (isNaN(event.body)) return api.sendMessage("[ ⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️ ] » 𝗟𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝘀𝗼̂́ !", event.threadID, event.messageID);
                const moneyOfUpgrade = choose * 2000;
                if (userData.money < moneyOfUpgrade) return api.sendMessage(`[ 💰 𝐒𝐇𝐎𝐏 💰 ] » 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗵𝗶𝗲̂́𝘂 𝘁𝗶𝗲̂̀𝗻 𝗸𝗵𝗶 𝗺𝘂𝗼̂́𝗻 𝗺𝘂𝗮 𝘁𝗵𝗲̂𝗺 𝗰𝗵𝗼̂̃ 𝗰𝗵𝘂̛́𝗮 𝗰𝗵𝗼 𝗯𝗮𝗹𝗼, 𝗯𝗮̣𝗻 𝗰𝗼̀𝗻 𝘁𝗵𝗶𝗲̂́𝘂 ${moneyOfUpgrade - userData.money} 𝗩𝗡𝗗 💵`, event.threadID, event.messageID);
                return api.sendMessage(`[ 💰 𝐒𝐇𝐎𝐏 💰 ] » 𝗕𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗺𝘂𝗮 ${choose} 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́ ${moneyOfUpgrade} 𝗸𝗵𝗼̂𝗻𝗴? \n\n𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝗰𝗵𝗮̂́𝗽 𝗻𝗵𝗮̣̂𝗻 !`, event.threadID, (error, info) => {
                    global.client.handleReaction.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        choose,
                        type: "upgradeSlotConfirm"
                    })
                })
            }
            catch (e) {
                console.log(e);
                return api.sendMessage("Đã xảy ra lỗi!", event.threadID, event.messageID);
            }
        }
        default: {
            break;
        }
    }
}

module.exports.makeEmptyCritterList = () => {
    var zombieList = [];
    for (let i = 0; i < 9; i++) {
        zombieList.push({
            name: "Empty",
            size: 0.0,
            price: 0,
        });
    }
    return zombieList;
}

module.exports.getRarity = () => { 
    return this.getRarityRecursion(Math.floor(Math.random() * Math.floor(100)), -1, 0);
}

module.exports.getRarityRecursion = (chance, index, number) => {
    const catchChance = {
        'Siêu Bình Thường':50,
        'Bình Thường': 50,
        'Trung Bình': 45,
        'Hiếm': 50,
        'Siêu Hiếm': 50,
        'Cực Hiếm' : 50,
        'Cực Phẩm' : 50
    }
    const rarityList = [
        'Siêu Bình Thường',
        'Bình Thường',
        'Trung Bình',
        'Hiếm',
        'Siêu Hiếm',
        'Cực Hiếm',
        'Cực Phẩm'
    ]

    if (index === 0 && chance <= catchChance[rarityList[0]]) return rarityList[0]
    else if (index >= rarityList.length - 1 && chance >= catchChance[rarityList[rarityList.length - 1]]) return rarityList[rarityList.length - 1]
    else if (chance > number && chance <= (number + catchChance[rarityList[index + 1]])) return rarityList[index + 1];
    else return this.getRarityRecursion(chance, index + 1, (number + catchChance[rarityList[index + 1]]));
}

module.exports.getZombie = (zombieRarity, currentHour, currentMonth) => {
    const { readFileSync } = require ("fs-extra");
    var { Zombie } = require('./cache/zwar/data.json');
    var newZombieData = Zombie.filter(z => (z.time.indexOf(parseInt(currentHour)) !== -1) && (z.months.indexOf(parseInt(currentMonth)) !== -1) && z.rarity == zombieRarity);
    return newZombieData;
}

module.exports.addCritter = (user, critter, api, event) => {
    if (user.critters[user.critters.length - 1].price != 0 || typeof user.critters[user.critters.length - 1].price == "undefined") api.sendMessage("[💀 𝐙𝐖𝐚𝐫 💀] 𝗧𝘂́𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗵𝗲̂́𝘁 𝗸𝗵𝗼̂𝗻𝗴 𝗴𝗶𝗮𝗻 𝗹𝘂̛𝘂 𝘁𝗿𝘂̛̃ !", event.threadID, event.messageID);
    else {
        for (let i = 0; i < user.critters.length; i++) {
            if (user.critters[i].price === 0) {
                user.critters[i] = critter;
                i = user.critters.length;
            }
        }
    }
    return user.critters;
}

module.exports.run = async function({ api, event, args, client, Currencies, Users }) {
    const emptygun = {
        name: "None",
        price: 0,
        time: 120
    };
    var dataUser = (await Currencies.getData(event.senderID)).data.zwar || {};
    switch (args[0]) {
        case "register": 
        case "-r": {
            try {
                if (Object.entries(dataUser).length != 0) return api.sendMessage("[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝘁𝗿𝗲̂𝗻 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴 𝗿𝗼̂̀𝗶 !", event.threadID, event.messageID);
                var s = {};
                s['zwar'] = {};
                s['zwar'].weapon = emptygun;
                s['zwar'].critters = this.makeEmptyCritterList();
                var data = (await Currencies.getData(event.senderID));
                data = s;
                await Currencies.setData(event.senderID, { data });
                return api.sendMessage("[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘅𝗶𝗻 𝘃𝗮̀𝗼 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 !", event.threadID, event.messageID);
            }
            catch (e) {
                console.log(e);
                return api.sendMessage("Đã xảy ra lỗi!", event.threadID, event.messageID);
            }
        }
        case "shop": 
        case '-s': {
            if (Object.entries(dataUser).length == 0)return api.sendMessage("[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗲̂𝗻 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴", event.threadID, event.messageID);
            return api.sendMessage(
                "==== [ 𝐒𝐡𝐨𝐩 𝐖𝐞𝐚𝐩𝐨𝐧 ] ====" +
                "\n[𝟏] 𝐌𝐮𝐚 𝐒𝐮́𝐧𝐠 🔫" +
                "\n[𝟐] 𝐁𝐚́𝐧 𝐙𝐨𝐦𝐛𝐢𝐞 👽" +
                "\n[𝟑] 𝐍𝐚̂𝐧𝐠 𝐂𝐚̂́𝐩 𝐁𝐚𝐥𝐨 🎒" +
                "\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝗿𝗮 𝗹𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 ✨"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "shop"
                });
            }, event.messageID);
        }
        case "prison": 
        case '-p': {
            if (Object.entries(dataUser).length == 0)return api.sendMessage("[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗲̂𝗻 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴", event.threadID, event.messageID);
            var listCritters = [],
                msg = "",
                index = 1;
            for (const gun of dataUser.critters) {
                listCritters.push({
                    name: gun.name,
                    rarity: gun.rarity,
                    price: gun.price,
                    size: gun.size
                })
            }

            listCritters.sort((a, b) => {
                if (a.size > b.size) return -1;
                if (a.size < b.size) return 1;

                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
            })

            for (const sorted of listCritters) {
                if (index == 11 || sorted.name == "Empty") ""
                else {
                    msg += `\n${index}/ ${sorted.name} : ${sorted.size}cm - ${sorted.price} coins`;
                    index += 1;
                }
            }
            if (msg.length == 0) msg = "[!] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐩𝐫𝐢𝐬𝐨𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐠𝐢̀ [!]";
            const filter = listCritters.filter(gun => gun.name !== "Empty");

            return api.sendMessage(`[🎒] [ 𝐊𝐡𝐨 𝐂𝐡𝐮̛́𝐚 ] [🎒]\n${msg}\n\n[💣] [ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐒𝐮́𝐧𝐠 ] [💣]\n\n৹ [ 𝐓𝐞̂𝐧 𝐒𝐮́𝐧𝐠 ] : ${dataUser.weapon.name || 'Chưa có'}\n৹ [ 𝐒𝐨̂́ 𝐁𝐮𝐥𝐥𝐞𝐭 𝐂𝐨̀𝐧 𝐋𝐚̣𝐢 ] : ${dataUser.weapon.duribility} 𝗹𝗮̂̀𝗻 𝗯𝗮̆́𝗻\n৹ [ 𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠 ] : ${(dataUser.weapon.duribility == 0) ? "Đã hết đạn" : "Hoạt động tốt!"}\n\n[※] [ prison Info ] [※]\n৹ Slots: ${dataUser.critters.length += 1}\n৹ Tình trạng: ${((dataUser.critters.length - filter.length) == 0) ? "Túi đã đầy" : "Túi vẫn còn chỗ trống"}`, event.threadID, event.messageID);
        }
        default: {
            try {
                const format = new Intl.NumberFormat();
                if (Object.entries(dataUser).length == 0)return api.sendMessage("[💀 𝐙𝐖𝐚𝐫 💀] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗲̂𝗻 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴", event.threadID, event.messageID);
                var dates = Math.floor((Math.abs(dataUser.time - new Date()) / 1000) / 60);
                if (dataUser.weapon.price === 0) return api.sendMessage("[💀 𝐙𝐖𝐚𝐫 💀] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘀𝘂́𝗻𝗴 !", event.threadID, event.messageID);
                else if (dates < dataUser.weapon.time) return api.sendMessage("[💀 𝐙𝐖𝐚𝐫 💀] » 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀, 𝗵𝗮̃𝘆 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 𝘀𝗮𝘂 !", event.threadID, event.messageID);
                else if (dataUser.weapon.duribility < 1) {
                    dataUser.weapon = emptygun;
                    return api.sendMessage("[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗦𝘂́𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗯𝗶̣ 𝗵𝗼̉𝗻𝗴 𝗿𝗼̂̀𝗶, 𝗵𝗮̃𝘆 𝗺𝘂𝗮 𝘀𝘂́𝗻𝗴 𝗺𝗼̛́𝗶 !", event.threadID, event.messageID);
                }

                var zombieRarity = this.getRarity();
                var currentHour = new Date().getHours();
                var currentMonth = new Date().getMonth();
                const zombieData = await this.getZombie(zombieRarity, currentHour, currentMonth);
                if (!zombieData || zombieData.length == 0) return api.sendMessage("[ ZWar ] » Hiện tại không có zombie để bắn", event.threadID, event.messageID);
                var caught = zombieData[Math.floor(Math.random() * ((zombieData.length - 1) - 0 + 1)) + 0];
                caught.size = ((Math.random() * (caught.size[0] - caught.size[1]) + caught.size[1]).toFixed(1));
                dataUser.critters = this.addCritter(dataUser, caught, api, event);
                dataUser.weapon.duribility--;
                await Currencies.setData(event.senderID, {zwar: dataUser});
                const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(event.senderID)).name;
               
                return api.sendMessage(
                    "[ 💀 𝐙𝐖𝐚𝐫 💀 ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗶𝗲̂𝘂 𝗱𝗶𝗲̣̂𝘁 " + caught.name +
                    "\n\n===== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐂𝐡𝐮𝐧𝐠 ] ====="+
                    `\n👤 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗮̆́𝘁: ${nameUser}` 
                    .replace(/\{name}/g, nameUser)
                +   "\n✨ 𝗞𝗶́𝗰𝗵 𝗰𝗼̛̃: " + caught.size + "𝗺" +
                    "\n🧟‍♂️ 𝗧𝗶̉ 𝗟𝗲̣̂ 𝗛𝗶𝗲̂́𝗺 𝗭𝗼𝗺𝗯𝗶𝗲: " + caught.rarity +
                    "\n💬 𝗠𝗼̂ 𝗧𝗮̉: " + caught.catch + 
                    "\n💰 𝗚𝗶𝗮́ 𝘁𝗿𝗶̣: " + format.format(caught.price) + "𝗩𝗡𝗗 💵", event.threadID, event.messageID);
            }
            catch (e) {
                console.log(e);
                return api.sendMessage("Đã xảy ra lỗi!", event.threadID, event.messageID);
            }
        }
    }
}