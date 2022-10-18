const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("Bot Online")
})

app.listen(3000, () => {
  console.log("Servers for uptime are ready!") // Camckee: This is for Uptiming
})

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        // Register for a single guild
        await client.guilds.cache
            .get("693566026897686548") 
            .commands.set(arrayOfSlashCommands);

client.user.setPresence({
        activities: [
        { status: "online", name: "GT | !help" },
      ],
    });
    });
};