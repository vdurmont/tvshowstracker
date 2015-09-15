var React = require("react");

var Constants = require("../constants/Constants.js");
var ShowStore = require("../stores/ShowStore.jsx");

/**
* Retrieve the current data from the store
*/
function getStateFromStore(context) {
  var showId = context.router.getCurrentParams().showId;
  return {
    show: ShowStore.getOne(showId)
  };
}

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return getStateFromStore(this.context);
  },
  componentDidMount: function() {
    ShowStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ShowStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var show = this.state.show;
    if (show == null) {
      // TODO Print a 404
    } else if (show === Constants.IS_LOADING) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <h2>{show.title}</h2>
        <p>{show.description}</p>
      </div>
    );
  },

  /**
  * Event handler for 'change' events coming from the store
  */
  _onChange: function() {
    this.setState(getStateFromStore(this.context));
  }
});
