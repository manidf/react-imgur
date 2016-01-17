var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.imgur.com/3/';
var apiKey = 'b4e88888f6f2b1e';

module.exports =  {
	get: function(url) {
		// make an AJAX request to what ever url we pass to it
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
		});
	}
};
