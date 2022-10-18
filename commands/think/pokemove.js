const { Message, Client, MessageEmbed, MessageAttachment } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
move = require('../../db/pokemonmove.js')
module.exports = {
    name: "pokemove",
    description: "Shares Information about specified Pokemon of the game",
    run: async (client, message, args) => {
      let pkmn = message.content.toLowerCase().split("!pokemove ")[1]

      for(var i=0;i<move.length;i++){
        if(pkmn == move[i]._engName.toLowerCase()){
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${move[i]._engName} :`)
          .setDescription(`**Dex number:  ${move[i]._num}**`)
          .setThumbnail(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${move[i]._num}.png`)
          .addFields(
            //{name: 'Rarity:', value:`${move[i]._rare}`, inline: true },
            {name: 'Moves learnt by leveling:', value:`${move[i]._learnt}`, inline: true },
            {name: 'Moves learnt by hm/tm:', value:`${move[i]._hmtm}`, inline: false },
            {name: 'Moves learnt by move tutor:', value:`${move[i]._mt}`, inline: true },
            {name: 'Moves learnt by breeding:', value:`${move[i]._breed}`, inline: true },

            
    );
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${move[i]._engName}** you requested: `)  
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is some information about **${move[i]._engName}**:` , embeds: [Embed]});

        break;
				} else if (i === move.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee.`); 
			}
    },//else if (pkmn == null )
    //message.channel.send("error")
};

