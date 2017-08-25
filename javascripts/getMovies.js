'use strict';
///------GET MOVIE INFO-----///

///SEARCH RESULTS: Queries API for movie search. Not yet looking at user's movies
var movie = {
  getSearch: function (userInput) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=f8112b07f4c5169ae93e7fbddf5c18e0&query=${userInput}`
      }).done((data) => {
        // console.log("data", data.results);
        let results = data.results;
        resolve(results);
      });
    });
  },

///gets the main actors from the cast by taking ID from call above and QUERY cast on new API call
  getCredits: function(movieID) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=f8112b07f4c5169ae93e7fbddf5c18e0`
      }).done((data) => {
        movie.cast = data.cast;
        movie.cast = movie.cast.slice(0, 5);
        // console.log("resolveCast", movie.cast);
        resolve(movie.cast);
      });
    });
  }
};

module.exports = movie;
