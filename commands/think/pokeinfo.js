const { Message, Client, MessageEmbed, MessageAttachment } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
pokemon = require('../../db/pokemon.js')

module.exports = {
    name: "pokeinfo",
    description: "Shares Information about specified Pokemon of the game",
    run: async (client, message, args) => {
      let pkmn = message.content.toLowerCase().split("!pokeinfo ")[1]

      for(var i=0;i<pokemon.length;i++){
        if(pkmn == pokemon[i]._engName.toLowerCase()){
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${pokemon[i]._engName} :`)
          .setDescription(`Dex number - ${pokemon[i]._nb}`)
          .setThumbnail(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon[i]._nb}.png`)
          .addFields(
            //{name: 'Rarity:', value:`${pokemon[i]._rare}`, inline: true },
            {name: 'Evolution Chart:', value:`${pokemon[i]._evo}`, inline: true },
            {name: 'Location:', value:`${pokemon[i]._loc}`, inline: false },
            {name: 'Ev Yield:', value:`${pokemon[i]._ev}`, inline: true },
            {name: 'Ability:', value:`${pokemon[i]._ability}`, inline: true },
            
            {name: '__Base Stats__:', value:
`
**HP** : ${pokemon[i]._baseStats._hp}
**Atk** : ${pokemon[i]._baseStats._atk}
**Def** : ${pokemon[i]._baseStats._def}
**S. Atk** : ${pokemon[i]._baseStats._sAtk}
**S. Def** : ${pokemon[i]._baseStats._sDef}
**Speed** : ${pokemon[i]._baseStats._spd}
**Total** : ${pokemon[i]._baseStats._total}

**Growth Rate** : ${pokemon[i]._gr}

**Type** : ${pokemon[i]._ty}

`, inline: false },
            
    );
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${pokemon[i]._engName}** you requested: `)  
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is some information about **${pokemon[i]._engName}**:` , embeds: [Embed]});

        break;
				} else if (i === pokemon.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
    },//else if (pkmn == null )
    //message.channel.send("error")
};

