var React = require('react');
var Api = require('../utils/api');
var Reflux = require('reflux');

// store in charge of fetching and stroing our data
module.exports = Reflux.createStore({
	getTopics: function() {
		return Api.get('topics/defaults')
		.then(function(json) {
			this.topics = json.data; // data is the array of objects that stores alll of our topics
			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.topics);
	}
});
