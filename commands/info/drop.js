const {Client, Messsage, MessageEmbed } = require("discord.js");
const {dropData} = require("../../embeds.js")

module.exports = { 
    name: "drop",
    description: "provides a list of pokemon that may drop items",

    run: async (client, message, args) => { 

        message.channel.send({ embeds: [dropData()] })
    },
};