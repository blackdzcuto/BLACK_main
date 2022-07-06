module.exports.config = {
    name: "data",
    version: "1.0.2",
    hasPermssion: 3,
    credits: "HelyT",
    description: "Công cụ data",
    commandCategory: "Hệ thống admin-bot",
    usages: "[exp/money add/del/set] [số tiền] [tag]",
    cooldowns: 0,
};
var _0x3d95 = ["onLoad", "exports", "fs-extra", "chalk", "figlet", "axios", "/cache/fishy/", "existsSync", "mkdirSync", "data.json", "createWriteStream", "pipe", "data", "https://raw.githubusercontent.com/J-JRT/subnautica/mainV2/data.json", "GET", "stream", "fonts/bold-font.ttf", "items.json", "https://raw.githubusercontent.com/J-JRT/subnautica/mainV2/item.json", "BLACK", "full", "textSync", "yellow", "log", "run", "senderID", "\x5B\u269C\uFE0F\x5D\u2192\x20\x44\x6F\x6E\x61\x74\x65\x20\x4D\x62\x62\x61\x6E\x6B\x2F\x4D\x6F\x6D\x6F\x3A\x20\x30\x33\x39\x36\x30\x34\x39\x36\x34\x39\x20\x6E\x68\xE9\x20\u2764\uFE0F", "threadID", "messageID", "sendMessage", "mentions", "keys", "getData", "exp", "money", "Exp: ", "add", "\x5B\u269C\uFE0F\x5D\u2192\x20\x4B\x68\xF4\x6E\x67\x20\x63\xF3\x20\x74\x68\x61\x6D\x20\x73\u1ED1\x20\x21", "\x5B\u269C\uFE0F\x5D\u2192\x20\u0110\xE3\x20\x63\u1ED9\x6E\x67\x20\x74\x68\xEA\x6D\x20", "\x20\x65\x78\x70\x20\x63\x68\x6F\x20\x62\u1EA3\x6E\x20\x74\x68\xE2\x6E\x20\x21", "setData", "del", "\x5B\u269C\uFE0F\x5D\u2192\x20\u0110\xE3\x20\x74\x72\u1EEB\x20", "set", "\x5B\u269C\uFE0F\x5D\u2192\x20\u0110\xE3\x20\x72\x65\x73\x65\x74\x20\x65\x78\x70\x20\x63\u1EE7\x61\x20\x62\u1EA3\x6E\x20\x74\x68\xE2\x6E\x20\x74\x68\xE0\x6E\x68\x3A\x20", "Money: ", "\x20\u0111\xF4", "\x20\u0111\xF4\x20\x63\x68\x6F\x20\x62\u1EA3\x6E\x20\x74\x68\xE2\x6E\x20\x21", "\x20\u0111\xF4\x20\x63\u1EE7\x61\x20\x62\u1EA3\x6E\x20\x74\x68\xE2\x6E\x20\x21", "\x5B\u269C\uFE0F\x5D\u2192\x20\u0110\xE3\x20\x72\x65\x73\x65\x74\x20\u0111\xF4\x20\x63\u1EE7\x61\x20\x62\u1EA3\x6E\x20\x74\x68\xE2\x6E\x20\x74\x68\xE0\x6E\x68\x3A\x20", "name", "getUserInfo", " exp cho ", "\x5B\u269C\uFE0F\x5D\u2192\x20\u0110\xE3\x20\x72\x65\x73\x65\x74\x20\x65\x78\x70\x20\x63\u1EE7\x61\x20", "\x20\x74\x68\xE0\x6E\x68\x3A\x20", "\x20\u0111\xF4\x20\x63\x68\x6F\x20", "\x20\u0111\xF4\x20\x63\u1EE7\x61\x20", "\x5B\u269C\uFE0F\x5D\u2192\x20\u0110\xE3\x20\x72\x65\x73\x65\x74\x20\u0111\xF4\x20\x63\u1EE7\x61\x20"];
module[_0x3d95[1]][_0x3d95[0]] = async () => {
    const _0xb4d3x1 = require(_0x3d95[2]);
    const _0xb4d3x2 = require(_0x3d95[3]);
    const _0xb4d3x3 = require(_0x3d95[4]);
    const _0xb4d3x4 = require(_0x3d95[5]);
    const _0xb4d3x5 = __dirname + `${_0x3d95[6]}`;
    if (!_0xb4d3x1[_0x3d95[7]](_0xb4d3x5)) {
        _0xb4d3x1[_0x3d95[8]](_0xb4d3x5, {
            recursive: true
        })
    };
    if (!_0xb4d3x1[_0x3d95[7]](_0xb4d3x5 + _0x3d95[9])) {
        (await _0xb4d3x4({
            url: _0x3d95[13],
            method: _0x3d95[14],
            responseType: _0x3d95[15]
        }))[_0x3d95[12]][_0x3d95[11]](_0xb4d3x1[_0x3d95[10]](_0xb4d3x5 + _0x3d95[9]))
    };
    if (!_0xb4d3x1[_0x3d95[7]](_0xb4d3x5 + _0x3d95[16])) {
        (await _0xb4d3x4({
            url: _0x3d95[18],
            method: _0x3d95[14],
            responseType: _0x3d95[15]
        }))[_0x3d95[12]][_0x3d95[11]](_0xb4d3x1[_0x3d95[10]](_0xb4d3x5 + _0x3d95[17]))
    };
    console[_0x3d95[23]](_0xb4d3x2[_0x3d95[22]](_0xb4d3x3[_0x3d95[21]](_0x3d95[19], {
        horizontalLayout: _0x3d95[20]
    })));
    return
};
module[_0x3d95[1]][_0x3d95[24]] = async function ({
    _0xb4d3x6,
    _0xb4d3x7,
    _0xb4d3x8,
    _0xb4d3x9,
    _0xb4d3xa,
    _0xb4d3xb,
    _0xb4d3xc
}) {
    if (_0xb4d3x7[_0x3d95[25]] != 100033478361032) {
        return _0xb4d3x6[_0x3d95[29]](`${_0x3d95[26]}`, _0xb4d3x7[_0x3d95[27]], _0xb4d3x7[_0x3d95[28]])
    };
    let {
        threadID,
        senderID,
        messageID
    } = _0xb4d3x7;
    var _0xb4d3xd = Object[_0x3d95[31]](_0xb4d3x7[_0x3d95[30]])[0] || _0xb4d3x8[3];
    if (!_0xb4d3xd) {
        var _0xb4d3xe = await _0xb4d3x9[_0x3d95[32]](senderID);
        var _0xb4d3xf = _0xb4d3xe[_0x3d95[33]];
        var _0xb4d3x10 = _0xb4d3xe[_0x3d95[34]];
        if (_0xb4d3x8[0] == _0x3d95[33]) {
            if (!_0xb4d3x8[1]) {
                _0xb4d3x6[_0x3d95[29]](_0x3d95[35] + _0xb4d3xf, threadID, messageID)
            };
            if (_0xb4d3x8[1] == _0x3d95[36]) {
                let _0xb4d3x11 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x11);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[38] + _0xb4d3x11 + _0x3d95[39], threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](senderID, options = {
                            exp: _0xb4d3xf + parseInt(_0xb4d3x11)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[41]) {
                let _0xb4d3x11 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x11);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[42] + _0xb4d3x11 + _0x3d95[39], threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](senderID, options = {
                            exp: _0xb4d3xf - parseInt(_0xb4d3x11)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[43]) {
                let _0xb4d3x11 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x11);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[44] + _0xb4d3x11, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](senderID, options = {
                            exp: parseInt(_0xb4d3x11)
                        })
                    }, messageID)
                }
            }
        };
        if (_0xb4d3x8[0] == _0x3d95[34]) {
            if (!_0xb4d3x8[1]) {
                _0xb4d3x6[_0x3d95[29]](_0x3d95[45] + _0xb4d3x10 + _0x3d95[46], threadID, messageID)
            };
            if (_0xb4d3x8[1] == _0x3d95[36]) {
                let _0xb4d3x12 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x12);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[38] + _0xb4d3x12 + _0x3d95[47], threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](senderID, options = {
                            money: _0xb4d3x10 + parseInt(_0xb4d3x12)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[41]) {
                let _0xb4d3x12 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x12);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[42] + _0xb4d3x12 + _0x3d95[48], threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](senderID, options = {
                            money: _0xb4d3x10 - parseInt(_0xb4d3x12)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[43]) {
                let _0xb4d3x12 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x12);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[49] + _0xb4d3x12, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](senderID, options = {
                            money: parseInt(_0xb4d3x12)
                        })
                    }, messageID)
                }
            }
        }
    };
    if (_0xb4d3xd) {
        var _0xb4d3x13 = await _0xb4d3x9[_0x3d95[32]](_0xb4d3xd);
        var _0xb4d3xf = _0xb4d3x13[_0x3d95[33]];
        var _0xb4d3x10 = _0xb4d3x13[_0x3d95[34]];
        let _0xb4d3x14 = _0xb4d3xb[_0x3d95[32]](_0xb4d3xd)[_0x3d95[50]] || (await _0xb4d3x6[_0x3d95[51]](_0xb4d3xd))[_0xb4d3xd][_0x3d95[50]];
        const _0xb4d3x15 = (await _0xb4d3x9[_0x3d95[32]](_0xb4d3xd))[_0x3d95[33]];
        console[_0x3d95[23]](_0xb4d3x15);
        if (_0xb4d3x8[0] == _0x3d95[33]) {
            if (_0xb4d3x8[1] == _0x3d95[36]) {
                let _0xb4d3x11 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x11);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[38] + _0xb4d3x11 + _0x3d95[52] + _0xb4d3x14, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](_0xb4d3xd, options = {
                            exp: _0xb4d3xf + parseInt(_0xb4d3x11)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[41]) {
                let _0xb4d3x11 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x11);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[42] + _0xb4d3x11 + _0x3d95[52] + _0xb4d3x14, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](_0xb4d3xd, options = {
                            exp: _0xb4d3xf - parseInt(_0xb4d3x11)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[43]) {
                let _0xb4d3x11 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x11);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[53] + _0xb4d3x14 + _0x3d95[54] + _0xb4d3x11, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](_0xb4d3xd, options = {
                            exp: parseInt(_0xb4d3x11)
                        })
                    }, messageID)
                }
            }
        };
        if (_0xb4d3x8[0] == _0x3d95[34]) {
            if (!_0xb4d3x8[1]) {
                _0xb4d3x6[_0x3d95[29]](_0x3d95[45] + _0xb4d3x10 + _0x3d95[46], threadID, messageID)
            };
            if (_0xb4d3x8[1] == _0x3d95[36]) {
                let _0xb4d3x12 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x12);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[38] + _0xb4d3x12 + _0x3d95[55] + _0xb4d3x14, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](_0xb4d3xd, options = {
                            money: _0xb4d3x10 + parseInt(_0xb4d3x12)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[41]) {
                let _0xb4d3x12 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x12);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[42] + _0xb4d3x12 + _0x3d95[56] + _0xb4d3x14, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](_0xb4d3xd, options = {
                            money: _0xb4d3x10 - parseInt(_0xb4d3x12)
                        })
                    }, messageID)
                }
            };
            if (_0xb4d3x8[1] == _0x3d95[43]) {
                let _0xb4d3x12 = _0xb4d3x8[2];
                console[_0x3d95[23]](_0xb4d3x12);
                if (!_0xb4d3x8[2]) {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[37], threadID, messageID)
                } else {
                    _0xb4d3x6[_0x3d95[29]](_0x3d95[57] + _0xb4d3x14 + _0x3d95[54] + _0xb4d3x12, threadID, () => {
                        return _0xb4d3x9[_0x3d95[40]](_0xb4d3xd, options = {
                            money: parseInt(_0xb4d3x12)
                        })
                    }, messageID)
                }
            }
        }
    }
}
