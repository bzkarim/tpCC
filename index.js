var Bot = require('./bot.js');

// create a bot
var bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'karim_bot'
});
bot.connect();



