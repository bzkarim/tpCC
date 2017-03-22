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
		 if (!event.bot_id) {
			console.log('vrai message');
		
			axios.get('https://www.chucknorrisfacts.fr/api/get?data=tri:alea').then(function(response){
				
				console.log(response.status); 
				self.bot.postMessage(event.channel, response.data[0].fact);
				    
			});  

			
			}

		//else 	{
			//self.bot.postMessage(event.channel, 'arrete tes Bots!!!');
		//});
			//console.log('autre message');
			//}
		}	
	}
}
