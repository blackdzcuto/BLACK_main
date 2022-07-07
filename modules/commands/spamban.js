 const num = 9 //số lần spam bị ban -1, ví dụ 5 lần gì lần 6 sẽ bị ban
 const timee = 130 // trong thời gian `timee` spam `num` lần sẽ bị ban
 module.exports.config = {
  name: "spamban",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "NTKhang", //fix get by  D-Jukie
  description: `tự động cấm người dùng nếu spam bot ${num} lần/${timee}s`,
  commandCategory: "Hệ Thống",
  usages: "x",
  cooldowns: 5
};

module.exports. run = async function ({api, event})  {
  return api.sendMessage(`Tự động cấm người dùng nếu spam ${num} lần/${timee}s`, event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ Users, Threads, api, event})  {
  let { senderID, messageID, threadID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(threadID) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + (timee*1000)) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= num) {
      var namethread = datathread.threadName;
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${num} lần/${timee}s` || null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage("💬 𝐈𝐃: " + senderID + " | " + " 🎟️ 𝐓𝐞̂𝐧: " + dataUser.name + `\n𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 𝒃𝒊̣ 𝒕𝒐̂́𝒏𝒈 𝒄𝒐̂̉ 𝒗𝒂̀𝒐 𝒕𝒖̀\n𝑽𝒊̀ 𝒍𝒊́ 𝒅𝒐: 𝒔𝒑𝒂𝒎 𝒃𝒐𝒕 ${num} 𝒍𝒂̂̀𝒏/${timee}s ⏰\n𝑵𝒆̂́𝒖 𝒍𝒂̀ 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒒𝒖𝒆𝒏 𝒉𝒂̃𝒚 𝒊𝒃 𝑨𝒅𝒎𝒊𝒏 𝒅𝒆̂̉ 𝒃𝒂̀𝒏 𝒗𝒆̂̀ 𝒗𝒊𝒆̣̂𝒄 𝒈𝒐̛̃ 𝒃𝒂𝒏 𝒉𝒂𝒚 𝒌𝒉𝒐̂𝒏𝒈 💌\nhttps://www.facebook.com/nguyenthanhmai.user2\n𝑩𝒂́𝒐 𝒄𝒂́𝒐 𝒕𝒐̣̂𝒊 𝒏𝒉𝒂̂𝒏 𝒕𝒐̛́𝒊 𝑨𝒅𝒎𝒊𝒏 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`🚫 𝗣𝗵𝗮̣𝗺 𝗻𝗵𝗮̂𝗻 𝘀𝗽𝗮𝗺 ${num} 𝗹𝗮̂̀𝗻/${timee}s\n🔰 𝗧𝗲̂𝗻: ${dataUser.name} \n⚠️ 𝗜𝗗: ${senderID}\n💬 𝗜𝗗 𝗕𝗼𝘅: ${threadID} \n🎟️ 𝗡𝗮𝗺𝗲𝗕𝗼𝘅: ${namethread} \n🕐 𝗟𝘂́𝗰: ${timeDate}`, 
          ad);
    }
    })
    }
  }
};