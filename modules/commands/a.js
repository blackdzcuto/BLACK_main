const fs = global.nodemodule["fs-extra"], axios = global.nodemodule["axios"], Canvas = global.nodemodule["canvas"], path = __dirname + "/cache/background.png", path2 = __dirname + "/cache/SplineSans-Medium.ttf", path3 = __dirname + "/cache/SplineSans-Light.ttf";
module.exports.config = {
	name: "a",
	version: "2.0",
	hasPermssion: 0,
	credits: "Nam",
	description: "Xem thời gian bot đã online + ảnh",
	commandCategory: "System",
	usages: "",
	cooldowns: 0,
  envConfig: {
    "API_KEY": "Nam_ne"
  },  
  dependencies: {
		"fs-extra": "",
    "axios": "",
		"canvas": ""
  }
};
  var intag = "Coming Soon";
  var github = "Comning Soon";
  var face = "m.me/nguyenthanhmai.user2";

function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
};
function checkTime(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
};

module.exports.run = async function ({ api, event, Threads }) {
	var { threadID, messageID } = event, { credits: c, name: nameModule } = this.config, { ADMINBOT, NDH, BOTNAME, PREFIX, version } = global.config, { allUserID, allThreadID } = global.data, { commands, events } = global.client, { sendMessage: send } = api;
  try {
  var timeStart = Date.now();
  var key = global.config[nameModule].API_KEY;
  var read = await axios.get("https://f6884a14-15bd-4717-bd7b-2394ef740c60.id.repl.co/banner");
  var love = await axios.get(read.data.thinh);  
  if (c != read.data.srcImg && read.data.status != true )return;
  if (!fs.existsSync(path2)) { 
  var getfont = (await axios.get(read.data.medium, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(path2, Buffer.from(getfont, "utf-8"));
    };
  if (!fs.existsSync(path3)) { 
  var getfont2 = (await axios.get(read.data.light, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(path3, Buffer.from(getfont2, "utf-8"));
    };
  var background = (await axios.get(read.data.url, { responseType: "arraybuffer" })).data;
	fs.writeFileSync(path, Buffer.from(background, "utf-8"));
  var uptime = process.uptime(),
		  hours = Math.floor(uptime / (60 * 60)),
		  miutes = Math.floor((uptime % (60 * 60)) / 60),
		  seconds = Math.floor(uptime % 60);  
  var upt = `${checkTime(hours)}:${checkTime(miutes)}:${checkTime(seconds)}`;
  var time = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var threadSetting = (await Threads.getData(String(event.threadID))).data || {};
  var prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX :  "𝐧𝐡𝐨́𝐦 𝐜𝐡𝐮̛𝐚 𝐬𝐞𝐭 𝐩𝐫𝐞𝐟𝐢𝐱 𝐦𝐨̛́𝐢";
  var baseImage = await Canvas.loadImage(path);
	var canvas = Canvas.createCanvas(1640, 924);
	var ctx = canvas.getContext("2d");
    Canvas.registerFont(path2, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(path3, {
        family: "SplineSans-Light"
    });
  ctx.drawImage(baseImage, 0, 0, 1640, 924);
	ctx.font = "normal 100px SplineSans-Medium";
	ctx.fillStyle = randomColor();
	ctx.textAlign = "left";
  ctx.fillText(upt, 1011, 465);
  ctx.font = "300 50px SplineSans-Light";
	ctx.fillStyle = randomColor();
	ctx.fillText(intag, 940, 545); 
  ctx.fillStyle = randomColor();
	ctx.fillText(github, 940, 615);
  ctx.fillStyle = randomColor();
	ctx.fillText(face, 940, 695);
  ctx.beginPath();
  
	var imageBuffer = canvas.toBuffer();
	fs.writeFileSync(path, imageBuffer);

  return send({
    body: 
  "👾 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀: " + time + "\n"
+ "👾 𝐓𝐞̂𝐧 𝐁𝐨𝐭:" + BOTNAME + "\n"
+ "⏱ 𝐁𝐨𝐭 𝐡𝐢𝐞̣̂𝐧 𝐨𝐧𝐥𝐢𝐧𝐞: " + upt + "\n"
+ "👑 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭: " + (ADMINBOT.length) + "\n"
+ "👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐡𝐨̂̃ 𝐭𝐫𝐨̛̣ 𝐁𝐨𝐭: " + (NDH.length) + "\n"
+ "👥 𝐓𝐨̂̉𝐧𝐠 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐃𝐮̀𝐧𝐠: " + (allUserID.length) + "\n"
+ "👨‍👨‍👧‍👦 𝐓𝐨̂̉𝐧𝐠 𝐍𝐡𝐨́𝐦: " + (allThreadID.length) + "\n"
+ "💾 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: " + version + "\n"
+ "🖥 𝐏𝐫𝐞𝐟𝐢𝐱 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠:  " + PREFIX + "\n"
+ "📲 𝐏𝐫𝐞𝐟𝐢𝐱 𝐁𝐨𝐱: " + prefix + "\n"
+ "📝 𝐓𝐨̂̉𝐧𝐠 𝐒𝐨̂́ 𝐋𝐞̣̂𝐧𝐡: " + (commands.size) + "\n"
+ "📝 𝐓𝐨̂̉𝐧𝐠 𝐒𝐨̂́ 𝐒𝐮̛̣ 𝐊𝐢𝐞̣̂𝐧 : " + (events.size) + "\n"
+ "📌 𝐏𝐢𝐧𝐠: " + (Date.now() - timeStart) + " 𝐦𝐬 \n"
+ "💬 𝐓𝐡𝐢́𝐧𝐡: " + love.data.data,
    attachment: fs.createReadStream(path) }, threadID, () => {
    fs.unlinkSync(path)}, messageID);
  } catch (error) {
    return send("Đã có lỗi xảy ra, LH: \nfb:' https://m.me/nguyenthanhmai.user2' or zl:'0974052602' để fix", threadID, messageID)
  }
}