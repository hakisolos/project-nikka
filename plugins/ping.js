const { smd } = require("../lib");
const { runtime } = require("../lib"); // Assuming you have a runtime function for uptime

smd(
  {
    pattern: "ping",
    desc: "Check the bot's latency",
    react: "⏳️",
    category: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      console.log("Ping command triggered."); // Debugging step

      // Send "Checking ping..." and record the start time
      const start = Date.now();
      await m.send("Checking ping...");
      console.log("Checking ping... sent."); // Debugging step

      // Calculate latency
      const latency = Date.now() - start;
      console.log("Latency calculated:", latency); // Debugging step

      // Reply with "Pong" and latency
      await m.reply(`Pong! Latency: ${latency}ms`);
      console.log("Pong message sent."); // Debugging step

      // React with a checkmark
      await m.react("✅️");
      console.log("Reaction added."); // Debugging step
    } catch (e) {
      console.error("Error in ping command:", e); // Debugging step
      m.error(`${e}\n\nCommand: ping`, e, false);
    }
  }
);

smd({
   cmdname: "use",
   desc: "Counts the commands used by users after starting bot?",
   category: "misc",
   filename: __filename
 }, async _0x297641 => {
   try {
     let _0x38bc51 = [];
     const _0x2dd06e = {};
     commandHistory.forEach(({
       user: _0x530cb4,
       command: _0x1c35dd
     }) => {
       if (!_0x2dd06e[_0x530cb4]) {
         _0x2dd06e[_0x530cb4] = {
           commands: {},
           count: 0
         };
         _0x38bc51.push(_0x530cb4);
       }
       if (!_0x2dd06e[_0x530cb4].commands[_0x1c35dd]) {
         _0x2dd06e[_0x530cb4].commands[_0x1c35dd] = 1;
       } else {
         _0x2dd06e[_0x530cb4].commands[_0x1c35dd]++;
       }
       _0x2dd06e[_0x530cb4].count++;
     });
     const _0x5513e2 = _0x38bc51.map((_0x4cd261, _0xf43b6c) => {
       const _0x24712d = _0x2dd06e[_0x4cd261].commands;
       const _0x48255c = Object.entries(_0x24712d).map(([_0x4d2ffd, _0x534145]) => _0x4d2ffd + " " + (_0x534145 <= 1 ? "" : "(" + _0x534145 + ")")).join(", ");
       return "*" + (_0xf43b6c + 1) + " -- @" + _0x4cd261.split("@")[0] + "'s ➪ " + _0x2dd06e[_0x4cd261].count + "*  \n *LIST ➪*  _" + _0x48255c.trim() + "_";
     }).join("\n\n");

     var _0x17ca33 = ("*LIST OF COMMANDS USED TODAY!*\n_Note: Data will be reset when bot restart!_\n\n*Total Users: _" + _0x38bc51.length + "_*\n*Total Command Used: _" + commandHistory.length + "_*\n\n" + _0x5513e2 + "\n\n" + Config.caption).trim();

     // Add your image URL here
     const imageUrl = "https://files.catbox.moe/bh2fpj.jpg"; // Replace with your image URL

     await _0x297641.send(
       imageUrl,
       { caption: _0x17ca33 },
       "img",
       _0x297641
     ); // Send the image with the message
   } catch (_0x48863b) {
     await _0x297641.error(_0x48863b + "\n\ncommand : cmdused", _0x48863b, "*ERROR!*");
   }
 });
