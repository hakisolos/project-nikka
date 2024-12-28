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

smd(
  {
    pattern: "play",
    desc: "Search and play a song using YouTube",
    category: "music",
    filename: __filename,
  },
  async (m, query) => {
    try {
      const input = query || m.quoted?.text;

      if (!input) {
        return await m.reply("Please provide a song name or keyword to search.");
      }

      await m.react("⏳️");

      let videoTitle, videoUrl, videoThumbnail;

      if (input.startsWith("http")) {
        videoUrl = input;
        const searchResponse = await axios.get(
          `https://api.nexoracle.com/downloader/yt-search?apikey=free_key@maher_apis&q=${encodeURIComponent(input)}`
        );
        const video = searchResponse.data.result[0];
        videoTitle = video.title;
        videoThumbnail = video.thumbnail;
      } else {
        const searchResponse = await axios.get(
          `https://api.nexoracle.com/downloader/yt-search?apikey=free_key@maher_apis&q=${encodeURIComponent(input)}`
        );
        const video = searchResponse.data.result[0];
        videoTitle = video.title;
        videoUrl = video.url;
        videoThumbnail = video.thumbnail;
      }

      await m.bot.sendMessage(
        m.jid,
        {
          image: { url: videoThumbnail },
          caption: `Downloading *${videoTitle}*...`,
        },
        { quoted: m }
      );

      const downloadResponse = await axios.get(
        `https://api.giftedtech.my.id/api/download/ytaudio?apikey=gifted&url=${encodeURIComponent(videoUrl)}`
      );

      if (downloadResponse.data.status !== 200) {
        return await m.reply("Failed to download the song. Please try again.");
      }

      const audioUrl = downloadResponse.data.result.download_url;

      await m.bot.sendMessage(
        m.jid,
        {
          audio: { url: audioUrl },
          mimetype: "audio/mp4",
          ptt: false,
        },
        { quoted: m }
      );

      await m.react("✅️");
    } catch (e) {
      console.error("Error in play command:", e);
      await m.reply("An error occurred while processing your request. Please try again.");
    }
  }
);
