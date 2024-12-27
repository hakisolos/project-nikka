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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BBdEZpai9sVFBLcXpPS0hNV1FnaUIyMTB1cXRzOUk4UWxqbWJ3TUoxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDZyTzd3OTRzUzdHZlA2MTg4dWd3TklINEVBRHc1cU14Vlh4WkwwT1JoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRjl4cWZtMWlLT1UvRGlPWnowTGszMERkemRwM1Y4U01tMzVYTjRRcTA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsd0l6RkcrcFAzQy8yRFJjd2V6eVUxV0dIMkYvSlZYYUdPZWVQWXpxVlNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNS2lTeFFUZGwybVJhOHlEVERTUkwyVXhyQ0FBMlhXMWc2RU5VRm1Qbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBnRFEyQXhucnM4cmM4U3hDMUhwTzhPZnVKVktWeEFhaTVVcEFFOUp4Q0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9PRmxQN0I3T0RNMmd6cGhMb0Z0K1ZqalV6aXhQY0JtNFF1QnRpWnZtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2pNTFdQU0Zwd0QreURLRE1DcTd6NjZ0WUFURmxnWlR5Q244R0xuUVNHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU0ZjArTGxnVEY4Z25IbWpqVkJuTUdpWE8yL2xxKzhZNzh6cnRyMTV1RTUyc3NOUmJhTHJIVDRjSUMyeGxCa0kvWWZJWVp2NWJTMVpxQ3F5TEVBdUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiI1K21RYjUzSXh6K0NRZmJIUnR4OEtoNURHZ0FnbFd2UVF4YkVlWURvNzVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXUkYyS3p1X1MxcS1DbTZXV19pOEFBIiwicGhvbmVJZCI6IjQzMDA1ZGNjLWM0NGEtNDM4Ny04Yzk5LTM0MTYyNjYxMmEzNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXNWFrTVVqcG5ZaTFkVVZIQmIxMWxyUkc5K3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVhqdXliSzlmSlRVVndENno1MHhNMmpJQWNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxRR0E4MlBFIiwibWUiOnsiaWQiOiIyMzQ5MTEyMTcxMDc4Ojg3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdnpbwnZ6T8J2emfCdnpgg8J2ZjvCdnqLwnZ6SIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeUFub3NGRVBQTHZMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVVGFtOXlpdFRKQ3F5bTJuOVNWM0FqZDN5aDVLaHEwbjJyUE15RVJNWFVZPSIsImFjY291bnRTaWduYXR1cmUiOiJrUGp6MkczVktoaysySW84T09nR05WMGRHekg2Wk1Maksra3lKdnZLU2k1KzQxSlMzUVlXeitScFhia20vVitGdE04UndJUDdnT2NZdGYvdHBTNWlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVE1SFdoZGN2MHk0aVVRTGFFbGZuZ1BMOXBiL1BUZ2xSdVZyeHB6aVJjYmNXdFRFc0MwdWExNnZ6WU5QdkVienVSQ2YxWG1BQW9HcFBTT3lBRFpOQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyMTcxMDc4Ojg3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZFMnB2Y29yVXlRcXNwdHAvVWxkd0kzZDhvZVNvYXRKOXF6ek1oRVRGMUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzMzc0NzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnN6In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "7.0.0",
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
