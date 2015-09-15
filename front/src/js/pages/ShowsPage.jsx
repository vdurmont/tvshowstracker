var React = require("react");

var Constants = require("../constants/Constants.js");
var FilterableShowList = require("../components/FilterableShowList.jsx");
var ShowActionCreator = require("../actions/ShowActionCreator.jsx");
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
  componentWillMount() {
    ShowActionCreator.loadAll();
  },
  componentDidMount: function() {
    ShowStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ShowStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var shows = this.state.allShows;
    if (shows == null) {
      return (<div>Loading error :(</div>);
    } else if (shows === Constants.IS_LOADING) {
      return (<div>Loading...</div>);
    }
    return (<FilterableShowList shows={shows} />);
  },

  /**
  * Event handler for 'change' events coming from the store
  */
  _onChange: function() {
    this.setState(getState());
  }
});
