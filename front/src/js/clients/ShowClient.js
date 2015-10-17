var Q = require("q");
var $ = require("jquery");

function get(path) {
  var deferred = Q.defer();

  // TODO Move this in a config file
  var url = "http://localhost:9001" + path;

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
    return get("/shows/" + showId);
  }
};
