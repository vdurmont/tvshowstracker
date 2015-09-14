var React = require("react");

// Routing
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var NoMatch = require("./components/NoMatch.jsx");
var ShowPage = require("./components/ShowPage.jsx");
var ShowsPage = require("./components/ShowsPage.jsx");

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>TvShowsTracker</h1>
        <ul>
          <li><Link to="/shows">Shows</Link></li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="shows" path="shows" handler={ShowsPage}/>
    <Route name="show" path="shows/:showId" handler={ShowPage}/>
    <Route name="nomatch" handler={NoMatch}/>
    <DefaultRoute handler={ShowsPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("content"));
});
