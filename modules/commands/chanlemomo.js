module.exports.config = {
    name: "clmomo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chแบตn lแบป momoooo",
    commandCategory: "Trรฒ Chฦกi",
    usages: "[C/L/C2/L2]",
    cooldowns: 0
};

module.exports.run = async function ({api, event, args, Users, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
  const request = require("request")
    let { senderID, threadID, messageID } = event;
    if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
    if (!fs.existsSync(__dirname + '/cache/clmm.png')) {
        request('https://i.imgur.com/pJNIBPb.png').pipe(fs.createWriteStream(__dirname + '/cache/clmm.png'));
      }
    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm");
    var day = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
    var codeGD = String(Math.floor(Math.random() * (90000000000 - 1)) + 10000000000)
    var lastNumber = parseInt(codeGD.slice(-1))
    const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/comment.png";
    var coins = args[1]
    var content = args[0]
    if (!content){
        var msg = { body: "== ๐ฒ ๐๐ฬฃฬ ๐๐ก๐จฬฬ๐ง๐  ๐๐ฬ๐ข ๐๐ขฬ๐ฎ ๐ฒ ==\n== ๐ธ ๐๐ก๐ฬฬ๐ง ๐๐ฬ ๐๐๐๐ ๐ธ ==\n\n[ ๐ ] - ๐ง๐ฟ๐๐ป๐ด ๐๐ฎฬ๐บ ๐ฐ๐ต๐ผ ๐ฐ๐ฎฬ๐ฐ ๐ฏ๐ฎฬฃ๐ป ๐๐ฎ ๐๐ฎฬ๐ถ ๐๐ฎฬ๐ป ๐ฐ๐ผฬ๐ป ๐ฝ๐ต๐ฎฬ ๐๐ฎฬ๐ป ๐๐ต๐ถฬ ๐ฏ๐ฎฬ๐ป ๐ป๐ต๐ฎฬ ๐ป๐ฒฬฬ๐ ๐บ๐๐ผฬฬ๐ป ๐๐ต๐ฎ๐บ ๐ด๐ถ๐ฎ, ๐ฏ๐ฎฬฃ๐ป ๐ฐ๐ฎฬฬ๐ป ๐ป๐ต๐ฎฬฃฬ๐ฝ ๐ฐ๐ฎฬ๐ฐ ๐น๐ฒฬฃฬ๐ป๐ต ๐ป๐ต๐ฬ ๐๐ฎ๐\n\n[ ๐ ] ยป ๐๐ต๐ฎ๐ป๐น๐ฒ๐บ๐ผ๐บ๐ผ  ๐ [ ๐ฎ , ๐ฐ , ๐ฒ , ๐ด ] || ๐ [๐ญ , ๐ฏ , ๐ฑ , ๐ณ ] || ๐๐ฎ [ ๐ฌ , ๐ฎ , ๐ฐ , ๐ฒ , ๐ด ] || ๐๐ฎ [ ๐ญ , ๐ฏ , ๐ฑ , ๐ณ , ๐ต ] \n[ ๐ ] ยป ๐๐ฎ๐บ๐ฒ ๐ฐ๐ต๐ฎฬฬ๐ป ๐น๐ฒฬ ๐ฐ๐ฎฬ๐ฐ ๐๐ผฬฬ ๐๐ฟ๐ฒฬ๐ป ๐น๐ฎฬ ๐ฐ๐ฎฬ๐ฐ ๐๐ผฬฬ ๐ฐ๐๐ผฬฬ๐ถ ๐บ๐ฎฬ ๐๐ ๐ธ๐ต๐ถ ๐๐ผ๐ ๐ด๐ฬฬ๐ถ ๐ฎฬ๐ป๐ต ๐ป๐ต๐ฒฬ ๐ฐ๐ผฬฬ ๐บ๐ฎฬ ๐ป๐ต๐ถฬ๐ป ๐ธ๐ถฬ.\n\n[ ๐ ] ยป ๐๐ต๐ฎ๐ป๐น๐ฒ๐บ๐ผ๐บ๐ผ ๐ง [ ๐ฑ , ๐ฒ , ๐ณ , ๐ด ] || ๐ซ [ ๐ญ , ๐ฎ , ๐ฏ , ๐ฐ ] || ๐ง๐ฎ [ ๐ฑ , ๐ฒ , ๐ณ , ๐ด , ๐ต ] || ๐๐ฎ [ ๐ฌ , ๐ญ , ๐ฎ , ๐ฏ , ๐ฐ ] \n[ ๐ ] ยป ๐ง๐ฟ๐ผฬ ๐๐ฎฬ๐ถ ๐๐ถฬ๐ ๐ฑ๐ฎฬ๐ป๐ต ๐ฐ๐ต๐ผ ๐ฐ๐ฎฬ๐ฐ ๐๐ผฬฬฃ  ๐ป๐ฎฬ๐ผ ๐๐ต๐ถฬ๐ฐ๐ต ๐ง๐ฎ๐ถ๐ซ๐ถ๐ ๐ต๐ผฬ๐ป ๐๐ต๐ฎ๐ป๐๐ฒ.\n\n[ ๐ ] ยป ๐๐ต๐ฎ๐ป๐น๐ฒ๐บ๐ผ๐บ๐ผ ๐ก๐ญ [ ๐ญ , ๐ฎ , ๐ฏ ] || ๐ก๐ฎ [ ๐ฐ , ๐ฑ , ๐ฒ ] || ๐ก๐ฏ [ ๐ณ , ๐ด , ๐ต ] || ๐ก๐ฌ [ ๐ฌ ]\n[ ๐ ] ยป ๐ฅ๐ถ๐ฒฬ๐ป๐ด ๐๐ฟ๐ผฬ ๐ป๐ฎฬ๐ ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐ป๐ต๐ฎฬ๐ป ๐๐ฎฬ๐ถ ๐๐ฎฬ๐ป ๐น๐ฒฬ๐ป ๐๐ฏ ๐ต๐ผ๐ฎฬฃฬ๐ฐ ๐๐ฑ, ๐๐ผฬ๐ป ๐๐ถฬฃ๐ ๐๐ต๐ถฬ ๐๐ฎ๐ ๐ป๐ด๐ฎฬ๐ป ๐ต๐ฎฬ๐ป๐ด\n\n[ ๐ ] ยป ๐ง๐ฬฃ๐ฐ ๐ป๐ด๐ฬฬ ๐ฐ๐ผฬ ๐ฐ๐ฎฬ๐:\n๐๐ผฬ๐ป ๐๐ต๐ผฬฬ ๐น๐ฎฬ ๐ฐ๐ผฬ๐ป ๐ด๐ผฬฬ, ๐ต๐ฒฬฬ๐ ๐๐ถ๐ฒฬฬ๐ป ๐น๐ฎฬ ๐๐ฎฬฬ๐ ๐๐ต๐ผฬฬ"
, attachment : [
      fs.createReadStream(__dirname + "/cache/clmm.png")
    ]}
     return api.sendMessage(msg, threadID, messageID)
    }
    if (!coins) return api.sendMessage("Vui Lรฒng Nhแบญp Tiแปn Cฦฐแปฃc!", threadID, messageID);
    var money = (await Currencies.getData(senderID)).money
    if(money < parseInt(coins)) return api.sendMessage('Hong ฤแปง Tiแปn Bรฉ ฦ i!', threadID, messageID);
    if(parseInt(coins) < 50) return api.sendMessage('Min 50 bรฉ ฦกi!', threadID, messageID);
    if(parseInt(coins) > 1000000) return api.sendMessage('Max 1.000.000 Bรฉ ฦ i!', threadID, messageID);
    //check win
    var c = [2, 4, 6, 8]
    var l = [1, 3, 5, 7]
    var c2 = [0, 2, 4 ,6 ,8]
    var l2 = [1, 3, 5, 7, 9]
    var n1 = [1, 2, 3]
    var n2 = [4, 5, 6]
    var n3 = [7, 8, 9]
    var n0 =[0]
    var t = [5, 6, 7, 8]
    var x = [1, 2, 3, 4]
    var t2 = [5, 6, 7, 8, 9]
    var x2 = [0, 1, 2, 3, 4]
    var msg = ""
    switch (content.toLowerCase()) {
        case "c": {
            if(c.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
       }
        case "l": {
            if(l.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
            }
            else {
                msg +=`ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
       }
        case "c2": {
            if(c2.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
       }
        case "l2": {
            if(l2.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
       }
        case "n1": {
            if(n1.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐ฏ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 2));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
       }
        case "n2": {
            if(n2.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐ฏ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 2));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
         case "n3": {
            if(n3.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐ฏ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 2));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
          case "n0": {
            if(n0.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ท`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
         case "t": {
            if(t.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ด`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
         case "x": {
            if(x.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ด`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1.5));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
         case "t2": {
            if(t2.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐.๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ด`
                await Currencies.increaseMoney(senderID, parseInt(coins * 1));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
         case "x2": {
            if(x2.includes(lastNumber) == true) {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ง๐  !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ฬฃ๐ง ๐๐ก๐ฬฃฬ๐ง ๐๐ฬฬ ๐ฑ๐ ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐ฐ`
                await Currencies.increaseMoney(senderID, parseInt(coins * 4));
            }
            else {
                msg += `ยป ๐๐ฬฃ๐ง ๐๐ฎฬฬ๐ ๐๐ก๐ฎ๐ !\nยป ๐๐จฬฬ ๐๐ฎ๐จฬฬ๐ข ๐๐ฬ ๐๐ ๐๐ฬ: ${lastNumber}\nยป ๐๐ข๐ฬฬ๐ง ๐๐ฎฬ๐จฬฬฃ๐ ๐๐ก๐ฎ๐จฬฃฬ๐ ๐๐ฬฬ ๐๐๐๐ ๐ธ`
                await Currencies.decreaseMoney(senderID, parseInt(coins));
            }
            break;
        }
        default: {
            msg += `Sai Nแปi Dung!\nKhรดng Hoร n Tiแปn!`
            await Currencies.decreaseMoney(senderID, parseInt(coins));
        }
   }
    //xแปญ lรญ canvas
    let bg = (await axios.get(`https://i.imgur.com/OUPC4iK.png`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "30px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    ctx.fillText('-' + coins.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'ฤ', 151, 201);
    ctx.font = "25px SplineSans";
    ctx.fillText(content, 64, 1080);
    ctx.font = "26px SplineSans-Medium";
    ctx.textAlign = "right";
    var info = await api.getUserInfo(event.senderID);
    var name = info[event.senderID].name
    ctx.fillText(name, 547, 816);
    ctx.fillStyle = "#FF00FF";
    ctx.font = "22px SplineSans-Medium";
    const data = [" 0993457888 ", " 0984444444 ", " 0992229333 ", " 059874444 " , " 0568777777 " , " 0764322222 "];
    var sdt = data[Math.floor(Math.random() * data.length)]
    ctx.fillText(`${sdt}`, 547, 884);
    ctx.font = "22px SplineSans";
    ctx.textAlign = "start";
    ctx.fillText(codeGD, 279, 240);
    ctx.fillStyle = "#000000";
    ctx.textAlign = "right";
    ctx.font = "22px SplineSans-Medium";
    ctx.fillText('Miแปn phรญ', 547, 504);
    ctx.fillText('Vรญ MoMo', 547, 436);
    ctx.fillText(`${time} - ${day}`, 547, 367);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    //send
    return api.sendMessage({
            body: msg,
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
};