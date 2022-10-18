const { Client, Message, MessageEmbed } = require("discord.js");
const {Ecolor} = require("../../embeds.js")

module.exports = {
  name: "plmap",
  description: "Provide Maps of several regions of the game",
 
  run: async (client, message, args) => {
// Embeds
let plmapStructure = new MessageEmbed()
	.setColor(`${Ecolor.blue}`)
  .setTitle("Map for the Different regions in the game!")
  .setDescription("**Orden Region**")
  .setImage(`http://i.imgur.com/dYlAaGQ.jpg`); // Map1

let Map2 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Blackfell Caverns")
  .setImage(`https://i.imgur.com/OsSxtei.jpeg`); 
let Map3 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Onderblade Mines")
  .setImage(`http://i.imgur.com/yUmYgLB.jpg`); 
let Map4 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Willowsteen Cabin")
  .setImage(`https://i.imgur.com/1DxwN0a.jpg`); 
let Map5 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Trial8 Region")
  .setImage(`https://i.imgur.com/jOE293k.jpeg`); 
let Map6 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Room 2 Maze")
  .setImage(`https://i.imgur.com/7v0sKsD.jpeg`); 
let Map7 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Trial2 Region")
  .setImage(`https://i.imgur.com/5AYLFLD.png`); 
    
    message.channel.send({ embeds: [plmapStructure, Map2, Map3, Map4, Map5, Map6, Map7] });
  },
};