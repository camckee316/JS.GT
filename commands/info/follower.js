const { Client, Message, MessageEmbed } = require("discord.js");
const {followerData} = require("../../embeds.js")

module.exports = {
  name: "follower",
  description: "Provides a list of pokemons that can follow you on game map",
 
  run: async (client, message, args) => {
    
    message.channel.send({ embeds: [followerData()] });
  },
};