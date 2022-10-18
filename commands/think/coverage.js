const { Message, Client, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
coverDB = require('../../db/cover.js')

module.exports = {
    name: "cover",
    description: "Shares Information about a Type or Type combinations",
    run: async (client, message, args) => {
      let type = message.content.toLowerCase().split("!cover ")[1]

			for (var i=0;i<coverDB.length;i++) {
				if (type == coverDB[i]._type.toLowerCase()) {
        let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${coverDB[i]._type} :`)
          .addFields(
            {name: 'Super Effective against:', value:`${coverDB[i]._super}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Neutral:', value:`${coverDB[i]._neutral}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Resistance:', value:`${coverDB[i]._resists}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Immunities:', value:`${coverDB[i]._imm}`, inline: true }
    );
        //message.channel.send(`**${message.author.username}** here is the information you requested about **${coverDB[i]._type}** types:`)  
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is the information you requested about **${coverDB[i]._type}**:` , embeds: [Embed]});

        break;
				}  else if (i === coverDB.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
