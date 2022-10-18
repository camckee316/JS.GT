const { Message, Client, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")
itemsDB = require('../../db/items.js')

module.exports = {
    name: "item",
    description: "Shares Information about given Item in the game",
    run: async (client, message, args) => {
      let pokeItem = message.content.toLowerCase().split("!item ")[1]

    for(var i=0; i<itemsDB.length; i++) {
        if(pokeItem == itemsDB[i]._unit.toLowerCase()) {
         let Embed = new MessageEmbed()
  	      .setColor(`${Ecolor.pink}`)
          .setTitle(`Details about ${itemsDB[i]._unit} :`)
          .setDescription(`${itemsDB[i]._desc}`)
          .addFields(
            {name: 'Sellable:', value:`${itemsDB[i]._sell}`, inline: true },
            {name: 'Buyable:', value:`${itemsDB[i]._buy}`, inline: true },
            {name: 'Price and Location:', value:`${itemsDB[i]._loc}`, inline: false },
            {name: 'Other Information:', value:`${itemsDB[i]._other}`, inline: false }
    );
        //message.channel.send(` Hello, **${message.author.username}**, here is some information about **${itemsDB[i]._unit}** you requested:`)  
        //message.channel.send({ embeds: [Embed] });
        message.channel.send({content: `**${message.author.username}** here is some information about **${itemsDB[i]._unit}**:` , embeds: [Embed]});

        break;
				} else if (i === itemsDB.length -1)
        message.channel.send(`${message.author.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`); 
			}
// 
      
    },
};
