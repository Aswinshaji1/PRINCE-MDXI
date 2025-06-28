
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGEHuRnTEgojSNCrecWMfSiigAAGrChQn/PcN7Onpedid7eWpyMrIPHnynPoOihJT5KAWjL6DiuAGMtQdWVshMAJGHUWIgD4IIYNgBJxZs99f5z1uZhwC2iyk4THFxbxqrxt2ud0rmodyNb0v+AP3Ah59UNWnHAe/Kai91YcAH4szueGTGKvmQITpxTSztDd1ivwtQMbNi+Etmtkv4NFVhJjgIp5UCTojAnMHtUuIydfgr80W6WifIMVYm+d8aOjXatZA5W06DNBxM0C25vFbiasy8Wvwh/IBTXwVD/jedT6uudxzk9M22h+3Zdg2wa3eDvfc9HVwX3nv8CmOCxTaISoYZu2XeceT2jBkz/avUjLwKkspKRXxHfmO3rPrpQHX1NusrnePD74G3B4LWllQU52WVCJcPKv3lpKHORG0AUzTeFMkWsk1Oy/NfgW+JB9ayf4P73Scns5ZJYtzPjPECQpzzfb2ohDbNT/XuFDBx+iaRWp4yL4G3/I8tRlwN8lUXZhkbbkllid4Z3/vm0tfcEW3mCJuuLVz8RM+ZDX5HcoqKJ3LZjbZFlXlZ+063m1MjXDNtDV3FqUkuqTSekz1JHHXWQBdYX5Je2+8bXozRSnnUqRqccNl+UnX/TnnapGXKab38pwoQ60dghH/6AOCYkwZgQyXRRcTh30Aw2aNAoLYk12wvDInOgvYyqVks4iXe2GzdZBZ3zXmavfJ0RCDsbzZLJK7+gL6oCJlgChF4QxTVpLWRZTCGFEw+vOvPijQjb3vresm8H0QYULZtqirvIThx1I/LmEQlHXB1m0RjLsDImDEfYYRY7iIaUdjXUASJLhB4wQyCkYRzCn6OSAiKAQjRmr007TjMux4P+6G7lqWPdAH5+c+cNi9BLwmCRqvDnlRHWn8H/TbtSsLq+pbgRjog/yZpqqKKPC8Igu8JEtdYhd//ATY1QsRgzinYATGC5MOmG1N5o4Qu+50qk9ifRzr4HOgD2G8M58lsqO87iRzJ/fE/bpeS0kit4dZc5gI0i3l4+uuyevZPWknL/9QBIwAdzl591Utsy1lQXZu9KU4NaeJcz9ahqrsYks1/Jzuh4p13vaqrcYOp7uavI21+d5qZqvXVZ4mBydVOF4aizd1s7qEnnF96bqFqMEB+rVZps4rejNahzcWlp9aG9O+W7K1Wl0CLK3b8nLdLLV7QPLqojnK0FiZNTmf0tdSmr8mqyyQRI1vpMUp5rOLqyvqnp0MU3+X7NMy+Y+nCj/V1K2q+40wejq/gN0C/3t178A7hXGP/i81frwl/+JH42gjXLc75PGoqa2MZLXvI5rfFP427wW+5rvWSTolqhgk4PH4qw+qHLKoJGcwArAISYlD0AekrDvJ2kVU/qbZWN/aH2bNIWX6pw02+Iwog+cKjHhF4vmhxkn8e9aSlNUM0gSMgBD517HTabrVq2rNIPtwFdC7zx0y8PgbJ/dBUnAHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "917736321747", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "᥊ꫀꪀꪮꪑꪮ𝘳ρꫝ🍃🤍", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐱𝐞𝐧𝐨𝐦𝐨𝐫𝐩𝐡", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "X-BOT", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "X-BOT", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://cdn.vioo.my.id/v/HTppsn.png", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || " powered by prince",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/kolkata", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
