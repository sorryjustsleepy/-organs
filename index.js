const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages
    ]
});

// LOGIN (ONLY ONCE)
client.login(process.env.TOKEN);

// EXPRESS SERVER (keeps bot alive on Render)
const app = express();

app.get("/", (req, res) => {
    res.send("Bot is alive");
});

app.listen(3000, () => {
    console.log("Server is running");
});