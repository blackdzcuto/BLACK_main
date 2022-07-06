var _0x9d4f = ["child_process", "fs-extra", "http", "axios", "semver", "./utils/log", "chalk", "chalkercli", "random", "floor", "cfonts", "OK", "text/plain", "writeHead", "\x58\x69\x6E\x20\x63\x68\xE0\x6F\x20\x63\u1EAD\x75\x20\x63\x68\u1EE7\x20\x4E\x67\x75\x79\u1EC5\x6E\x20\x54\x68\x61\x6E\x68\x20\x4D\xE0\x69\x2E\x20\x57\x65\x6C\x63\x6F\x6D\x65\x20\x74\x6F\x20\x62\x61\x63\x6B", "write", "end", "createServer", "port", "env", "listen", "\x48\u1EC7\x20\x74\x68\u1ED1\x6E\x67\x20\x42\x4F\x54\x20\x42\x4C\x41\x43\x4B\x20\u0111\u01B0\u1EE3\x63\x20\x72\x65\x6D\x61\x6B\x65\x20\x74\u1EEB\x20\x4D\x69\x72\x61\x69\x76\x32\x20\x64\x6F\x20\x42\x4C\x41\x43\x4B\x20\x64\x75\x79\x20\x74\x72\xEC\x20\x76\xE0\x20\x70\x68\xE1\x74\x20\x74\x72\x69\u1EC3\x6E", "🛠 VN", "The BOT BLACK system is a remake of Miraiv2 maintained and developed by BLACK", "🛠 Donate momo: 0974052602", "DONATE", "stop", "[=== 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ===]", "rainbow", "render", "frame", "log", "BOT BLACK SUCCESSFULLY INITIALIZED", "BOT BLACK", "Welcome back to Bot BLACK", "BOT BLACK PROJECT start running...", "Checking the version...", "UPDATE", "Your version is the latest!", "BOT BLACK STARTING", "", "node", "--trace-warnings", "--async-stack-traces", "mirai.js", "inherit", "close", "codeExit", "replace", "BOT RESTARTING!!!", "indexOf", "Bot has been activated please wait a moment!!!", "on", "error", "An error occurred: ", "stringify", "Starting", "name", "data", "NAME", "version: ", "version", "VERSION", "description", "DESCRIPTION", "then", "https://raw.githubusercontent.com/BLACKDZCUTO/BLACK_main/mainV2/package.json", "get", "BLACK", "block", "center", "red", "magenta", "say", "Bot Messenger Created By BLACK", "console", "[=== 𝐀𝐂𝐓𝐈𝐕𝐄 𝐁𝐎𝐓 𝐁𝐋𝐀𝐂𝐊 ===]", "Bắt đầu load source code", "LOAD", "path", "/modules/commands/banking/banking.json", "./utils/log.js", "./modules/commands/banking/banking.json", "senderID", "find", "money", "\u0110\x41\x4E\x47\x20\x58\u1EEC\x20\x4C\xCD\x20\x42\x41\x4E\x4B", "loader"];
var _0x9063 = [_0x9d4f[0], _0x9d4f[1], _0x9d4f[2], _0x9d4f[3], _0x9d4f[4], _0x9d4f[5], _0x9d4f[6], _0x9d4f[7], _0x9d4f[8], _0x9d4f[9], _0x9d4f[10], _0x9d4f[11], _0x9d4f[12], _0x9d4f[13], _0x9d4f[14], _0x9d4f[15], _0x9d4f[16], _0x9d4f[17], _0x9d4f[18], _0x9d4f[19], _0x9d4f[20], _0x9d4f[21], _0x9d4f[22], _0x9d4f[23], _0x9d4f[24], _0x9d4f[25], _0x9d4f[26], _0x9d4f[27], _0x9d4f[28], _0x9d4f[29], _0x9d4f[30], _0x9d4f[31], _0x9d4f[32], _0x9d4f[33], _0x9d4f[34], _0x9d4f[35], _0x9d4f[36], _0x9d4f[37], _0x9d4f[38], _0x9d4f[39], _0x9d4f[40], _0x9d4f[41], _0x9d4f[42], _0x9d4f[43], _0x9d4f[44], _0x9d4f[45], _0x9d4f[46], _0x9d4f[47], _0x9d4f[48], _0x9d4f[49], _0x9d4f[50], _0x9d4f[51], _0x9d4f[52], _0x9d4f[53], _0x9d4f[54], _0x9d4f[55], _0x9d4f[56], _0x9d4f[57], _0x9d4f[58], _0x9d4f[59], _0x9d4f[60], _0x9d4f[61], _0x9d4f[62], _0x9d4f[63], _0x9d4f[64], _0x9d4f[65], _0x9d4f[66], _0x9d4f[67], _0x9d4f[68], _0x9d4f[69], _0x9d4f[70], _0x9d4f[71], _0x9d4f[72], _0x9d4f[73], _0x9d4f[74], _0x9d4f[75], _0x9d4f[76], _0x9d4f[77], _0x9d4f[78], _0x9d4f[79], _0x9d4f[80], _0x9d4f[81], _0x9d4f[82], _0x9d4f[83], _0x9d4f[84], _0x9d4f[85], _0x9d4f[86], _0x9d4f[87]];
const {
    spawn
} = require(_0x9063[0]);
const {
    readFileSync
} = require(_0x9063[1]);
const http = require(_0x9063[2]);
const axios = require(_0x9063[3]);
const semver = require(_0x9063[4]);
const logger = require(_0x9063[5]);
const chalk = require(_0x9063[6]);
const chalkercli = require(_0x9063[7]);
var randomColor = Math[_0x9063[9]](Math[_0x9063[8]]() * 16777215).toString(16);
const CFonts = require(_0x9063[10]);
const dashboard = http[_0x9063[17]](function (_0xc8a8xb, _0xc8a8xc) {
    _0xc8a8xc[_0x9063[13]](200, _0x9063[11], {
        "Content-Type": _0x9063[12]
    });
    _0xc8a8xc[_0x9063[15]](_0x9063[14]);
    _0xc8a8xc[_0x9063[16]]()
});
dashboard[_0x9063[20]](process[_0x9063[19]][_0x9063[18]] || 0);
logger(_0x9063[21], _0x9063[22]);
logger(_0x9063[23], _0x9063[22]);
logger(_0x9063[24], _0x9063[25]);
const rainbow = chalkercli[_0x9063[28]](_0x9063[27])[_0x9063[26]]();
rainbow[_0x9063[29]]();
const frame = rainbow[_0x9063[30]]();
console[_0x9063[31]](frame);
logger(_0x9063[32], _0x9063[33]);
logger(_0x9063[34], _0x9063[33]);
logger(_0x9063[35], _0x9063[33]);
logger(_0x9063[36], _0x9063[37]);
logger(_0x9063[38], _0x9063[37]);

