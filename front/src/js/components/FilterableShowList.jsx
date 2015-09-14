var React = require("react");

var SearchBar = require("./SearchBar.jsx");
var ShowList = require("./ShowList.jsx");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      filterText: ""
    };
  },
  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText
    });
  },
  render: function() {
    var shows = [];
    return (
      <div>
        <h2>Shows</h2>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput} />
        <ShowList
          shows={this.props.shows}
          filterText={this.state.filterText} />
      </div>
    );
  }
});
