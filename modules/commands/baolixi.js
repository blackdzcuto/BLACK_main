/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "baolixi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", //Sang Nguyễn edit mod, Code working của diện
    description: "Đầu xuân năm mới",
    commandCategory: "Trò Chơi",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi.png")) request("https://imgur.com/Y03gw5v.png").pipe(fs.createWriteStream(dirMaterial + "baolixi.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("🎋Lì xì ai người ấn nhận nha", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 100) + 80; 
var b = Math.floor(Math.random() * 100) + 80; 
var c = Math.floor(Math.random() * 100) + 80; 
var x = Math.floor(Math.random() * 100) + 80; 
var y = Math.floor(Math.random() * 100) + 80; 
var f = Math.floor(Math.random() * 100) + 50; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `🧧Chúc mừng bạn đã nhận ${a}$ khi mở phong lì xì này🎐\n🌸Tết Âm lịch còn\n» ${d}ngày ${h}giờ ${m}phút🎋` ;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break;             
                case "2": msg = `🧧Chúc mừng bạn đã nhận ${b}$ khi mở phong lì xì này🎐\n🌸Tết Âm lịch còn\n» ${d}ngày ${h}giờ ${m}phút🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = `🧧Chúc mừng bạn đã nhận ${c}$ khi mở phong lì xì này🎐\n🌸Tết Âm lịch còn\n» ${d}ngày ${h}giờ ${m}phút🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = `🧧Chúc mừng bạn đã nhận ${x}$ khi mở phong lì xì này🎐\n🌸Tết Âm lịch còn\n» ${d}ngày ${h}giờ ${m}phút🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = `🧧Chúc mừng bạn đã nhận ${y}$ khi mở phong lì xì này🎐\n🌸Tết Âm lịch còn\n» ${d}ngày ${h}giờ ${m}phút🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = `🎋Lì xì chưa update nhưng bạn vẫn nhận được ${f}$\n🌸Tết Âm lịch còn\n» ${d}ngày ${h}giờ ${m}phút\n🎐CHúc bạn năm mới vui vẻ.`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("🎋Vui lòng nhập 1 con số", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("🎋Lựa chọn không nằm trong danh sách.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋Chưa update...") {
                msg = "🎋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`🧧Bạn đã nhận lì xì rồi, vui lòng quay lại vào ngày mai🎋.\n🌸Tết âm lịch còn » ${d}ngày ${h}giờ ${m}phút`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋 Phong bao lì xì 🎋" +
                `\n🌸Tết âm còn» ${d}ngày ${h}giờ ${m}phút` +
                "\n\n1. Bao lì xì 1🧧 (mã:461)" +
                "\n2. Bao lì xì 2🧧 (mã:462)" +
                "\n3. Bao lì xì 3🧧 (mã:463)" +
                "\n4. Bao lì xì 4🧧 (mã:464)" +
                "\n5. Bao lì xì 5🧧 (mã:465)" +
                "\n6. Update soon..." +
                `\n\n🧨Hãy reply tin nhắn chọn bao lì xì muốn nhận.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}