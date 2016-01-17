var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({

	// default our state by setting the state to nothing, with empty array
	getInitialState: function() {
		return {
			topics: []
		}
	},

	// run before component is rended
	componentWillMount: function() {
		Api.get('topics/defaults')
			.then(function(data) {
				this.setState({
					topics: data.data
				});
		}.bind(this));
	},

	render: function() {
		return <div className="list-group">
			Topic List
			{this.renderTopics()}
		</div>
	},

	// Render a list of topics
	renderTopics: function() {
		return this.state.topics.map(function(topic) {
			return <li>
				{topic}
			</li>
		});
	}
});
