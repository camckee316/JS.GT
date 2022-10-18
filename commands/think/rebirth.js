/* const { Message, Client, MessageEmbed } = require("discord.js");
const rebirth = require("../../db/rebirth.js");
const {Ecolor} = require("../../embeds.js")
rebirth = require('../../db/rebirth.js')

module.exports = {
    name: "rebirth",
    description: "Shares Information regarding rebirth of a pokemon",
    run: async (client, message, args) => {
      let birth = message.content.toLowerCase().split("!rebirth ")[1]

      for(var i=0; i<rebirth.length; i++) {
        if (birth == rebirth[i]._pokeName.toLowerCase()) {
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details for ${rebirth[i]._pokeName}' rebirth :`)
          .setDescription(`Rebirth Location: ${rebirth[i]._loc}`);
         
        message.channel.send(` Hello, **${message.author.username}**, here is the rebirthing information for  **${rebirth[i]._pokeName}** you requested:`)
        message.channel.send({ embeds: [Embed] });
				} 
			}
// 
      
    },
}; */
const { Message, Client, MessageEmbed } = require("discord.js");
const rebirth = require("../../db/rebirth.js");
//const rebirth = require("../../db/rebirth.js");
const {Ecolor} = require("../../embeds.js")

module.exports = {
    name: "rebirth",
    description: "Shares Information regarding rebirth of a pokemon",
    run: async (client, message, args) => {
      let birth = message.content.toLowerCase().split("!rebirth ")[1]

      for(var i=0; i<rebirth.length; i++) {
        if (birth == rebirth[i]._pokeName.toLowerCase()) {
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details for ${rebirth[i]._pokeName}' rebirth :`)
          .setDescription(`Rebirth Location: ${rebirth[i]._loc}`);
        
        //message.channel.send(` Hello, **${message.author.username}**, here is the rebirthing information for  **${rebirth[i]._pokeName}** you requested:`) 
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is the rebirthing information for **${rebirth[i]._pokeName}**:` , embeds: [Embed]});

        break;
				} else if (i === rebirth.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};