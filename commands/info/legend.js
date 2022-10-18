const { Client, Message, MessageEmbed } = require("discord.js");
const {legendData} = require("../../embeds.js")

module.exports = {
  name: "legend",
  description: "Provides a list of legendary & mythical pokemons found in the game",
 
  run: async (client, message, args) => {
    
    message.channel.send({ embeds: [legendData()] });
  },
};