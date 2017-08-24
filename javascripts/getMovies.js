'use strict';

var movie = {
  getSearch: function (userInput) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=f8112b07f4c5169ae93e7fbddf5c18e0&query=${userInput}`
      }).done((data) => {
        console.log("data", data.results);
        let results = data.results;
        resolve(results);
      });
    });
  },

  getCredits: function(movieID) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=f8112b07f4c5169ae93e7fbddf5c18e0`
      }).done((data) => {
        movie.cast = data.cast;
        // movie.cast = movie.cast.slice(0, 5);
        console.log("resolveCast", movie.cast);
        resolve(movie.cast);
      });
    });
  }
};

module.exports = movie;