function startBot(_0xc8a8x10) {
    (_0xc8a8x10) ? logger(_0xc8a8x10, _0x9063[39]): _0x9063[40];
    const _0xc8a8x11 = spawn(_0x9063[41], [_0x9063[42], _0x9063[43], _0x9063[44]], {
        cwd: __dirname,
        stdio: _0x9063[45],
        shell: true
    });
    _0xc8a8x11[_0x9063[52]](_0x9063[46], async (_0xc8a8x12) => {
        var _0xc8a8x13 = _0x9063[47][_0x9063[48]](_0x9063[47], _0xc8a8x12);
        if (_0xc8a8x12 == 1) {
            return startBot(_0x9063[49])
        } else {
            if (_0xc8a8x13[_0x9063[50]](2) == 0) {
                await new Promise((_0xc8a8x14) => {
                    return setTimeout(_0xc8a8x14, parseInt(_0xc8a8x13[_0x9063[48]](2, _0x9063[40])) * 1000)
                });
                startBot(_0x9063[51])
            } else {
                return
            }
        }
    });
    _0xc8a8x11[_0x9063[52]](_0x9063[53], function (_0xc8a8x15) {
        logger(_0x9063[54] + JSON[_0x9063[55]](_0xc8a8x15), _0x9063[56])
    })
}
axios[_0x9063[67]](_0x9063[66])[_0x9063[65]]((_0xc8a8xc) => {
    logger(_0xc8a8xc[_0x9063[58]][_0x9063[57]], _0x9063[59]);
    logger(_0x9063[60] + _0xc8a8xc[_0x9063[58]][_0x9063[61]], _0x9063[62]);
    logger(_0xc8a8xc[_0x9063[58]][_0x9063[63]], _0x9063[64])
});
setTimeout(async function () {
    CFonts[_0x9063[73]](_0x9063[68], {
        font: _0x9063[69],
        align: _0x9063[70],
        gradient: [_0x9063[71], _0x9063[72]]
    });
    CFonts[_0x9063[73]](`${_0x9d4f[40]}${_0x9063[74]}${_0x9d4f[40]}`, {
        font: _0x9063[75],
        align: _0x9063[70],
        gradient: [_0x9063[71], _0x9063[72]]
    });
    const rainbow = chalkercli[_0x9063[28]](_0x9063[76])[_0x9063[26]]();
    rainbow[_0x9063[29]]();
    const frame = rainbow[_0x9063[30]]();
    console[_0x9063[31]](frame);
    logger(_0x9063[77], _0x9063[78]);
    startBot()
}, 70);
async function bank() {
    const {
        readdirSync,
        readFileSync,
        writeFileSync,
        existsSync,
        copySync
    } = require(_0x9063[1]);
    const {
        join,
        resolve
    } = require(_0x9063[79]);
    const _0xc8a8x17 = join(__dirname + _0x9063[80]);
    const logger = require(_0x9063[81]);
    const _0xc8a8x18 = require(_0x9063[82]);
    const _0xc8a8x19 = 60 * 60;
    const _0xc8a8x1a = 0.01;
    if (_0xc8a8x18[0] == undefined) {
        return
    };
    while (true) {
        for (let _0xc8a8x1b of _0xc8a8x18) {
            var _0xc8a8x1c = _0xc8a8x18[_0x9063[84]]((_0xc8a8x1d) => {
                return _0xc8a8x1d[_0x9063[83]] == _0xc8a8x1b[_0x9063[83]]
            });
            var _0xc8a8x1e = _0xc8a8x1c[_0x9063[85]];
            _0xc8a8x1c[_0x9063[85]] = (parseInt(_0xc8a8x1e + _0xc8a8x1e * _0xc8a8x1a));
            writeFileSync(_0xc8a8x17, JSON[_0x9063[55]](_0xc8a8x18, null, 2))
        };
        logger[_0x9063[87]](_0x9063[86]);
        await new Promise((_0xc8a8x14) => {
            return setTimeout(_0xc8a8x14, _0xc8a8x19 * 1000)
        })
    }
}
bank()
