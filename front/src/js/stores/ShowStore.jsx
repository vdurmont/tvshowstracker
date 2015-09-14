// TODO var AppDispatcher = require("../dispatcher/AppDispatcher");
// TODO var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = "change";

// TODO get from server
var _shows = {
  1: {id: 1, title: "The S.H.I.E.L.D"},
  2: {id: 2, title: "The Glades"},
  3: {id: 3, title: "The Finder"},
  4: {id: 4, title: "White Collar"}
};

module.exports = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _shows;
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
