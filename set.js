
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU226jSBD9l361NXZzBynSAr5hx9gEB4xX88ClgTZ3GjB45H9fkUwm87A7yvLUVJeqTp06p3+AvMAE7dAApB+grHHnNmg8NkOJgASUNgxRDaYgcBsXSKBYslWxodW57LUst7Mdr8aH4LRdXG3SU3h2nMxf2rWQGJviCTymoGy9FPt/KCjcDdqCKDArdnFnLO1gyPOL3wty+/p8mFfrqFYjJjI5jo6ewGOs6OIa59GyjFGGajfdoeHo4vpr8O313cAO6+n1xtUWJDQiyFiGLoiz85CWlnbB+NDL8uJKL78G/2We72ZVX/SGqkCSsvx5posBb/p3jIdFqRiFdUx0EU4M/x0+wVGOAi1AeYOb4cu8+4s29NdqtZJR8XIVwo1NJbPt4TxzRHWjEWsrw25228KS+iLv+rnwI7bcOxmpUjqzl+ah68KtIip4A0P7lFT6mj94VLVgfgd+rD+0kvwf3vcrGiqK5619oduaJqU0GcnkMwpXSQf5jIvVmgk077jLtK/BzzlD4G+K8PpCGEM8Uxt7CMTOpaGWlVjcySnc69vSWggp+YTvNm39J5RoRoVKmW63OyaG1Oms20bRK6YWqzHyKt1cL9ClNoalbHXcelbJKV3FQ7qoKV5f70Q77vab++2ADoUSzPtdzIo9UrH89DZRggYtABJ8TEGNIkya2m1wkY8xkZ8CN+hM5NeoeWMXkIu6dH392eB8dpJQxeky84hXHQ/zSRoWC/W+ex54MaUTe/8EpqCsCx8RgoINJk1RD3tEiBshAqS/v09BjvrmfW9jNxpOQYhr0rzmbZkWbvCx1I9L1/eLNm/MIffV8YBqIM0/w6hpcB6RkcY2d2s/xh1SY7chQArdlKBfA6IaBUBq6hb9Mq1aBCPvS0eTrWduC6Yge9sHDoAERCiytAgFCjKCJFJ/kW+3saxblt9y1IApSN/SBIFnaAh5joYsx46JY/zxC+BYL0CNi1MCJKAeNmTWaKvl1usjsl+v5WUkq5EMPgf6EMY780nM7fitxS4sbsLYZmuyccwN5013XtJsf4XRzerSdnOPh+XTvxQBEjicntND0OMrZs4FxTjr1mbU660y4OS0WtyoqzOklF3Ityt9ZpKKaP1FjWzuYnK7lWu+FIduWecJ3CtYhfPeQHo1h6rxNHYLUId99HszMVAZ75hPVjfb1rtOXsW9JZ6ckHaG4Hw/RcIzywcWppU8eXGzdD+fn1cXLYZnMUI0m683PLX3r44w7O/rbN/frq/LMvop2TfLpD+fKvympnFV42+I0ZvzczdDX1ndO/BRYfPH9LcaP9+S//CjctEQbgcLGRB17Sqpk9ZxEEl7Hvb6xHdEZ7/yWC8WGD8Gj8f3KShTtwmLOgMScPOgLnAApqAu2lGyWh4Wf2imyq/awnifPHVJI3/a4IQzRBo3K4EEeRZCbhz1PetYF+XGJTGQAB06N3U3anqQy9Js3ObDVUAevz2Vgsc/rcUp7nAHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "fιяѕт ωαт¢нє∂ ву χєиσмσяρн🍃🤍", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "917736321747", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "᥊ꫀꪀꪮꪑꪮ𝘳ρꫝ🍃🤍", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐱𝐞𝐧𝐨𝐦𝐨𝐫𝐩𝐡", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "᥊ꫀꪀꪮꪑꪮ𝘳ρꫝ🍃🤍", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "᥊ꫀꪀꪮꪑꪮ𝘳ρꫝ🍃🤍", //  don't change 
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
