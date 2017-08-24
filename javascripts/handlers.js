'use strict';

var movie = require('./getMovies');

var handlers = {
  moreInfo: function(item) {
    $(`#icon${item.movieID}`).on("click", (e) => {
      console.log("movieID", item.movieID);
      movie.getCredits(item.movieID)
      .then((cast) => {
        $(`#castReveal${item.movieID}`).html('');
        $(cast).each((cindex, citem) => {
          $(`#castReveal${item.movieID}`).append(`${citem.name} | `);
        });
      });
    });
  },

  markWatched: function(item) {
    $(`#watch${item.movieID}`).on("click", (e) => {
      //if not in watchlist from firebase already
      //write in functionality later

    });
  }
};

module.exports = handlers;
