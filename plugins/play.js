const axios = require("axios");
const { smd } = require("../lib");
smd(
  {
    pattern: "ytmp3",
    desc: "Download MP3 from YouTube",
    category: "download",
    filename: __filename,
  },
  async (m, query) => {
    try {
      const youtubeUrl = query || (m.quoted && m.quoted.text);
      if (!youtubeUrl) {
        return await m.reply("Please provide a valid YouTube URL.");
      }

      await m.react("⏳️");

      const apiKey = "gifted";
      const url = `https://api.giftedtech.my.id/api/download/ytaudio?apikey=${apiKey}&url=${encodeURIComponent(youtubeUrl)}`;
      const response = await axios.get(url);

      if (response.data.status !== 200 || !response.data.result) {
        return await m.reply("Failed to fetch audio details. Please try again.");
      }

      const { title, thumbnail, download_url: audioUrl } = response.data.result;

      if (!audioUrl) {
        return await m.reply("Failed to retrieve the audio file. Please try again.");
      }

      await m.bot.sendMessage(m.jid, {
        image: { url: thumbnail },
        caption: `*Title:* ${title}\n\n*Preparing audio...*`,
      });

      await m.bot.sendMessage(m.jid, {
        audio: {
          url: audioUrl,
        },
        mimetype: "audio/mpeg",
        ptt: false,
      });

      await m.react("✅️");
    } catch (e) {
      console.error("Error in ytmp3 command:", e);
      await m.reply("An error occurred while processing your request. Please try again.");
    }
  }
);
