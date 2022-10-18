const {Client, Messsage, MessageEmbed } = require("discord.js");
const {timeData} = require("../../embeds.js")

module.exports = { 
    name: "shiny",
    description: "Gives information about shiny pokemon",

    run: async (client, message, args) => { 

        message.channel.send("Increase Hit Points by 10%. Chances of finding them in the wild 1/8192 without premium account and 1/4096 with premium.");
    },
};