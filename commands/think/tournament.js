const { Message, Client, MessageEmbed } = require("discord.js");
//const tour = require("../../db/tourney.js");
const {Ecolor} = require("../../embeds.js")
tour = require('../../db/tourney.js')

module.exports = {
    name: "tournament",
    description: "Shares Information about Tournaments hosted in the game",
    run: async (client, message, args) => {
      let tourney = message.content.toLowerCase().split("!tournament ")[1]

			for (var i=0;i<tour.length;i++){
				if(tourney == tour[i]._league.toLowerCase()){
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about League ${tour[i]._league} :`)
          .addFields(
            {name: 'Location:', value:`${tour[i]._loc}`, inline: true },
            {name: 'Levels:', value:`${tour[i]._lvl}`, inline: true },
            {name: 'Prizes:', value:`${tour[i]._prize}`, inline: false },
            {name: 'Starts :', value:`${tour[i]._info}`, inline: false }
    );
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${tour[i]._league}** tournament you requested:`) 
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is some information about **${tour[i]._league}**:` , embeds: [Embed]});

        break;
				} else if (i === tour.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
