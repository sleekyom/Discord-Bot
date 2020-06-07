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

// // BUILDING CURRENCY CONVERTER FEATURE INTO MY BOT
const fixerioEndpoint= "http://data.fixer.io/api/latest?access_key=0966f0ee81643c0679266d4eff82748a&symbols=USD,AUD,CAD,PLN,MXN&format=1";
// //const fixerioEndpoint= "http://data.fixer.io/api/";



const getRates = (resp) => {
axios.get(fixerioEndpoint)
  .then(resp)
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    return null;
  });
}


const grabCurrencyValue = (input) => {
  const [fromValue, toValue] = input.split("to");
  console.log(fromValue, toValue);
  const [amountToConvert, baseCurrency] = fromValue.trim().split(" ");
  console.log(amountToConvert, baseCurrency);

  //Convert currency
  getRates(result =>{
    finalResult = result.data.rates[baseCurrency] * amountToConvert

    return (client.on('message', msg => {
      if (!msg.author.bot) {
        msg.reply(finalResult);
      }
    }));

    console.log('did you get here');
    
  })
  
}




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
                msg.reply(grabCurrencyValue(msg.content));
                break;
        }
    }
});



client.login(token);