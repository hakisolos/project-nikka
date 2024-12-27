//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0F5MTduQXFVaEVRMmZKQ0lKeHRmY2ltS01wam5hMTBMT2NhQ0N3QlIyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVJhRFpIM0czOGRGaUpBT1RRNmV0dmEvNjM1Z0xxbUpxc3p1OHNGc05Ybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySC9xc0JSc0FaRlVLQ2hZZE1WRnlNRmo0SDJNdVpZMXIzNUJBb0FDWldnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZGxmamYvKzhST0Y2d2FwYm0yRUZFOWxxZjU0ZUx1VUlyT09rZkRjbVE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREMWhHN3FsVUl3Vy9DU0FUZXVtWGtpRVdvcHpXODRyMGM4RnNqVkRxSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJrMENtNkxqMU1aR1c3blUyb01TZ1NnUnc2S290L1RjZFlWVStaeE53SHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1TSFU2ZFdaUi9jMU1uN1RNTGMwR3ZMRkdRa0RDQzRzVkpUOUVVVVdXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1drNjRKZm0vSldydFVMN1ptUVVsNklPTlNWZFpHYTI0WWFCMU5pZXhEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVsSmZ1ZGhHYUQreVd5bjhDdStZbDBTL3ZvM1lRcEVxSVlQYncxVGRQZVcvSmV0NVVDRi9FUTlhR2RMc0xTdUhQWFpaWFo0eUxKTWFFV21uTkFNMWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJPWFdQL25DdU05REQydUU5NzdWTGUyQUhXN3hIdnlVZVZPQVBJdDJGUlNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGWEVtSXM1OVR6ZUFZUUZkdndMbHd3IiwicGhvbmVJZCI6IjQyZDQwZDZiLTBkOTQtNDc4NS05MTAzLWU4ZTRiYzM1OWZlOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0bGVCTmtoV2EzWDhKNWxYb0lIZUhIZjdBeUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXRXUXJIdFVMUHpXQVBlZmp1dDZWSWhBanJjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZLWDJLNkE3IiwibWUiOnsiaWQiOiIyMzQ5MTEyMTcxMDc4Ojg2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdnpbwnZ6T8J2emfCdnpgg8J2ZjvCdnqLwnZ6SIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdUFub3NGRVBqR3ZMc0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVVGFtOXlpdFRKQ3F5bTJuOVNWM0FqZDN5aDVLaHEwbjJyUE15RVJNWFVZPSIsImFjY291bnRTaWduYXR1cmUiOiI0enVMT1hEOUcwVTVqSGtDTzhtK2ZWZmJyaWl6NFpmOHA0eUg4aFRZSEN0d0tYdVlMT1JTelp4WDhPaFdYUVdsM2pjd1BYbWN1WDB6U0ZDcTlxcENCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2tyZmtnd1ZjbXlyTitqdzBtK0E1c2N4WHYvMktvdFc5Wm94bC9FVWhYaGtKeTdnaWhYNUJUY1h1dnM3endEQzcvMUpVQjZHZmRNa1pJMXdDM25Pamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyMTcxMDc4Ojg2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZFMnB2Y29yVXlRcXNwdHAvVWxkd0kzZDhvZVNvYXRKOXF6ek1oRVRGMUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzMzY4MzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnNwIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
