var React = require("react");

// TODO Fake data
var SHOWS = [
  {id: 1, title: "The S.H.I.E.L.D", description: "Suite aux évènements survenus dans THE AVENGERS, l'agent Phil Coulson retourne au sein de l'organisation mondiale du maintien de l'ordre, le S.H.I.E.L.D., pour y mettre sur pied une petite équipe d'agents extrêmement bien entraînés afin de s'attaquer aux affaires non encore classées ayant un trait aux phénomènes nouveaux, étranges et inconnus. Constistuée du très intègre agent Grant Ward, expert en combat et renseignements, de l'agent Melinda May, pilote émérite et experte en arts martiaux et des très brillants, si ce n'est un peu étranges socialement, agents scientifiques Leo Fitz et Jemma Simmons, l'équipe sera épaulée par Skye, nouvelle recrue civile, hacker et fan de super-héros."},
  {id: 2, title: "The Glades", description: "Un détective doté d'un grand sens de l'humour déménage dans une petite ville de Floride et rejoint la police locale après s'être fait tirer dessus par son ancien patron qui croyait, à tort, qu'il avait couché avec sa femme !"},
  {id: 3, title: "The Finder", description: "Des enquêtes menées par un ex de la police militaire particulièrement habile dans son métier, autrement dit une vraie petite fouine capable de dénicher n'importe quelle information, un philosophe et une badass sexy aussi habile un manche d'hélicoptère à la main que derrière son bar..."},
  {id: 4, title: "White Collar", description: "L'association inattendue entre un agent du FBI et son pire ennemi, un malfaiteur-gentleman qu'il poursuit depuis des années ! Quand Neal Caffrey s'échappe d'une prison de haute sécurité pour retrouver son amour perdu, l'agent du FBI Peter Burke l'arrête à nouveau. Pour éviter de retourner en prison, Neal propose à son rival une solution alternative : sa liberté en échange de son aide pour traquer d'autres criminels..."}
];

module.exports = {
  loadAll: function(success, failure) {
    // TODO Fake loading
    setTimeout(function() {
      success(SHOWS);
    }, 1000);
  },

  loadOne: function(showId, success, failure) {
    // TODO Fake loading
    setTimeout(function() {
      var res;
      SHOWS.forEach(function(show) {
        if (showId == show.id) {
          res = show;
        }
      });
      if (res) {
        success(res);
      } else {
        failure();
      }
    }, 1000);
  }
};
