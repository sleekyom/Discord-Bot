//Create Discord App
//we will be able to greet a person

// Language Parser
// Hello (English) - Hi
// Tere () - Terevist
// Bawo () - Se daadi ni
// Privet () - Kak dila!

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const token= process.env.MY_TOKEN

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.author.bot) {
        switch (msg.content) {
            case 'Hi':
                msg.reply('Hello')
                break;
            case 'Bawo':
                msg.reply('Se daada ni')
                break;
            case 'Privet':
                msg.reply('Kak Dila')
                break;
            case 'Tere':
                msg.reply('Terevist')
                break;
            default:
                msg.reply('I am unable to process this word presently')
                break;
        }
    }
});

client.login(token);