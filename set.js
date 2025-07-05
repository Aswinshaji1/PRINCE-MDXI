
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61V266bRhT9l3mNlcPF3CwdKVx8AUxsjLGxqz6MYcDYXGcG2zjyb1RqpfQb+mn5hAqfc5K0aZNTqUhIw8Dsvdbeay8+gKJMCbJRCwYfQIXTE6SoW9K2QmAAtCaOEQY9EEEKwQDoGitlU+jEWFoU5tid73ODL+TQ1EZLbnjlq4tXjHzTIUfyCG49UDW7LA2/EzAZJWWdpTBjkXhxy9WRuKG7VbZuG/N0ha8HUS3C5VZj1v1HcOsiwhSnRTKs9ihHGGY2aucwxa+DD7WaGQ83taVtrHOyJ951ut7mbJMwUxqQwFLDeX9ns8rYd14Hf78ysCXXV6M/EhT9MCoXOjN5sF2Gu070uWTw1oIy1nXDXJIn+CRNChSZESpoSttX171vraX8QQ/EvVieQxgyZ0uJJjNeOWxrjqrvjYqrjrlxOYw3rwPOu1dtt0csjiJPy9xN4BvNEMN24hh8o/q1fV7X522mZS7zNfA5ftHK8b/UXVXPjbaWfXS03+CrXCUr0cdTz26HYXN5H5nkHJkVs10lQfg6+G3OK2044WU5olW18Uf6EWv9efawGmurYLrPcjqromp1VJ0v8CFt8PdQXibu0d+N3kzV7I2tsHbcqGqUGW09g1dSrRlVIZKEtNrh+8f4kB/PmXt1ZCyypohFTyjtEMnlrJb9ivMjeqm9k0DS8+Od0RG1ZgQG7K0HMEpSQjGkaVnc9xSmB2B08lCIEb2XF6gnrYjHF8OKObiRhOC6mKOHyzietsiz65izAkHzJkKfnsxH0AMVLkNECIomKaElbh1ECEwQAYOf7p3qSGOUlxRZaQQGQGFlRlZEiREY9h15e95DSmBVvS0QBT0Q4zJ3EBhQ3KAeuB8Y8YKm8yovM0PDkA1FFiRD1lTdGEmCLhvDjmL+lHSZ5ohQmFdgwEoCK8qSILO33v+DQ+sPRZ2TFEYReW0osJzIsExfYVlJZTReYH6I4+ceKNCFPum4qz7P9kCcYkL9oqmyEkYvIn95CcOwbArqtUWodwuEweCrbURpWiSkY9YUEIf79IT0jgcYxDAj6HPDEUbRC5dnE9PLqNPhaKGPXd9cgw57F+ib2gy4b6tTwO5j8Onjr398+vjbL8/376AHsvt5ThQVvgshcCzHKwPuXbd/+4y8SxQhCtOMdMY+Hzf7KZkMLcMoiTMeq2ai6okKvjB9maAnhbpm5V3wqnINfqOWiwdoSc4s4LID3EeTo3U6TJVlRpZsEtwV+vcgYABqNVgPL2Gb4PB88QJxjR2WU73rA3SqZlscVEuultw8rTPoK/VsxV3avLmcsuHCOJ7VGVoFp1oSFvMzH3KhznunlWcZ7mOXLUKnNER/STZrDB0/LERJtoK96k31jWNL9EqEdlHtZvURZ6v17mJIrN+YmcwPZ/s5KuVMRdtotZw7HJMdggOfRlYxDKAVr1uyTJ5n++4t2bOnp89Tl94f4xTdLfK5WT/q6RPuTnnMrfdViGfP/Rff0nzd9glkoa8qnGoPYy5FVyNTqg1XBgtB3/XbB1/YDZXNqAW3bgSqDNK4xDkYAJLvIOgBXDadjs0iLr/7+zdNXX1inUFC1S+z8Q/jJslPX81xWU0g2XeidEb23O2E3qpV5VFIX0YNqN1liwm4/QkKvS3SlQgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "fιяѕт ωαт¢нє∂ ву χєиσмσяρн🍃🤍", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "919539182148", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "ꪖꪑꪑꪊ🍃🤍", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐚𝐦𝐦𝐮", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "ꪖꪑꪑꪊ🍃🤍", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "᥊ꫀꪀꪮꪑꪮ𝘳ρꫝ🍃🤍", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2mr0f6.jpg", //  don't change 
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
