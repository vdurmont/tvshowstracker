var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
  render: function() {
    var show = this.props.show;
    return (
      <li key={show.id}><Link to={`/shows/${show.id}`}>{show.title}</Link></li>
    );
  }
});

//<li><Link to="/shows/{{show.id}}">{show.title}</Link></li>
