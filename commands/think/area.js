const { Message, Client, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
const areaDB = require('../../db/area.js')

module.exports = {
    name: "area",
    description: "Shares Information about pokemons found in the specific area",
    run: async (client, message, args) => {
      let pokeFind = message.content.toLowerCase().split("!area ")[1]

      for(var i=0;i<areaDB.length;i++){
				if(pokeFind == areaDB[i]._name.toLowerCase()){
        let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Pokemons found in ${areaDB[i]._name} :`)
          .addFields(
            {name: 'Pokemons Names', value:`${areaDB[i]._pokeFound}`, inline: true },
            {name: '\u200B', value: '\u200B' },
            {name: 'Pokemons Names & Rarity', value:`${areaDB[i]._rare}`, inline: true }
    );
       // message.channel.send(`**${message.author.username}** here are the pokemon in **${areaDB[i]._name}**:`)
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here are the pokemon in **${areaDB[i]._name}**:` , embeds: [Embed]});
        break;
				}  else if (i === areaDB.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`);
			}
// 
      
    },
};
