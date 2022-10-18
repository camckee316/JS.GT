const { Message, Client, MessageEmbed } = require("discord.js");
const weakness = require("../../db/weakness.js");
//const weakness = require("../../db/weakness.js");
const {Ecolor} = require("../../embeds.js")

module.exports = {
    name: "weak",
    description: "Shares Information about Pokemon's weakness, resistances and immunities",
    run: async (client, message, args) => {
      let dexfor = message.content.toLowerCase().split("!weak ")[1]//pokedex = weak file too.

      for(var i=0; i<weakness.length; i++) {
        if(dexfor == weakness[i]._pokeName.toLowerCase()) {
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${weakness[i]._pokeName} :`)
          .addFields(
            {name: 'Weakness:', value:`${weakness[i]._weak}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Resistance:', value:`${weakness[i]._resis}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Immunities:', value:`${weakness[i]._imm}`, inline: true }
    );
        //message.channel.send(` Hello, **${message.author.username}**, here is the weakness information for **${weakness[i]._pokeName}** you requested:`)
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is the weakness information for  **${weakness[i]._pokeName}**:` , embeds: [Embed]});
        break;
				} else if (i === weakness.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
