 var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    module.exports.config = {
        name: "cuagai",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "BLACK",
        description: "Game cua gái có đặt cược",
        commandCategory: "Trò Chơi",
        usages: "<[đỏ/cam/tím/xanh/đen/trắng] hoặc[❤️/🧡/💜/💙/🖤/🤍]> <Số tiền cược (lưu ý phải trên 100$)>",
        cooldowns: 2
    };

    module.exports.onLoad = async function () {
        if (!existsSync(__dirname + '/cache/do.jpg')) {
            request('https://i.imgur.com/27cFGA7.jpg').pipe(createWriteStream(__dirname + '/cache/do.jpg'));
        }
        if (!existsSync(__dirname + '/cache/cam.jpg')) {
            request('https://i.imgur.com/q3lAZZc.jpg').pipe(createWriteStream(__dirname + '/cache/cam.jpg'));
        }
        if (!existsSync(__dirname + '/cache/tim.jpg')) {
            request('https://i.imgur.com/EWptgY1.jpg').pipe(createWriteStream(__dirname + '/cache/tim.jpg'));
        }
        if (!existsSync(__dirname + '/cache/xanh.jpg')) {
            request('https://i.imgur.com/Ty9k0nU.jpg').pipe(createWriteStream(__dirname + '/cache/xanh.jpg'));
        }
        if (!existsSync(__dirname + '/cache/den.jpg')) {
            request('https://i.imgur.com/FUloMlI.jpg').pipe(createWriteStream(__dirname + '/cache/den.jpg'));
        }
        if (!existsSync(__dirname + '/cache/trang.jpg')) {
            request('https://i.imgur.com/380RNm0.jpg').pipe(createWriteStream(__dirname + '/cache/trang.jpg'));
        }
        if (!existsSync(__dirname + '/cache/gaigu.gif')) {
            request('https://i.imgur.com/wFOKI2w.gif').pipe(createWriteStream(__dirname + '/cache/gaigu.gif'));
        }
    };

    async function get(one,two,three) {
        var x1;
            switch (one) {
                case "do": x1 = "❤️";
                    break;
                case "cam": x1 = '🧡';
                    break;
                case "tim": x1 = '💜';
                    break;
                case "xanh": x1 = '💙';
                    break;
                case "den": x1 = '🖤';
                    break;
                case "trang":x1 = '🤍';
            }
        var x2;
            switch (two) {
                case "do": x2 = "❤️";
                    break;
                case "cam": x2 = '🧡';
                    break;
                case "tim": x2 = '💜';
                    break;
                case "xanh": x2 = '💙';
                    break;
                case "den": x2 = '🖤';
                    break;
                case "trang":x2 = '🤍';
            }
        var x3;
            switch (three) {
                case "do": x3 = "❤️";
                    break;
                case "cam": x3 = '🧡';
                    break;
                case "tim": x3 = '💜';
                    break;
                case "xanh": x3 = '💙';
                    break;
                case "den": x3 = '🖤';
                    break;
                case "trang":x3 = '🤍';
            }
        var all = [x1, x2, x3];
    return full = all;
    }
