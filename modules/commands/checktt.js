const axios = require("axios");
const fs = require("fs"),
      joinTime = __dirname + "/cache/timeJoin.json",
      path = __dirname + "/cache/rank.png";

module.exports.config = {
    name: "checktt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie", //them rank by nam
    description: "Check tương tác các thành viên trong 1 nhóm",
    commandCategory: "Box chat",
    usages: "[tag/reply/all/all number/all box]",
    cooldowns: 5
};
var key = "Ryan__0e3f0ace-c5d5-4a7c-b8ac-c393099bf086"
function checkRank(input) {
  if (input >= 0) return "Đồng"
  if (input >= 500) return "Bạc"
  if (input >= 1000) return "Vàng"
  if (input >= 2000) return "Bạch Kim"
  if (input >= 3000) return "Kim Cương"
  if (input >= 4000) return "Tinh Anh"
  if (input >= 5000) return "Cao Thủ"
  if (input >= 7000) return "Chiến Tướng"
  if (input >= 10000) return "Thách Đấu"
  if (input >= 20000) return "Bậc Ông Nội"
}

async function down(input) {
	var read = await axios.get(`https://8b7dc39c-4825-48d9-afc6-80c7c72ef773.id.repl.co/check_rank_img?exp=${input}&api_key=${key}`), arr = [];
	var down = (await axios.get(read.data.url, { responseType: "arraybuffer" })).data;
fs.writeFileSync(path, Buffer.from(down, "utf-8"));
arr.push(fs.createReadStream(path))
return arr;
	}

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const pathA = require('path');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if (!existsSync(path)) {
        const obj = []
        writeFileSync(path, JSON.stringify(obj, null, 4));
    }
}
module.exports.handleEvent = async({ event, Users }) => {
    const { threadID, senderID, body } = event;
    const fs = require("fs");
    const pathA = require('path');
    const thread = require('./cache/checktt.json');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if(event.isGroup == false) return;
    if (thread.some(i => i.threadID == threadID) == false) {
        const data = [];
        for (let user of event.participantIDs) {
            var name = (await Users.getData(user)).name;
            var id = user;
            var exp = 0;
            if(name !== undefined && name != 'Người dùng Facebook') {
                data.push({ name, id , exp })
            }
        }
        thread.push({ threadID, data: data });
        fs.writeFileSync(path, JSON.stringify(thread, null, 2));
    }
    else {
        var threadData = thread.find(i => i.threadID == threadID && i.threadID !== undefined)
        if (threadData.data.some(i => i.id == senderID) == false) {
            var name = (await Users.getData(senderID)).name;
            var id = senderID;
            var exp = 0;
            threadData.data.push({ name, id, exp });
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
        else {
            var userData = threadData.data.find(i => i.id == senderID);
            userData.exp = userData.exp + 1;
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
    }
}
module.exports.run = async function ({ args, api, event }) {
    const { threadID, senderID, messageID, type, mentions, body } = event;
    let check_joinTime = JSON.parse(fs.readFileSync(joinTime));
    var mention = Object.keys(mentions);
    const thread = require('./cache/checktt.json');
    const data = thread.find(i => i.threadID == threadID)
    if (args[0] == "all") {
        var msg = "", exp = [], i = 1, count = 0
        for(const user of data.data) {
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        var limit = args[2] || 20;
        var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var msg = "[====KIỂM TRA TƯƠNG TÁC===]\n\n";
            var numPage = Math.ceil(exp.length/limit);
            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let dataInfo = exp[i];
                msg += `[${i+1}]: ${dataInfo.name}: ${dataInfo.exp} tin nhắn\n • 𝐑𝐚𝐧𝐤: ${checkRank(dataInfo.exp)}\n`
            }
            msg += `\n--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}checktt số trang`
            return api.sendMessage(msg, threadID, messageID);
    }
    else 
        if(type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
            var exp = [], count = 0
            for(const user of data.data) {
                count += user.exp
                exp.push({ name: user.name, exp: user.exp, id: user.id });
            }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(i => i.id == mention[0])
       return api.sendMessage({body: `=== ${exp[rank].name} ===\n\n➣ Số tin nhắn: ${exp[rank].exp}\n➣ Tỉ lệ tương tác: ${(exp[rank].exp/count*100).toFixed(0)}%\n\n➣ Xếp hạng:\n • Mức rank: ${checkRank(exp[rank].exp)}\n • Top: ${rank + 1}\n\n➣ Ngày gia nhập:\n • ${check_joinTime[senderID+threadID].gio}\n • ${check_joinTime[senderID+threadID].burh}`, attachment: await down(exp[rank].exp)}, threadID, messageID);
        }
    else {
        var exp = [], count = 0
        for(const user of data.data) {
            count += user.exp
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        const rank = exp.findIndex(i => i.id == senderID);
       return api.sendMessage({body: `=== ${exp[rank].name} ===\n\n➣ Số tin nhắn: ${exp[rank].exp}\n➣ Tỉ lệ tương tác: ${(exp[rank].exp/count*100).toFixed(0)}%\n\n➣ Xếp hạng:\n • Mức rank: ${checkRank(exp[rank].exp)}\n • Top: ${rank + 1}\n\n➣ Ngày gia nhập:\n • ${check_joinTime[senderID+threadID].gio}\n • ${check_joinTime[senderID+threadID].burh}`, attachment: await down(exp[rank].exp)}, threadID, messageID);
    }
    }