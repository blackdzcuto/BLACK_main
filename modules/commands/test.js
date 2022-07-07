module.exports.config = {
	name: "test",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "m.me/HuuDan.Official",
	description: "chỉ là uptime",
	commandCategory: "Hình ảnh",
	usages: "",
	cooldowns: 0
};



module.exports.run = async function({ api, event ,args}) {
	let { senderID, threadID, messageID } = event;

  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);

	const axios = require("axios");
	
	const timeStart = Date.now();
	const { loadImage, createCanvas } = require("canvas");
   const fs = require("fs-extra");
         		
	
  const path = __dirname + '/cache';
const pathImg = path + '/' + 'img.png';

 const str = `${hours}:${minutes}:${seconds}`;
  
	let getImg = (await axios.get(`https://i.imgur.com/BCiKZ7z.jpg`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getImg, 'utf-8'));

	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FF0000"; 
	ctx.font = "700 50px Arial";
	ctx.textAlign = "start";
 	ctx.fillText(str, 498, 225);
  ctx.fillStyle = "#000000"; 
  ctx.font = "300 25px Arial";
  ctx.fillText("itg", 465, 274);
  ctx.fillText("github", 465, 307);
  ctx.fillText("fb", 465, 344);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
  var msg = `[🔱]Tổng người dùng: ${global.data.allUserID.length}\n[🔱]Tổng Nhóm: ${global.data.allThreadID.length}`
  
	return api.sendMessage({body: msg, attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg) , messageID);        
  }