var full = [];
    module.exports.run = async function({ api, event, args, Currencies }) { var out = (msg) => api.sendMessage(msg,event.threadID, event.messageID);
        const slotItems = ["do", "cam", "tim", "xanh", "den", "trang"];
            const moneyUser = (await Currencies.getData(event.senderID)).money;
                var moneyBet = parseInt(args[1]);
                    if (!args[0] || !isNaN(args[0])) return api.sendMessage("[𝑩𝑶𝑻] => Hãy Bấm : /cuagai [đỏ/cam/tím/xanh/đen/trắng] [số tiền]",event.threadID, event.messageID);
                    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[𝑩𝑶𝑻] => Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
                if (moneyBet > moneyUser) return api.sendMessage("[𝑩𝑶𝑻] => Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
            if (moneyBet < 100) return api.sendMessage("[𝑩𝑶𝑻] => Số tiền đặt không được dưới 100 đô!", event.threadID, event.messageID);
        var number = [], win = false;
    for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
        var itemm;
            var icon;
                switch (args[0]) {
                    case "đỏ":
                        case "Đỏ": itemm = "do";
                                icon = '❤️';
                            break;
                    case "cam": 
                        case "Cam": itemm = "cam";
                                icon = '🧡';
                            break;
                    case "tím":
                        case "Tím": itemm = "tim";
                                icon = '💜';
                            break;
                    case "xanh":
                        case "Xanh": itemm = "xanh";
                                icon = '💙';
                            break;
                    case "đen": 
                        case "Đen": itemm = "den";
                                icon = '🖤';
                            break;
                    case "trắng":
                        case "Trắng": itemm = "trang";
                                icon = '🤍';
                            break;
                                default: return api.sendMessage("[𝑩𝑶𝑻] => Hãy Bấm : /cuagai [đỏ/cam/tím/xanh/đen/trắng] [số tiền]",event.threadID, event.messageID);
                }      
                await get(number[0],number[1],number[2]);
            api.sendMessage({body:"🌺 𝑷𝒉𝒆́𝒑 𝑻𝒉𝒖𝒂̣̂𝒕 𝑾𝒊𝒏𝒙 𝑬𝒏𝑪𝒉𝒂𝒏𝑻𝒊𝒙...𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉\n🌺 𝑪𝒉𝒖́𝒄 𝑩𝒂̣𝒏 𝑴𝒂𝒏𝒈 𝑽𝒆̂̀ 𝑴𝒐̣̂𝒕 𝑪𝒐̂ 𝑽𝒐̛̣ 𝑿𝒊𝒏𝒉 𝑽𝒂̀ 𝑫𝒂𝒎𝒅𝒂𝒏𝒈 😍",attachment: createReadStream(__dirname + "/cache/gaigu.gif")},event.threadID,async (error,info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                    api.unsendMessage(info.messageID);
                          await new Promise(resolve => setTimeout(resolve, 100));
    var array = [number[0],number[1],number[2]];
        var listimg = [];
           for (let string of array) {
               listimg.push(createReadStream(__dirname + `/cache/${string}.jpg`));
           }
        if (array.includes(itemm)) {
            var i = 0;
                if (array[0] == itemm) i+=1;
                    if (array[1] == itemm) i+=1;
                if (array[2] == itemm) i+=1;
            if (i == 1) {
                var mon = parseInt(args[1]) + 300;  
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s1")
                        return api.sendMessage({body:`➢ 𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉: ${full.join(" | ")}\n🌺 𝑩𝒂̣𝒏 𝑽𝒖̛̀𝒂 𝑽𝒖̛̀𝒂 𝑪𝒖𝒂 𝑫𝒊́𝒏𝒉 𝑴𝒐̣̂𝒕 𝑬𝒎 𝑽𝒂̀ 𝑴𝒂𝒏𝒈 𝑴𝒐̣̂𝒕 𝑵𝒂̀𝒏𝒈 𝑫𝒂̂𝒖 𝑽𝒆̂̀ 𝑪𝒉𝒐 𝑴𝒆̣ 😍\n𝑪𝒐̣̂𝒏𝒈 ${mon}$ 𝑽𝒂̀𝒐 𝑻𝒂̀𝒊 𝑲𝒉𝒐𝒂̉𝒏 𝑵𝒈𝒂̂𝒏 𝑯𝒂̀𝒏𝒈 𝑪𝒖̉𝒂 𝑩𝒂̣𝒏 💸\n➢ 𝑪𝒖𝒂 𝑫𝒊́𝒏𝒉 𝑬𝒎 𝑮𝒂́𝒊 𝑴𝒂̀𝒖 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 2) {
                var mon = parseInt(args[1]) * 2; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s2")
                        return api.sendMessage({body:`➢ 𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉: ${full.join(" | ")}\n🌺 𝑩𝒂̣𝒏 𝑽𝒖̛̀𝒂 𝑽𝒖̛̀𝒂 𝑪𝒖𝒂 𝑫𝒊́𝒏𝒉 𝑴𝒐̣̂𝒕 𝑬𝒎 𝑽𝒂̀ 𝑴𝒂𝒏𝒈 𝑴𝒐̣̂𝒕 𝑵𝒂̀𝒏𝒈 𝑫𝒂̂𝒖 𝑽𝒆̂̀ 𝑪𝒉𝒐 𝑴𝒆̣ 😍\n𝑪𝒐̣̂𝒏𝒈 ${mon}$ 𝑽𝒂̀𝒐 𝑻𝒂̀𝒊 𝑲𝒉𝒐𝒂̉𝒏 𝑵𝒈𝒂̂𝒏 𝑯𝒂̀𝒏𝒈 𝑪𝒖̉𝒂 𝑩𝒂̣𝒏 💸\n➢ 𝑪𝒖𝒂 𝑫𝒊́𝒏𝒉 𝑬𝒎 𝑮𝒂́𝒊 𝑴𝒂̀𝒖 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 3) {
                var mon = parseInt(args[1]) * 3; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log('s3')
                        return api.sendMessage({body:`➢ 𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉: ${full.join(" | ")}\n🌺 𝑩𝒂̣𝒏 𝑽𝒖̛̀𝒂 𝑽𝒖̛̀𝒂 𝑪𝒖𝒂 𝑫𝒊́𝒏𝒉 𝑴𝒐̣̂𝒕 𝑬𝒎 𝑽𝒂̀ 𝑴𝒂𝒏𝒈 𝑴𝒐̣̂𝒕 𝑵𝒂̀𝒏𝒈 𝑫𝒂̂𝒖 𝑽𝒆̂̀ 𝑪𝒉𝒐 𝑴𝒆̣ 😍\n𝑪𝒐̣̂𝒏𝒈 ${mon}$ 𝑽𝒂̀𝒐 𝑻𝒂̀𝒊 𝑲𝒉𝒐𝒂̉𝒏 𝑵𝒈𝒂̂𝒏 𝑯𝒂̀𝒏𝒈 𝑪𝒖̉𝒂 𝑩𝒂̣𝒏 💸\n➢ 𝑪𝒖𝒂 𝑫𝒊́𝒏𝒉 𝑬𝒎 𝑮𝒂́𝒊 𝑴𝒂̀𝒖 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else return api.sendMessage("[ 𝑩𝑶𝑻 🐧] => 𝑳𝒐̂̃𝒊 𝒓𝒐̂̀𝒊 𝒄𝒖𝒂 𝒈𝒂́𝒊 𝒄𝒐𝒏 𝒄𝒂̣̆𝒄 𝒃𝒐̛́𝒕 𝒏𝒈𝒉𝒊𝒆̣̂𝒏 𝒍𝒂̣𝒊",event.threadID,event.messageID);
        } else  {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1])); console.log('s4')
            return api.sendMessage({body:`➢ 𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉: ${full.join(" | ")}\n🌺 𝑩𝒂̣𝒏 𝑸𝒖𝒂́ 𝑿𝒂̂́𝒖 𝑻𝒓𝒂𝒊 𝑽𝒂̀ 𝑩𝒊̣ 𝑬𝒎 𝑮𝒂́𝒊 𝑨̂́𝒚 𝑺𝒖́𝒕 😭\n𝑻𝒓𝒖̛̀ ${args[1]}$ 𝑽𝒂̀𝒐 𝑻𝒂̀𝒊 𝑲𝒉𝒐𝒂̉𝒏 𝑵𝒈𝒂̂𝒏 𝑯𝒂̀𝒏𝒈 𝑪𝒖̉𝒂 𝑩𝒂̣𝒏 💸\n➢ 𝑽𝒊̀ 𝑩𝒂̣𝒏 𝑲𝒉𝒐̂𝒏𝒈 𝑻𝒉𝒆̂̉ 𝑲𝒉𝒐̂𝒏𝒈 𝑻𝒂́𝒏 𝑫𝒊́𝒏𝒉 𝑬𝒎 𝑴𝒂̀𝒖 ${icon}`,attachment: listimg},event.threadID, event.messageID);
        }
            } ,event.messageID);
    };