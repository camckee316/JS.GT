const { Client, Message, MessageEmbed } = require("discord.js");
const {escapeData} = require("../../embeds.js")

module.exports = {
  name: "escape",
  description: "Provides a list of pokemons that can escape during a battle",
 
  run: async (client, message, args) => {
    
    message.channel.send({ embeds: [escapeData()] });
  },
};