const { Message, Client, MessageEmbed } = require("discord.js");
//const movelist = require("../../db/movelist.js");
const {Ecolor} = require("../../embeds.js")
movelist = require('../../db/movelist.js')

module.exports = {
    name: "move",
    description: "Shares Information about the requested move",
    run: async (client, message, args) => {
      let action = message.content.toLowerCase().split("!move ")[1]

			for (var i=0;i<movelist.length;i++) {
				if ( action == movelist[i]._move.toLowerCase()) {
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${movelist[i]._move} :`)
         // .setDescription(`${itemsDB[i]._desc}`)
          .addFields(
            {name: `Description of move:`, value:`${movelist[i]._desc}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Category/Type:', value:`${movelist[i]._type}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Power:' , value: `${movelist[i]._power}`, inline: true },
            {name: 'Accuracy:', value: `${movelist[i].acc}`, inline: true }
);      
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${movelist[i]._move}** you requested:`)  
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is some information about **${movelist[i]._move}**:` , embeds: [Embed]});

        break;
				} else if (i === movelist.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
