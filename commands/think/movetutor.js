const { Message, Client, MessageEmbed } = require("discord.js");
const moveTutor = require("../../db/moveTutor.js");
//const moveTutor = require("../../db/moveTutor.js");
const {Ecolor} = require("../../embeds.js")

module.exports = {
    name: "movetutor",
    description: "Shares Information about Move tutors and their location",
    run: async (client, message, args) => {
      let tutor = message.content.toLowerCase().split("!movetutor ")[1]

			for(var i=0;i<moveTutor.length;i++){
				if(tutor == moveTutor[i]._mtType.toLowerCase()){
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${itemsDB[i]._unit} :`)
          .setDescription(`- ${moveTutor[i]._mtNotes}`)
          .addFields(
            {name: 'Type:', value:`${moveTutor[i]._mtType}`, inline: true },
            {name: 'Location of MoveTutor:', value:`${moveTutor[i]._mtLoc}`, inline: true },
            {name: 'Requirements:', value:`${moveTutor[i]._mtReq}`, inline: false },
            {name: 'Moves Taught:', value:`${moveTutor[i]._mtMove}`, inline: false }
    );
        
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${moveTutor[i]._mtType}** you requested:`) 
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here are the pokemon in **${moveTutor[i]._mtType}**:` , embeds: [Embed]});

        break;
				}  else if (i === moveTutor.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};