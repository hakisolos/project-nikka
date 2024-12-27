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


