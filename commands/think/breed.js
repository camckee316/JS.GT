const { Message, Client, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
breedDB = require('../../db/breed.js')

module.exports = {
    name: "breed",
    description: "Shares Information about pokemons found in the specific area",
    run: async (client, message, args) => {
      let mate = message.content.toLowerCase().split("!breed ")[1]

			for (var i=0;i<breedDB.length;i++) {
				if (mate == breedDB[i]._pokeName.toLowerCase()) {
        let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Your pokemon ${breedDB[i]._pokeName} is Compatible with:`)
          .setDescription(`${breedDB[i]._breed}`);
        
        //message.channel.send(`**${message.author.username}** here are the pokemon that can breed with **${breedDB[i]._pokeName}**:`)
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here are teh pokemon that can breed with **${breedDB[i].pokeName}**:` , embeds: [Embed]});

        break;
				}  else if (i === breedDB.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`);
			}
// 
      
    },
};
