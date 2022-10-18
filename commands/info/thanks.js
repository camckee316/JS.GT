const {Client, Messsage, MessageEmbed } = require("discord.js");
const {thanksData} = require("../../embeds.js")

module.exports = { 
    name: "thanks",
    description: "Special thanks to those who have helped and are helping with the making of GryaradosThief (GT)",

    run: async (client, message, args) => { 

        message.channel.send({ embeds: [thanksData()] })
    },
};