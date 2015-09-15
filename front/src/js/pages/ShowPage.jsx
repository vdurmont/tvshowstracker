var React = require("react");

var Constants = require("../constants/Constants.js");
var ShowActionCreator = require("../actions/ShowActionCreator.jsx");
var ShowStore = require("../stores/ShowStore.jsx");

/**
* Retrieve the current data from the store
*/
function getStateFromStore(context) {
  var showId = context.router.getCurrentParams().showId;
  var res = {
    show: ShowStore.getOne(showId)
  };
  return res;
}

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return getStateFromStore(this.context);
  },
  componentWillMount() {
    ShowActionCreator.loadOne(this.context.router.getCurrentParams().showId);
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
      return (<div>Loading error :(</div>);
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
