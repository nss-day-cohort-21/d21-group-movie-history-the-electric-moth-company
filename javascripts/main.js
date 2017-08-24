'use strict';

var fire = require('./firebaseCalls');
var movie = require('./getMovies');
var card = require('./cardCreation');
var users = require('./users');
var login = require('./login');

console.log("stuf", fire, movie, card, users);

var movieObject = {};
fire.getDBRef();

$("#search").on('keyup', function (pushEnter) {
  if (pushEnter.which === 13) {
    $('.row').empty();
    let userVal = $("#search").val();
    movie.getSearch(userVal)
    .then((results) => {
      console.log("results", results.length);
      for (var i = 0; i < results.length; i++) {
        let item = results[i];
        movieObject[i] = {
          title: item.title,
          year: item.release_date,
          poster: `http://image.tmdb.org/t/p/w342${item.poster_path}`,
          overview: item.overview,
          movieID: item.id,
          rating: 0,
          watched: false
        };
      }
      card.createCard(movieObject);
    });
    $("#search").val("");
  }
});