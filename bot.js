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
	}

	self.onEvent = function(event) {
		//reception d'un message
		console.log(event);
	}
}
