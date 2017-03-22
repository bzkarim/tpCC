const SlackBot = require('slackbots');
module.exports = function(params) {
	this.bot = null;
	var self = this;
	this.connect = function() {
		self.bot = new SlackBot(params);
		self.bot.on('start', this.onStart);
		self.bot.on('message', this.onEvent);
	}

	self.onStart = function() {
		self.bot.postMessageToUser('rimka', 'je suis là!!!!');

		self.bot.getUser(self.bot.self.name).then(function(user) {
			self.user = user;
		});

		setInterval(function() {
			self.bot.postMessageToChannel('general', 'Salut tout le monde!!!');
		}, 20000);
	}

	self.onEvent = function(event) {
		//reception d'un message
		
		if (event.type == 'message') 
		{
		 if (!event.subtype) {
			console.log('vrai message');
			self.bot.postMessage(event.channel, 'Re !!!');
			}

		else 	{
			//self.bot.postMessage(event.channel, 'arrete tes Bots!!!');
		//});
			//console.log('autre message');
			//}
		}	
	}
}
