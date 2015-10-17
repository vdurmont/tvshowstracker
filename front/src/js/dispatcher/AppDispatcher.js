var Dispatcher = require("flux").Dispatcher;

var fluxDispatcher = new Dispatcher();

function dispatch(action, data) {
  if (!action) {
    throw new Error("You forgot to specify an action type.");
  }
  if (!data) {
    data = {};
  }

  var obj = {
    action: action,
    query: data.query,
    error: data.error,
    response: data.response
  };

  fluxDispatcher.dispatch(obj);
}

module.exports = {
  register: function(callback) {
    return fluxDispatcher.register(callback);
  },

  waitFor: function(ids) {
    return fluxDispatcher.waitFor(ids);
  },

  dispatch: function(action, data) {
    dispatch(action, data);
  },

  dispatchAsync: function(promise, actions, query) {
    if (!query) {
      query = {};
    }

    var action = {
      query: query
    };

    // Dispatch a request action
    dispatch(actions.request, action);

    // Launch the request
    promise.then(function(response) {
      dispatch(actions.success, { query: query, response: response });
    }, function(err) {
      dispatch(actions.failure, { query: query, error: err });
    });
  }
};
