'use strict';

var movie = require('./getMovies');
var fire = require('./firebaseCalls');


var handlers = {
  moreInfo: function(item) {
    $(`#icon${item.movieID}`).on("click", (e) => {
      movie.getCredits(item.movieID)
      .then((cast) => {
        $(`#castReveal${item.movieID}`).html('');
        $(cast).each((cindex, citem) => {
          $(`#castReveal${item.movieID}`).append(`${citem.name} | `);
        });
      });
    });
  },

  watchList: function(item) {
    console.log("item", item);
    $(`#plus${item.movieID}`).on("click", (e) => {
      //if not in watchlist from firebase already
      //write in functionality later
      // let uid = login.login();
      fire.addToWatchList(item);

    });
  }
};

module.exports = handlers;
