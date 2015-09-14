var React = require("react");

module.exports = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value
    );
  },
  render: function() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter a show title"
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />
      </div>
    );
  }
});
