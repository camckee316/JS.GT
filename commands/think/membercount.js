const { Client, Message, MessageEmbed } = require("discord.js");
const e = require("express");
const {Ecolor} = require("../../embeds.js")

module.exports = {
  name: "membercount",
  description: "Shows how many accounts are in this Discord Server.",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const memberEmbed = new MessageEmbed()
        .setColor(`${Ecolor.blue}`)
        .setAuthor({name:`Member Count of ${message.guild}`}, message.guild.iconURL({ dynamic: true }))
        .setTitle("Members")
        .setDescription (`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter({text:`Requested by ${message.author.username}`})
    //message.channel.send( `hello, ${message.author.username} here the server information`);
    //message.channel.send({ embeds: [memberEmbed]} );
    message.channel.send({content: `**${message.author.username}** here is the server information:`, embeds: [memberEmbed]});

  },
};

//https://discord.com/channels/244230771232079873/713041505719287818/988982201351798804
//file is correct now no depreciation 
