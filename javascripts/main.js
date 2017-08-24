'use strict';

var fire = require('./firebaseCalls');
var movie = require('./getMovies');
var card = require('./cardCreation');
var users = require('./users');
var login = require('./login');
var handlers = require('./handlers');

fire.getDBRef();

var movieObject = {};
var userInput = "Finding Nemo";
movie.getSearch(userInput)
.then((results) => {
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
