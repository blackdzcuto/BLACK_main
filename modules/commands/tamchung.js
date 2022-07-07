module.exports.config = {
    name: "tamchung",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "ProCoderMew fix by bhoang",
    description: "",
    commandCategory: "Lệnh 18+",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'tam.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/l0MzGof.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let tam_img = await jimp.read(__root + "/tam.png");
    let pathImg = __root + `/tam_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://le31.glitch.me/fb/avt?q=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    let getAvatarTwo = (await axios.get(`https://le31.glitch.me/fb/avt?q=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    tam_img.resize(901,1300).composite(circleOne.resize(140, 140), 247, 243).composite(circleTwo.resize(150, 150), 382, 231);
    
    let raw = await tam_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝗧𝗮̆́𝗺 𝗰𝗵𝘂𝗻𝗴 𝘃𝗼̛́𝗶 𝗮𝗻𝗵 𝗻𝗵𝗲́ 𝗯𝗮𝗲 🤤" + tag + " 𝗵𝗮̃𝘆 𝗴𝗶𝘂̛̃ 𝘁𝗵𝗮̆𝗻𝗴 𝗯𝗮̆̀𝗻𝗴 𝗸𝗲̉𝗼 𝗻𝗴𝗮̃ 𝗻𝗵𝗲́",
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
