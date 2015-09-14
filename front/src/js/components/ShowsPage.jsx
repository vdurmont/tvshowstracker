var React = require("react");

var FilterableShowList = require("./FilterableShowList.jsx");
var ShowStore = require("../stores/ShowStore.jsx");

/**
* Retrieve the current data from the store
*/
function getState() {
  return {
    allShows: ShowStore.getAll()
  };
}

module.exports = React.createClass({
  getInitialState: function() {
    return getState();
  },
  componentDidMount: function() {
    ShowStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ShowStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <FilterableShowList shows={this.state.allShows} />
    );
  },

  /**
  * Event handler for 'change' events coming from the store
  */
  _onChange: function() {
    this.setState(getState());
  }
});
