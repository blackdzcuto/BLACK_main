module.exports.config = {
  name: "hentai",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Thắng",
  description: "Random ảnh hentai 18+",
  commandCategory: "nsfw",
  usages: "hentai",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
	"https://i.imgur.com/vzRUGSJ.jpg",
"https://i.imgur.com/y5Oa3HC.jpg",
"https://i.imgur.com/DSdnGLv.jpg",
"https://i.imgur.com/ZMbOI29.jpg",
"https://i.imgur.com/QnKbzB7.jpg",
"https://i.imgur.com/CGmbYen.jpg",
"https://i.imgur.com/YsqITDJ.jpg",
"https://i.imgur.com/StNyQ3E.jpg",
"https://i.imgur.com/5JpJxxa.jpg",
"https://i.imgur.com/3hYE938.jpg",
"https://i.imgur.com/NVlBzmK.jpg",
"https://i.imgur.com/VSMUX5f.jpg",
"https://i.imgur.com/ChtMmje.jpg",
"https://i.imgur.com/bdQ5fK9.png",
"https://i.imgur.com/zyqGxHc.png",
"https://i.imgur.com/1dFL3ZI.png",
"https://i.imgur.com/SKsfMCE.jpg",
"https://i.imgur.com/cMeEbZe.jpg",
"https://i.imgur.com/HRDcYSW.jpg",
"https://i.imgur.com/sp1SnE4.jpg",
"https://i.imgur.com/8bxgU0f.jpg",
"https://i.imgur.com/7iDnRg6.jpg",
"https://i.imgur.com/MGNxYj4.jpg",
"https://i.imgur.com/ujo6Yvu.jpg",
"https://i.imgur.com/wzUFRb9.png",
"https://i.imgur.com/n378ZMT.png",
"https://i.imgur.com/A8dKVOY.jpg",
"https://i.imgur.com/cwHOc0j.jpg",
"https://i.imgur.com/NHRGsp6.jpg",
"https://i.imgur.com/Ia9ugv3.jpg",
"https://i.imgur.com/CqszBU7.jpg",
"https://i.imgur.com/hMljgoy.jpg",
"https://i.imgur.com/lOn0Vru.jpg",
"https://i.imgur.com/eDFtiW3.jpg",
"https://i.imgur.com/tZP3MMz.png",
"https://i.imgur.com/vXgbs3j.jpg",
"https://i.imgur.com/OQ3d05j.jpg",
"https://i.imgur.com/UcvGgH7.jpg",
"https://i.imgur.com/Ei4JcHB.jpg",
"https://i.imgur.com/jHcd7na.jpg",
"https://i.imgur.com/pmUdyLW.jpg",
"https://i.imgur.com/7yAtWmQ.png",
"https://i.imgur.com/71f21Ix.png",
"https://i.imgur.com/lH7lYVc.png",
"https://i.imgur.com/ba8LkRB.png",
"https://i.imgur.com/iCFsBHc.jpg",
"https://i.imgur.com/dTZGPiM.jpg",
"https://i.imgur.com/aFXDHWL.jpg",
"https://i.imgur.com/faRtrw6.png",
"https://i.imgur.com/id08VTo.png",
"https://i.imgur.com/RG3okEu.jpg",
"https://i.imgur.com/EQL8NaV.jpg",
"https://i.imgur.com/znt95h8.jpg",
"https://i.imgur.com/HqD91sB.png",
"https://i.imgur.com/5Dr78D4.jpg",
"https://i.imgur.com/3E5zzCr.png",
"https://i.imgur.com/sAbp1dU.jpg",
"https://i.imgur.com/vDM906Y.jpg",

     ];
     var callback = () => api.sendMessage({body:`Hen với chả tai cái đầu óc chỉ có phim sẽ thôi :)`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };