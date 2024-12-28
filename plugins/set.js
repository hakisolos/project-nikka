
astro_patch.cmd(
  {
    pattern: "setcmd",
    desc: "To set a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      if (!query) {
        return await message.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }

      let queryParts = query.split(",");
      let newCommand, originalCommand;
      let isSticker = false;

      if (message.quoted) {
        let quotedType = message.quoted.mtype;
        if (quotedType === "stickerMessage" && query) {
          isSticker = true;
          newCommand = query.split(" ")[0];
          originalCommand = "sticker-" + message.quoted.msg.fileSha256;
        }
      }

      if (!isSticker && queryParts.length > 1) {
        originalCommand = queryParts[0].trim().toLowerCase();
        newCommand = queryParts[1].trim().toLowerCase();
      } else if (!isSticker) {
        return await message.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }

      if (newCommand.length < 1) {
        return await message.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }

      if (global.setCmdAlias[newCommand]) {
        return await message.send(
          `*_"${isSticker ? "Given Sticker" : newCommand}" Already set for "${
            global.setCmdAlias[newCommand]
          }" Cmd, Please try another ${isSticker ? "Sticker" : "Name"}_*`
        );
      }

      const foundCommand =
        astro_patch.commands.find((cmd) => cmd.pattern === originalCommand) ||
        astro_patch.commands.find(
          (cmd) => cmd.alias && cmd.alias.includes(originalCommand)
        );

      if (foundCommand) {
        global.setCmdAlias[newCommand] = foundCommand.pattern;
        return await message.send(
          `*_Cmd "${global.setCmdAlias[newCommand]}" Successfully set to "${
            isSticker ? "Sticker" : newCommand
          }"._*\n*_These all names are reset if the bot restarts_*`
        );
      } else {
        return await message.send(
          `*_Provided Cmd (${originalCommand}) not found in bot commands. Please provide a valid command name_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:setcmd", error);
    }
  }
);
