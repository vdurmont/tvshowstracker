var Actions = require("../actions/Actions.jsx");
var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var Constants = require("../constants/Constants.js");
var ShowClient = require("../clients/ShowClient.js");

var CHANGE_EVENT = "change";

var _shows = {};

var _loadingShows = {};
var _errorShows = {};

var _loadedAll = false;
var _loadingAll = false;
var _errorAll = false;

var store = assign({}, EventEmitter.prototype, {
  getAll: function() {
    if (_errorAll) {
      return null;
    } else if (_loadingAll) {
      return Constants.IS_LOADING;
    }

    var shows = [];
    for (var key in _shows) {
      shows.push(_shows[key]);
    }
    if (shows.length == 0) {
      return Constants.IS_LOADING;
    }
    return shows;
  },

  getOne: function(showId) {
    if (_errorShows[showId]) {
      return null;
    } else if (_loadingShows[showId]) {
      return Constants.IS_LOADING;
    }

    var show = _shows[showId];
    if (show == null) {
      return Constants.IS_LOADING;
    }
    return show;
  },

  has: function(showId) {
    return _shows[showId] != null;
  },

  hasLoadedAll: function() {
    return _loadedAll;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});
module.exports = store;

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  console.log("Received action in ShowStore: " + JSON.stringify(action)); // TODO sysou

  var shouldEmitEvent = true;
  switch(action.action) {
    case Actions.LOAD_SHOW:
    delete _errorShows[action.query.showId];
    delete _shows[action.query.showId];
    _loadingShows[action.query.showId] = true;
    break;

    case Actions.LOAD_SHOW_SUCCESS:
    delete _loadingShows[action.query.showId];
    delete _errorShows[action.query.showId];
    _shows[action.query.showId] = action.response;
    break;

    case Actions.LOAD_SHOW_FAILURE:
    delete _loadingShows[action.query.showId];
    delete _shows[action.query.showId];
    _errorShows[action.query.showId] = true;
    break;

    case Actions.LOAD_SHOWS:
    _errorAll = false;
    _loadingAll = true;
    break;

    case Actions.LOAD_SHOWS_SUCCESS:
    _errorAll = false;
    _loadingAll = false;
    _loadedAll = true;
    var shows = {};
    action.response.forEach(function(show) {
      shows[show.id] = show;
    });
    _shows = shows;
    break;

    case Actions.LOAD_SHOWS_FAILURE:
    _errorAll = true;
    _loadingAll = false;
    _loadedAll = true;
    break;

    default:
    shouldEmitEvent =  false;
  }

  if (shouldEmitEvent) {
    store.emitChange();
  }
});
