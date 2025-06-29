
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUy46jRhT9l9raGvMwGCO1NEBjjGnc+IExRLMooAyYp6Ew4JH/oddRWooiZZtv60+IcE9PzyKZdGpVL5177j3n3q8gy6MKaagD/FdQlNEZYtRvcVcgwAOxPhxQCYbAhxgCHtgG3rPRlJyvZTirHxVhsKBldmB5pzQkDPM45gZSi2jaJeQ7cB2ConaTyPsJYLYTnTUynFYLFbezpQRV7P1RVufY4zofU/FJ1BV5JDJkcweuPSKMyigL5CJEKSphoqHOgFH5MfqBUvpm4is0KzejoyJCLZhJG4c7VXNJuKxaOJm6ubZql1b+MfqPu2i+mj46Hu21l0EyVoy43BflumnUUA0nma87O3I5nsI58Uq/ioIM+aqPMhzh7sN1h3pg7rtLO0gV/36iCojjBk7p+UEs23Krpe6pcxyDjNrsg8RbAXcNvR/FROq6B7izDhIxqTQ7FJb5wLJOzt5QaEvb+jH3I3GjfPNK/H/qbsnRoqDayvVyPd/LmTYbJeEupXPbtHVUX5bwIDzu6laN1Y/RLwfsaLqPtzEylp2wMmOdqto6bOeZmZsKd6rQei6Ti00r6u/0Ia7Ln7FkmpqaJyhpGFVtzWQGdSaxzs1c2fsNLQY6fXIKQSaLwVawpfwgtGfDWSFR2GniQnBYnckf76Um2N4PTpJuipVNM2uhubtlFKNO9QFPXoegREFU4RLiKM9udzQ7BNA/b5BXInwrL4hN2r2Ptu1CnvuOXbqtX+JjpRKC7I/HIVpvTgvvaFmL6GzfgSEoytxDVYX8eVThvOx0VFUwQBXgf/kyBBlq8atwfTiaHIJDVFbYzOoiyaH/purbI/S8vM7wpss8qd+gEvDE+zXCOMqCqq9jncHSC6MzkkKIK8AfYFKh7xmiEvmAx2WNvnetlPt94R8oy5wtbBkMQXoTJPIBD6bkhCCpMUNNJxRPMZ+rT00PC4viU4YwGIIM9r/By/PTny/PT3+9PD/9/vL89MfL89NvL89Pv4IhSG5AJMFNKYbi2DExJsfjHqt/uH7PoQ/pIwyjpAI8kJZsSYxiUTYkMeB0RRHkQJACAbzn/GaeV3GspFta7OMsRZw40GmOs+sdGmfyvZwr1uYhXxUtUz+Ylrpe3f0DCOAB1TB5qhlY0zdwdpRdTzhaXEDPUoGSG27JzY7yUabRTh6flK08QYPLQaOEyYnZ57K78rxsmbES3HB7hbBXHrsVdyUr9U4bAh+dIw/9GCytR6Y979ajBZPnIbEUL8fZZT9bFqioRknChHCcbskHLTtYqnbhYPQ4T5Ybdaa0woW82GqsNu5SpCnNU3YXHLIxpcbi6tXWt7ZKvo2z6Ga4Xs3+eIjQbTp8U+0/1X0l3puQuA5/wPg2b/6lZ8Vd4R139TF0srNwOC5HhvKQ7OtFK7SamMQRK2seciNyFskmuF6/DEGRQHzIyxTwoEpdCIagzOve0mp2yH8SSRJV9S3tBFZYeG+TbZSiCsO0ADw5YUhyQtIU8frLKPNiDqsQ8GDsrA1203u+E4pigyF+6zog3FYTgOvfrTwMEpEHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
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
