var React = require("react");
var ShowItem = require("./ShowItem.jsx");

module.exports = React.createClass({
    render: function() {
        var shows = [];
        this.props.shows.forEach(function(show) {
            shows.push(<ShowItem show={show} key={show.id} />);
        });
        return (
          <div>
            <h2>Shows</h2>
            <ul>
              {shows}
            </ul>
          </div>
        );
    }
});
