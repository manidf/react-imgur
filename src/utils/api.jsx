var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.imgur.com/3/';
var apiKey = 'b4e88888f6f2b1e';

module.exports = window.api =  {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response) {
			return response.json()
		});
	}
};
