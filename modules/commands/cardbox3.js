const fonts = '/cache/Play-Bold.ttf'
const downfonts =
  'https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download'
const fontsName = 45
const fontsInfo = 33
const fontsOthers = 27
const colorName = '#00FF00'
module.exports.config = {
  name: 'cardbox3',
  version: '2.0.0',
  hasPermssion: 0,
  credits: 'D-Jukie',
  description: 'Xem thông tin box của bạn',
  commandCategory: 'tạo ảnh',
  usages: '',
  cooldowns: 10,
  dependencies: {
    canvas: '',
    axios: '',
    'fs-extra': '',
  },
}
module.exports.circle = async (_0x4a66b3) => {
  const _0x17405f = global.nodemodule.jimp
  return (
    (_0x4a66b3 = await _0x17405f.read(_0x4a66b3)),
    _0x4a66b3.circle(),
    await _0x4a66b3.getBufferAsync('image/png')
  )
}
module.exports.run = async function ({
  api: _0x39b3bf,
  event: _0x1446fa,
  args: _0x35605a,
  Users: _0x3d0333,
}) {
  if (this.config.credits != 'D-Jukie') {
    return _0x39b3bf.sendMessage(
      '\u26A1️Phát hiện credits đã bị thay đổi',
      _0x1446fa.threadID,
      _0x1446fa.messageID
    )
  }
  let {
    senderID: _0x350232,
    threadID: _0x57f795,
    messageID: _0x368fa7,
  } = _0x1446fa
  const { loadImage: _0x5b13d9, createCanvas: _0x4a7444 } = require('canvas'),
    _0x36dbca = require('request'),
    _0x541c53 = global.nodemodule['fs-extra'],
    _0x3f5ac7 = global.nodemodule.axios
  let _0x45e7b5 = __dirname + ('/cache/' + _0x350232 + '123.png'),
    _0x36ccd5 = __dirname + '/cache/avtuserthread.png',
    _0x574a44 = __dirname + '/cache/avtuserrd.png',
    _0x4b3b9e = __dirname + '/cache/avtuserrd2.png',
    _0x49632d = __dirname + '/cache/avtuserrd3.png'
  var _0x2aa63a = await _0x39b3bf.getThreadInfo(_0x57f795)
  let _0x237118 = _0x2aa63a.threadName
  var _0x11a64f = [],
    _0x4b1508 = [],
    _0x293d86 = [],
    _0x904d6c = []
  for (let _0x5eee0c in _0x2aa63a.userInfo) {
    var _0x4bf0c7 = _0x2aa63a.userInfo[_0x5eee0c].gender,
      _0x48aeb6 = _0x2aa63a.userInfo[_0x5eee0c].name
    if (_0x4bf0c7 == 'MALE') {
      _0x4b1508.push(_0x5eee0c + _0x4bf0c7)
    } else {
      _0x4bf0c7 == 'FEMALE'
        ? _0x293d86.push(_0x4bf0c7)
        : _0x904d6c.push(_0x48aeb6)
    }
  }
  var _0x2bdabe = _0x4b1508.length,
    _0x38ddc8 = _0x293d86.length
  let _0x2b3ef6 = _0x2aa63a.adminIDs.length,
    _0x3abefd = _0x2aa63a.messageCount,
    _0x5ae6fc = _0x2aa63a.participantIDs.length
  const _0x593fa7 = global.nodemodule.path,
    _0x4770e5 = global.nodemodule.canvas,
    _0xd22cba = _0x593fa7.resolve(__dirname, 'cache')
  var _0x3034e9 = _0x2aa63a.adminIDs,
    _0x5be026 = _0x3034e9[Math.floor(Math.random() * _0x2b3ef6)]
  let _0x31f18d = _0x2aa63a.participantIDs
  var _0x1fc20a = _0x31f18d[Math.floor(Math.random() * _0x5ae6fc)],
    _0x5d70b7 = _0x31f18d[Math.floor(Math.random() * _0x5ae6fc)]
  let _0x5eaf34 = (
      await _0x3f5ac7.get(
        'https://graph.facebook.com/' +
          _0x5be026.id +
          '/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de',
        { responseType: 'arraybuffer' }
      )
    ).data,
    _0x2cc04c = (
      await _0x3f5ac7.get(
        'https://graph.facebook.com/' +
          _0x1fc20a +
          '/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de',
        { responseType: 'arraybuffer' }
      )
    ).data,
    _0x34b38f = (
      await _0x3f5ac7.get(
        'https://graph.facebook.com/' +
          _0x5d70b7 +
          '/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de',
        { responseType: 'arraybuffer' }
      )
    ).data,
    _0x5506a2 = (
      await _0x3f5ac7.get(encodeURI('' + _0x2aa63a.imageSrc), {
        responseType: 'arraybuffer',
      })
    ).data,
    _0x7e9bb6 = (
      await _0x3f5ac7.get(encodeURI('https://i.imgur.com/z8l2T0c.png'), {
        responseType: 'arraybuffer',
      })
    ).data
  _0x541c53.writeFileSync(_0x36ccd5, Buffer.from(_0x5506a2, 'utf-8'))
  _0x541c53.writeFileSync(_0x574a44, Buffer.from(_0x5eaf34, 'utf-8'))
  _0x541c53.writeFileSync(_0x4b3b9e, Buffer.from(_0x2cc04c, 'utf-8'))
  _0x541c53.writeFileSync(_0x49632d, Buffer.from(_0x34b38f, 'utf-8'))
  avatar = await this.circle(_0x36ccd5)
  avataruser = await this.circle(_0x574a44)
  avataruser2 = await this.circle(_0x4b3b9e)
  avataruser3 = await this.circle(_0x49632d)
  _0x541c53.writeFileSync(_0x45e7b5, Buffer.from(_0x7e9bb6, 'utf-8'))
  if (!_0x541c53.existsSync(__dirname + ('' + fonts))) {
    let _0x4338d9 = (
      await _0x3f5ac7.get('' + downfonts, { responseType: 'arraybuffer' })
    ).data
    _0x541c53.writeFileSync(
      __dirname + ('' + fonts),
      Buffer.from(_0x4338d9, 'utf-8')
    )
  }
  let _0x3ee7f9 = await _0x5b13d9(_0x45e7b5),
    _0xe6d321 = await _0x5b13d9(avatar),
    _0x143096 = await _0x5b13d9(avataruser),
    _0xeb7631 = await _0x5b13d9(avataruser2),
    _0x44d046 = await _0x5b13d9(avataruser3),
    _0x2c670a = _0x4a7444(_0x3ee7f9.width, _0x3ee7f9.height),
    _0x3a2e89 = _0x2c670a.getContext('2d'),
    _0x2600a7 = _0x35605a.join(' ') || _0x237118,
    _0x47262d = _0x2aa63a.threadID
  _0x3a2e89.drawImage(_0x3ee7f9, 0, 0, _0x2c670a.width, _0x2c670a.height)
  _0x3a2e89.drawImage(_0xe6d321, 80, 73, 285, 285)
  _0x3a2e89.drawImage(_0x143096, 450, 422, 43, 43)
  _0x3a2e89.drawImage(_0xeb7631, 500, 422, 43, 43)
  _0x3a2e89.drawImage(_0x44d046, 550, 422, 43, 43)
  _0x3a2e89.font = '700 ' + fontsName + 'px Arial'
  _0x3a2e89.fillStyle = '' + colorName
  _0x3a2e89.textAlign = 'start'
  fontSize = 40
  _0x3a2e89.fillText(_0x2600a7, 435, 125)
  _0x4770e5.registerFont(__dirname + ('' + fonts), { family: 'Play-Bold' })
  _0x3a2e89.font = fontsInfo + 'px Play-Bold'
  _0x3a2e89.fillStyle = '#ffff'
  _0x3a2e89.textAlign = 'start'
  fontSize = 20
  _0x3a2e89.fillText('\xBB Số thành viên: ' + _0x5ae6fc, 439, 199)
  _0x3a2e89.fillText('\xBB Quản trị viên: ' + _0x2b3ef6, 439, 243)
  _0x3a2e89.fillText('\xBB Nam: ' + _0x2bdabe, 439, 287)
  _0x3a2e89.fillText('\xBB Nữ: ' + _0x38ddc8, 439, 331)
  _0x3a2e89.fillText('\xBB Tổng số tin nhắn: ' + _0x3abefd, 439, 379)
  _0x3a2e89.font = fontsOthers + 'px Play-Bold'
  _0x3a2e89.fillStyle = '#ffff'
  _0x3a2e89.textAlign = 'start'
  fontSize = 20
  _0x3a2e89.fillText('ID BOX: ' + _0x47262d, 18, 470)
  _0x3a2e89.font = fontsOthers + 'px Play-Bold'
  _0x3a2e89.fillStyle = '#ffff'
  _0x3a2e89.textAlign = 'start'
  fontSize = 20
  _0x3a2e89.fillText(
    'Cùng ' + (parseInt(_0x5ae6fc) - 3) + ' thành viên khác...',
    607,
    453
  )
  _0x3a2e89.beginPath()
  const _0x20bfc7 = _0x2c670a.toBuffer()
  return (
    _0x541c53.writeFileSync(_0x45e7b5, _0x20bfc7),
    _0x541c53.removeSync(_0x36ccd5),
    _0x541c53.removeSync(_0x574a44),
    _0x39b3bf.sendMessage(
      { attachment: _0x541c53.createReadStream(_0x45e7b5) },
      _0x57f795,
      () => _0x541c53.unlinkSync(_0x45e7b5),
      _0x368fa7
    )
  )
}
