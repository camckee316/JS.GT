const { Client, Message, MessageEmbed } = require("discord.js");
const {nonmapData} = require("../../embeds.js")

module.exports = {
  name: "nonmap",
  description: "Provides a list of non-map pokemons",
 
  run: async (client, message, args) => {
    
    message.channel.send({ embeds: [nonmapData()] });
  },
};