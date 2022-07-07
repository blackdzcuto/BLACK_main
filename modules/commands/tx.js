/**
 * @author datoccho
 * @you can edit creditss freely it's your right as long as you are not human if you are human don't change creditss
 */
const fs = require("fs"),
      request = require("request"),
       pathFile = __dirname + "/cache/";

module.exports.config = {
    name: `tx`,
    version: `1.0.2`,
    hasPermssion: 0,
    creditss: ``,
    description: `hên xui`,
    commandCategory: `Game`,
    usages: `[xỉu|tài] [số tiền tham gia]`,
    cooldowns: 5
};
module.exports.onLoad = () => {
  
  if (!fs.existsSync(pathFile + "cache")) fs.mkdirSync(pathFile, { recursive: true });
  
  if (!fs.existsSync(pathFile + this.config.name +".gif")) request("https://i.imgur.com/cnoG4td.gif").pipe(fs.createWriteStream(pathFile + this.config.name +".gif"));
}
module.exports.run = async({
    api, event, args, Currencies
}) => {
    const {
        getData, increaseMoney, decreaseMoney
    } = Currencies;
    const {
        createReadStream
    } = require(`fs-extra`);
    const {
        threadID, messageID, senderID
    } = event;
    const axios = global.nodemodule[`axios`];
    const fs = global.nodemodule[`fs-extra`];
    const data = (await Currencies.getData(senderID))
        .data || {};
    const getRandomIntInclusive = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var taixiucac = [`tài ${getRandomIntInclusive(11, 17)}`, `xỉu ${getRandomIntInclusive(4, 10)}`];
    const rdm = taixiucac[Math.floor(Math.random() * taixiucac.length)]
    const money = (await getData(senderID)).money;
    var moneyBet = parseInt(args[1]) ? parseInt(args[1]) : money; //:))
    var thang = moneyBet * 2;
    const tax = thang * 5 / 100;
    const tong = thang - tax;
    if (args[0] != "tài" && args[0] != "xỉu")
        return api.sendMessage('Không đúng định dạng.\nChỉ được tài/xỉu.', threadID, messageID);
    if (isNaN(moneyBet) || moneyBet < 50)
        return api.sendMessage('Số tiền đặt cược dưới 50 đô', threadID, messageID);
    if (moneyBet > money)
        return api.sendMessage('Số dư của bạn không đủ.', threadID, messageID);
  //if (args[1] == "tất" && args[2] == "tay" || args[1] == moneyBet) {
        api.sendMessage({
            body: '🎲Tung xí ngầu...',
          attachment: fs.createReadStream(__dirname + `/cache/${this.config.name}.gif`)
        }, threadID, (err, info) => {
            if (err) console.log(err);
            setTimeout(() => {
                api.unsendMessage(info.messageID);
                if (args[0].toLocaleLowerCase() == rdm.slice(0, 3)) {
                    return api.sendMessage({
                        body: `Nhà cái ra: ${rdm}\nBạn chọn: ${args[0].toLocaleLowerCase()}\nBạn thắng và nhận được ${thang}$\nVà trừ đi thuế 5% của ${thang} là ${tax}\nSau khi trừ thuê số tiền bạn nhận được là ${tong}\nSố tiền trong tài khoản của bạn là: ${money + tong}$`
                    }, threadID, () => Currencies.increaseMoney(senderID, tong), messageID);
                } else if (args[0].toLocaleLowerCase() != rdm.slice(0, 3)) {
                    return api.sendMessage({
                        body: `\nNhà cái ra: ${rdm} \nBạn chọn: ${args[0].toLocaleLowerCase()}\nBạn thua! và bị trừ ${moneyBet ? moneyBet : money}$\nSố tiền còn lại trong tài khoản của bạn là: ${money - moneyBet}$`
                    }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
                } else {
                    return api.sendMessage(`Lỗi gòi đéo biết fix đâu ${err}`, threadID, messageID);
                }
            }, 3000);
        }, messageID);
    }