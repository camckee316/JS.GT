const { Message, Client, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
const abilityDB = require('../../db/ability.js')

module.exports = {
    name: "ability",
    description: "Shares Information about pokemon abilities",
    run: async (client, message, args) => {
      let abilityName = message.content.toLowerCase().split("!ability ")[1]

      for (var i=0;i<abilityDB.length;i++) {
				if (abilityName == abilityDB[i]._ability.toLowerCase()) {
        let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Information about ${abilityDB[i]._ability} :`)
          .setDescription(`__${abilityDB[i]._desc}__`)
          .addFields(
            {name: 'Pokemons with this ability', value:`${abilityDB[i]._poke}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Pokemons with ability this as hidden', value:`${abilityDB[i]._hidden}`, inline: true }
    );
        //message.channel.send(`**${message.author.username}** here is the information you requested about **${abilityDB[i]._ability}** :`)  
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is the information your requested about **${abilityDB[i]._ability}**:` , embeds: [Embed]});

        break;
				}  else if (i === abilityDB.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
