const fs = global.nodemodule["fs-extra"], axios = global.nodemodule["axios"], Canvas = global.nodemodule["canvas"], path = __dirname + "/cache/background.png", path2 = __dirname + "/cache/SplineSans-Light.ttf";
module.exports.config = {
	name: "uptv4",
	version: "2.0",
	hasPermssion: 2,
	credits: "Nam",//mod by kaneki
	description: "Xem thời gian bot đã online + ảnh",
	commandCategory: "System",
	usages: "",
	cooldowns: 0, 
    dependencies: {
		"canvas": ""
     }
};
function byte2mb(bytes) {
		const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		let l = 0, n = parseInt(bytes, 10) || 0;
		while (n >= 1024 && ++l) n = n / 1024;
		return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
	}
  var intag = "Đéo có :)";
  var github = "Hoàng Xuân Thành";
  var face = "fb.me/thanhthongthai2oo3";
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
      } return i;
};
module.exports.run = async ({ api, event, Users, Threads }) => {
	var { threadID, messageID, senderID } = event, { sendMessage: send } = api;
try {
    let name = await Users.getNameUser(senderID);
  var read = await axios.get("https://api-test.sp20bse.repl.co/uptcanvas?apikey=KANEKIVIP30062007");
  var boxget = await Threads.getAll(['threadID'])
	var userget = await Users.getAll(['userID'])
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
	token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
	verbose: false,
	timeout: 10000,
	https: true,
	urlCount: 5,
	bufferSize: 8,
	unit: fast.UNITS.Mbps
	});
	const ketqua = await speedTest.getSpeed();
		const moment = require("moment-timezone");
		var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
		var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
		var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
		var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
		var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");    
		var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
		var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
		var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
		var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
	  const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
		const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	  var hi = ["Admin bot rất đẹp trai","Admin đang kiếm người yêu","Bạn sẽ bị ban nếu spam bot"];
	  var know = hi[Math.floor(Math.random() * hi.length)];
		var d = new Date();
		var day = d.getDay()
	if (day == 0) var day = "Chủ nhật"
	else if (day == 1) var day = "Thứ hai"
	else if (day == 2) var day = "Thứ ba"
	else if (day == 3) var day = "Thứ tư"
	else if (day == 4) var day = "Thứ năm"
	else if (day == 5) var day = "Thứ sáu"
	else if (day == 6) var day = "Thứ 7"
	else if (day == 7) var day = "Chủ nhật"
	else return console.log(day)
	  const pidusage = await global.nodemodule["pidusage"](process.pid);
	  const timeStart = Date.now();
	  const time = process.uptime();
	const hours = Math.floor(time / (60 * 60))
	const minutes = Math.floor((time % (60 * 60)) / 60)
	const seconds = Math.floor(time % 60);  
  var upt =`${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}`;
  if (!fs.existsSync(path2)) { 
  var getfont = (await axios.get(read.data.data.font, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(path2, Buffer.from(getfont, "utf-8"));
    };
  var baseImage = await Canvas.loadImage(read.data.data.url);
	var canvas = Canvas.createCanvas(1640, 924);
	var ctx = canvas.getContext("2d");
    Canvas.registerFont(path2, {
        family: "SplineSans-Light"
    });
  ctx.drawImage(baseImage, 0, 0, 1640, 924);
	ctx.font = "normal 100px SplineSans-Light";
	ctx.fillStyle = randomColor();
	ctx.textAlign = "left";
  ctx.fillText(upt, 1005, 465);
  ctx.font = "300 50px SplineSans-Light";
	ctx.fillStyle = randomColor();
	ctx.fillText(intag, 940, 545); 
  ctx.fillStyle = randomColor();
	ctx.fillText(github, 940, 615);
  ctx.fillStyle = randomColor();
	ctx.fillText(face, 940, 695);
  ctx.beginPath();
	fs.writeFileSync(path, canvas.toBuffer());
  return send({
    body: `» Chào ${name} «\nHôm nay là ${day} Ngày ${ngay} || ${thang} || ${nam}!\n🐳Prefix Tổng: ${global.config.PREFIX}\n💤Prefix hiện tại: ${prefix}\n🐧Tên bot: ${global.config.BOTNAME}\n🕹️Bot on: ${upt}\n🏘️Threads: ${boxget.length}\n👥Users: ${userget.length}\n📺Cpu: ${pidusage.cpu.toFixed(1)}\n🎮Ram: ${byte2mb(pidusage.memory)}\n❗Delay: ${Date.now() - timeStart}ms\n📡Fast: ${ketqua} Mbs\n●─────────────────────●\n『Bạn có biết』: ${know}`,
		      mentions: [
              {
				  tag: name,
				  id: senderID
			  }
			  ],
    attachment: fs.createReadStream(path)}, 
    threadID, () => {
    fs.unlinkSync(path)}, messageID);
  } 
  catch (error) {
    return send(
  "lỗi rùi",
    threadID, messageID)
  }
}