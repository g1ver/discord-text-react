import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', (c) => {
    console.log(`Logged in as: ${c.user.username} [${c.user.id}]`);
});


client.login(process.env.DISCORD_TOKEN);
