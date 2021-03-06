var React = require("react");

var Constants = require("../constants/Constants.js");
var ShowItem = require("./ShowItem.jsx");

module.exports = React.createClass({
  render: function() {
    if (this.props.shows == Constants.IS_LOADING) {
      return (<div>Loading....</div>);
    }

    var shows = [];
    for (var id in this.props.shows) {
      var show = this.props.shows[id];
      if (show.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1) {
        shows.push(<ShowItem show={show} key={show.id} />);
      }
    }
    return (
      <ul>
        {shows}
      </ul>
    );
  }
});
