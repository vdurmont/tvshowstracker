// TODO var AppDispatcher = require("../dispatcher/AppDispatcher");
// TODO var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = "change";

// TODO get from server
var _shows = {
  1: {id: 1, title: "The S.H.I.E.L.D", description: "Suite aux évènements survenus dans THE AVENGERS, l'agent Phil Coulson retourne au sein de l'organisation mondiale du maintien de l'ordre, le S.H.I.E.L.D., pour y mettre sur pied une petite équipe d'agents extrêmement bien entraînés afin de s'attaquer aux affaires non encore classées ayant un trait aux phénomènes nouveaux, étranges et inconnus. Constistuée du très intègre agent Grant Ward, expert en combat et renseignements, de l'agent Melinda May, pilote émérite et experte en arts martiaux et des très brillants, si ce n'est un peu étranges socialement, agents scientifiques Leo Fitz et Jemma Simmons, l'équipe sera épaulée par Skye, nouvelle recrue civile, hacker et fan de super-héros."},
  2: {id: 2, title: "The Glades", description: "Un détective doté d'un grand sens de l'humour déménage dans une petite ville de Floride et rejoint la police locale après s'être fait tirer dessus par son ancien patron qui croyait, à tort, qu'il avait couché avec sa femme !"},
  3: {id: 3, title: "The Finder", description: "Des enquêtes menées par un ex de la police militaire particulièrement habile dans son métier, autrement dit une vraie petite fouine capable de dénicher n'importe quelle information, un philosophe et une badass sexy aussi habile un manche d'hélicoptère à la main que derrière son bar..."},
  4: {id: 4, title: "White Collar", description: "L'association inattendue entre un agent du FBI et son pire ennemi, un malfaiteur-gentleman qu'il poursuit depuis des années ! Quand Neal Caffrey s'échappe d'une prison de haute sécurité pour retrouver son amour perdu, l'agent du FBI Peter Burke l'arrête à nouveau. Pour éviter de retourner en prison, Neal propose à son rival une solution alternative : sa liberté en échange de son aide pour traquer d'autres criminels..."}
};

module.exports = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _shows;
  },

  getOne: function(showId) {
    return _shows[showId];
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
