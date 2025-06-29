
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGEUuihEdsYCIeEdFhI19KKGAkqtVBYoT/vsG9vT0POzO9vJUZGVknjx5Tn0HeYEpWqAGjL+DkuAaMtQeWVMiMAZqFYaIgC4IIINgDKrNYBYGAlvOpDqU3WVeDy3cHJxY2/aP1nYnLb2D6jmumVhv4NkFZXVOsf+bgr0yoA/ql6GzyCqP23lZpFr4eMkJv114j+mGlRMr5QcK77+BZ1sRYoLzSC9jlCEC0wVqthCTr8HfL/eTXSac4NWvotzae+dauGojK9KXnXmxhh3jcon2czXNha/BV4Krd4tOW06eSqQRdenq7iTv9FhTgo9z2dn3+jG3HaihY77DpzjKUWAGKGeYNV/m/Tqb8/lmaF64khdVnKRB/1gl6DiYdi4ulNZJg7aPfchvDP1rwGfhzazcTk+sTGuwFU8pLe4q5uyRtVVHvGkb/IxfBk28bIRfgW/Jh1aS/8M7nh0ardbIvdmb9Skolpt1FRJPyhYbdDCX286sQhk/15ltfw0+L2vi1Z3oG2RfKCrVSFopd1tMrpZ163dIXmjWZnOA1L7QT/iQVeR3KA0ZXkwpOAi7kzK97zScbdbNWoLmwdNualkYdU/C/VUeo8E+qyU/3t2dILbOYqeSbrWtHB73RyPNDcqpPTnrz6kjl9rt7TVRghozAGPu2QUERZgyAhku8jYmdgEM6j3yCWIvckFQZNOJnuPzYeGlbHU+1tXFO8jCecSvV0KTx1aiH/sTfm5bb6ALSlL4iFIUzDBlBWlWiFIYIQrGf/7VBTm6s/e1tc14rgtCTCiz86pMCxh87PTjEvp+UeVs3+S+1h4QAeP+ZxgxhvOItixWOSR+jGukxZBRMA5hStHP+RBBARgzUqGfntWKoKV9KKw0x1NOoAuy1zpwAMZA5mSRl7nRgBNGY5n/g367tWVhWX7LEQNdkL7SRqOhwHPcUOI5URLbxDb+/AmwrRcgBnFKwRhomyXtMXOqr66jaLQyDEWPFC1SwOdAH7p4Zz6JpcVwfhQnR6kjOPtqL8ax1Jxm9UnnxfuFi27HOq1mj7jR3/6hCBiDtXjP44M27zXrpIaYF2PDkhnPrRdMXFVLODWOhbBcX9KpvZ73eLtwss7ltBDPunoTbNdR+lSpvURwnNrOCwvHmzCZKG9ttwDV2Ee/NjMyo389qSfP9iNLd4N+QZAh870kJurNOZcFC03leJi6YmCfstKhYs8YDZr1KYIqP8VkFcXJzV44PbGqokI/MLiVFOtdsS/HpD9eKvxSU7uq9jfE6GX8HLYL/O/VvQNvFdZ/dn+p8eMp+Rc7qp6JcNUckcWhupomJKlcF9H0PuTu647vyu5qehbP8UjwY/B8/tUFZQpZWJAMjAHMA1LgAHQBKapWsmYeFr9ppim2OfkxeQopUz5tcMAZogxmJRhzQ5HjhqMRL7xnbUlRziCN2xcpdG/aotV0o5TlnkH24SqgtN9qkILn32v/1l9vBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "fιяѕт ωαт¢нє∂ ву χєиσмσяρн🍃🤍", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "919539182148", // Only 1 owner Number Here, others Add to sudo numbers...
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
