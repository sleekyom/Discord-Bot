//Create Discord App
//we will be able to greet a person

// Language Parser
// Hello (English) - Hi
// Tere () - Terevist
// Bawo () - Se daadi ni
// Privet () - Kak dila!

const Discord = require('discord.js');
const axios = require('axios').default;
const client = new Discord.Client();
require('dotenv').config()
const token= process.env.MY_TOKEN

// BUILDING CURRENCY CONVERTER FEATURE INTO MY BOT

const fixerioEndpoint= "http://http://data.fixer.io/api/latest?access_key=0966f0ee81643c0679266d4eff82748a&symbols=USD,AUD,CAD,PLN,MXN&format=1.fixer.io/api/";
//const fixerioEndpoint= "http://data.fixer.io/api/";

const getLatestRates = () => {
    
// Make a request for latest conversion rate
axios.get(fixerioEndpoint)
  .then(function (response) {
    // handle success
    let lastest_rate = response.data;
    console.log(lastest_rate);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  })
  
};


// GREETING FEATURE
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