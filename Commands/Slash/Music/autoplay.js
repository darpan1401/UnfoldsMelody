const {
  CommandInteraction,
  PermissionFlagsBits,
  ApplicationCommandType,
} = require("discord.js");
const UNFOLDS = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "autoplay",
  description: `toggle autoplay on/off`,
  userPermissions: PermissionFlagsBits.Connect,
  botPermissions: PermissionFlagsBits.Connect,
  category: "Music",
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {UNFOLDS} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    let autoplay = queue.toggleAutoplay();

    client.embed(
      interaction,
      `${client.config.emoji.SUCCESS} AutoPlay: \`${autoplay ? "On" : "Off"}\``
    );
  },
};
