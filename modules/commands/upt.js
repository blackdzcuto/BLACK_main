const { writeFileSync, existsSync, createReadStream } = require('fs-extra');
const axios = require('axios');

module.exports.config = {
    name: "upt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Uptime canvas",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 0,
};
module.exports.onLoad = async function () {
  var api = await axios.get("https://f6884a14-15bd-4717-bd7b-2394ef740c60.id.repl.co/banner/key=Nam_ne");
    if(!existsSync(__dirname + '/cache/SplineSans-Medium.ttf')) { 
        const checkFont = (await axios.get(api.data.medium, { responseType: "arraybuffer" })).data;
        writeFileSync(__dirname + '/cache/SplineSans-Medium.ttf', Buffer.from(checkFont, "utf-8"));
    };
}
module.exports.run = async function ({ api, event, args }) {
    const { senderID, threadID, messageID } = event;
    return api.sendMessage({ body: `[ BLACK]\n❯ Time: ${(await this.uptime()).time}\n❯ Version: ${global.config.version}
Điều hành bot bởi Nguyễn Thanh Mài`, attachment: createReadStream((await this.uptime()).pathUptime) }, threadID, messageID)
}
module.exports.uptime = async() =>{
    const { loadImage, createCanvas, registerFont } = require("canvas");
    const t = process.uptime();
    const h = Math.floor(t / (60 * 60));
    const m = Math.floor((t % (60 * 60)) / 60);
    const s = Math.floor(t % 60);
    const pathUptime = __dirname + '/cache/uptime.png';
    const randomAnime = (await axios.get('https://api.diencute1.repl.co/taoanhdep/random')).data;
    
    const anime = await loadImage(randomAnime.random.imgAnime);
    const line = await loadImage('https://i.imgur.com/jsMB7Ni.png');
    const background = await loadImage('https://i.imgur.com/YecdSbV.jpg');
    const text = await loadImage('https://i.imgur.com/uIMBmnk.png');
    const avatar = await loadImage(`https://graph.facebook.com/${global.config.ADMINBOT[0]}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`);

    registerFont(__dirname + '/cache/SplineSans-Medium.ttf', { family: "SplineSans-Medium" });
    var canvas = createCanvas(1280, 720);
    var ctx = canvas.getContext("2d");
        ctx.fillStyle = randomAnime.random.colorBg || "#4ea123"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.5;
        ctx.drawImage(background, 0, 0, 1280, 720);
        ctx.globalAlpha = 1;
        ctx.drawImage(anime, 540, -30, 700, 700);
        ctx.drawImage(line, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(text, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(avatar, 69, 67, 105, 105);
        ctx.font = "300 35px SplineSans-Medium";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "start";
        ctx.fillText('Nguyễn Thanh Mài - 23/12/2007', 274, 453);
        ctx.fillText(((h < 10) ? '0' + h : h) + ':' + ((m < 10) ? '0' + m : m) + ':' + ((s < 10) ? '0' + s : s), 274, 514);
        ctx.fillText(global.config.version, 274, 578);
        ctx.fillText("https://www.facebook.com/nguyenthanhmai.user2", 110, 215); 
    const imageBuffer = canvas.toBuffer();
        writeFileSync(pathUptime, imageBuffer);
    return {
        pathUptime,
        time: ((h < 10) ? '0' + h : h) + ':' + ((m < 10) ? '0' + m : m) + ':' + ((s < 10) ? '0' + s : s)
    }
}