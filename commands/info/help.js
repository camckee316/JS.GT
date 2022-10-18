const {Client, Messsage, MessageEmbed } = require("discord.js");
const {helpData} = require("../../embeds.js")//change timeData to helpData

module.exports = { 
    name: "help",
    description: "To-Do",

    run: async (client, message, args) => { 

        message.channel.send({ embeds: [helpData()] }) //escapeData = helpData
    },
};