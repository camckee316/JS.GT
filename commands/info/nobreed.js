const {Client, Messsage, MessageEmbed } = require("discord.js");
const {typeData} = require("../../embeds.js")

module.exports = { 
    name: "nobreed",
    description: "Provides a list of pokemon that cant breed in game.",

    run: async (client, message, args) => { 

        message.channel.send({ embeds: [typeData()] })
    },
};