var Q = require("q");
var $ = require("jquery");

function get(path) {
  var deferred = Q.defer();

  // TODO fix the API urls :D
  var url = path.replace("/shows", "http://localhost:9001/controllers/ShowsController.hh");

  $.get(url, function(data) {
    deferred.resolve(data);
  }).fail(function(err) {
    deferred.reject(err.responseJSON);
  });
  return deferred.promise;
}

module.exports = {
  loadAll: function() {
    return get("/shows");
  },
  loadOne: function(showId) {
    return get("/shows?id=" + showId);
  }
};
