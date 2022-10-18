const { Client, Collection, Message, MessageEmbed } = require("discord.js");
const client = new Client({
    intents: 32767,
    partials: ['CHANNEL']
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

// Embed file Imports
const {midData} = require("./embeds.js")
// Added Commands with customs (no prefix)
client.on("messageCreate", async (msg) => {

 if(msg.content.includes("[mid]")) {
    let str = msg.content
    let beforeCode = str.substring(0, str.lastIndexOf("[mid]")).trim()
    let afterCode = str.substring(str.lastIndexOf("[/mid]") +6).trim()
    let userText = beforeCode.concat(" ", afterCode)
    let pokeID = str.substring(
        str.indexOf("[mid]") + 5,
        str.lastIndexOf("[/mid")
      
      );
      msg.channel.send({ content: userText, embeds: [midData(pokeID)] });  
  }
 });
client.login('token')
