'use strict';

var fire = require('./firebaseCalls');
var movie = require('./getMovies');
var movieInfo = {};
// fire.getDBRef();
var userInput = "Jack Reacher";
movie.getSearch(userInput)
.then((results) => {
  $(results).each((index, item) => {
    movieInfo.title = item.title;
    movieInfo.year = item.release_date;
    movieInfo.poster = `http://image.tmdb.org/t/p/w342${item.poster_path}`;
    movieInfo.overview = item.overview;
    movieInfo.id = item.id;
    console.log("movieInfo", movieInfo);
  });
});
