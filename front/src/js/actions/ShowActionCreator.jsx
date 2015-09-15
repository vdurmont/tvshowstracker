var Actions = require("../actions/Actions.jsx");
var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var ShowClient = require("../clients/ShowClient.js");
var ShowStore = require("../stores/ShowStore.jsx");

module.exports = {
  loadAll: function() {
    // Exit early if we know enough about this show
    if (ShowStore.hasLoadedAll()) {
      return;
    }

    AppDispatcher.dispatchAsync(ShowClient.loadAll(), {
      request: Actions.LOAD_SHOWS,
      success: Actions.LOAD_SHOWS_SUCCESS,
      failure: Actions.LOAD_SHOWS_FAILURE
    }, {});
  },
  loadOne: function(showId) {
    // Exit early if we know enough about this show
    if (ShowStore.has(showId)) {
      return;
    }

    AppDispatcher.dispatchAsync(ShowClient.loadOne(showId), {
      request: Actions.LOAD_SHOW,
      success: Actions.LOAD_SHOW_SUCCESS,
      failure: Actions.LOAD_SHOW_FAILURE
    }, {showId: showId});
  }
}
