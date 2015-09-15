// TODO var AppDispatcher = require("../dispatcher/AppDispatcher");
// TODO var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var Constants = require("../constants/Constants.js");
var ShowClient = require("../clients/ShowClient.js");

var CHANGE_EVENT = "change";

var _loadAllCalled = false;
var _loadOneCalled = {};
var _shows = {};

module.exports = assign({}, EventEmitter.prototype, {
  getAll: function() {
    if (_loadAllCalled) {
      return _shows;
    }
    var that = this;
    ShowClient.loadAll(function(shows) {
      _loadAllCalled = true;
      _shows = shows;
      that.emitChange();
    }, function(err) {
      // TODO
      console.log("Err occurred in loadAll");
    });
    return Constants.IS_LOADING;
  },

  getOne: function(showId) {
    if (_loadAllCalled || _loadOneCalled[showId]) {
      return _shows[showId];
    }
    var that = this;
    ShowClient.loadOne(showId, function(show) {
      _loadOneCalled[showId] = true;
      _shows[showId] = show;
      that.emitChange();
    }, function(err) {
      // TODO
      console.log("Err occurred in loadOne with showId=" + showId);
    });
    return Constants.IS_LOADING;
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

// // Register callback to handle all updates
// AppDispatcher.register(function(action) {
//   var text;
//
//   switch(action.actionType) {
//     case TodoConstants.TODO_CREATE:
//     text = action.text.trim();
//     if (text !== '') {
//       create(text);
//       TodoStore.emitChange();
//     }
//     break;
//
//     case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
//     if (TodoStore.areAllComplete()) {
//       updateAll({complete: false});
//     } else {
//       updateAll({complete: true});
//     }
//     TodoStore.emitChange();
//     break;
//
//     case TodoConstants.TODO_UNDO_COMPLETE:
//     update(action.id, {complete: false});
//     TodoStore.emitChange();
//     break;
//
//     case TodoConstants.TODO_COMPLETE:
//     update(action.id, {complete: true});
//     TodoStore.emitChange();
//     break;
//
//     case TodoConstants.TODO_UPDATE_TEXT:
//     text = action.text.trim();
//     if (text !== '') {
//       update(action.id, {text: text});
//       TodoStore.emitChange();
//     }
//     break;
//
//     case TodoConstants.TODO_DESTROY:
//     destroy(action.id);
//     TodoStore.emitChange();
//     break;
//
//     case TodoConstants.TODO_DESTROY_COMPLETED:
//     destroyCompleted();
//     TodoStore.emitChange();
//     break;
//
//     default:
//     // no op
//   }
// });
