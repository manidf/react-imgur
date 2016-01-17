var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-stores.jsx');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],
	// default our state by setting the state to nothing, with empty array
	getInitialState: function() {
		return {
			topics: []
		}
	},

	// run before component is rended, we will make an asynchronous call to Api.get
	componentWillMount: function() {
		TopicStore.getTopics();
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
	},

	onChange: function(event, topics) {
		this.setState({ topics: topics })
	}
});
