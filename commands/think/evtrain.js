const { Message, Client, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
evtrainDB = require('../../db/train.js')

module.exports = {
    name: "evtrain",
    description: "Shares Information about X",
    run: async (client, message, args) => {
      let pokeTrain = message.content.toLowerCase().split("!evtrain ")[1]

      for(var i=0; i<evtrainDB.length; i++) {
        if(pokeTrain == evtrainDB[i]._stat.toLowerCase()) {
        let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`EV: ${evtrainDB[i]._stat}`)
          .setDescription(`Pokemon: ${evtrainDB[i]._poke}`)
        
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${evtrainDB[i]._stat}** you requested:`)
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is some information about **${evtrainDB[i]._stat}**:` , embeds: [Embed]});

        break;
				} else if (i === evtrainDB.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
