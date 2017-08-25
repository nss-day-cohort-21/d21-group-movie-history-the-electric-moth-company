'use strict';

var movie = require('./getMovies');
var fire = require('./firebaseCalls');


var handlers = {
  moreInfo: function(item) {
    $(`.icon${item.movieID}`).on("click", (e) => {
      if ($(`#castReveal${item.movieID}`).html() !== '') {

      } else {
        movie.getCredits(item.movieID)
        .then((cast) => {
          $(`#castReveal${item.movieID}`).html('');
          $(cast).each((cindex, citem) => {
            $(`#castReveal${item.movieID}`).append(`${citem.name} | `);
          });
        });
      }
    });
  },

  watchList: function(item) {
    $(`#plus${item.movieID}`).on("click", (e) => {
      e.preventDefault();
      fire.returnWatchList()
      .then((watchList) => {
        let movieIDArr = [];
        let watchListKeys = Object.keys(watchList);
        $(watchListKeys).each((windex, witem) => {
          let thisMovie = watchList[witem];
          movieIDArr.push(thisMovie.movieID);
        });
        if (movieIDArr.indexOf(item.movieID) === -1) {
          fire.addToWatchList(item);
        }
      });
    });
  },

  markWatched: function(item) {
    $(`#watch${item.movieID}`).on("click", (e) => {
      e.preventDefault();
      fire.returnWatchList()
      .then((watchList) => {
        let uglyID;
        let watchListKeys = Object.keys(watchList);
        $(watchListKeys).each((windex, witem) => {
          let thisMovie = watchList[witem];
          if (thisMovie.movieID ===  item.movieID) {
            uglyID = watchListKeys[windex];
          }
        });
        if (uglyID === undefined) {
          item.watched = true;
          fire.addToWatchList(item);
        } else {
          fire.markWatched(item, uglyID);
        }
      });
    });
  }
};

module.exports = handlers;
