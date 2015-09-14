var React = require("react");
var ShowItem = require("./ShowItem.jsx");

module.exports = React.createClass({
  render: function() {
    var shows = [];
    var that = this;
    this.props.shows.forEach(function(show) {
      if (show.title.toLowerCase().indexOf(that.props.filterText.toLowerCase()) !== -1) {
        shows.push(<ShowItem show={show} key={show.id} />);
      }
    });
    return (
      <ul>
        {shows}
      </ul>
    );
  }
});
