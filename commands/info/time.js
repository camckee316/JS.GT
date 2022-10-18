const { Client, Message, MessageEmbed } = require("discord.js");
const {timeData} = require("../../embeds.js")

module.exports = {
  name: "time",
  description: "Provides information about server time & Day-Night cycle",
 
  run: async (client, message, args) => {
    
    message.channel.send({ embeds: [timeData()] });
  },
};