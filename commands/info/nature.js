const {Client, Messsage, MessageEmbed } = require("discord.js");
const {timeData} = require("../../embeds.js")

module.exports = { 
    name: "nature",
    description: "https://i.imgur.com/M6bmGq9.jpg",

    run: async (client, message, args) => { 

        message.channel.send("https://i.imgur.com/M6bmGq9.jpg");
    },
};