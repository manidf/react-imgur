var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');

var routs = (
	<Router>
		<Route path="/" component={Main}>

		</Route>
	</Router>
);

module.exports = routs;
