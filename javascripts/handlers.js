'use strict';

var movie = require('./getMovies');
var fire = require('./firebaseCalls');
var card = require('./cardCreation');


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
          if (thisMovie.movieID === item.movieID) {
            uglyID = watchListKeys[windex];
          }
        });
        if (uglyID === undefined) {
          item.watched = true;
          fire.addToWatchList(item);
        } else {
          fire.markWatched(uglyID);
        }
      });
    });
  },

  rateMovie: function(item, rating){
      fire.returnWatchList()
      .then((watchList) => {
        let uglyID;
        let watchListKeys = Object.keys(watchList);
        $(watchListKeys).each((windex, witem) => {
          let thisMovie = watchList[witem];
          if (thisMovie.movieID === item.movieID){
            console.log("in your watchlis already");
            uglyID = watchListKeys[windex];
          }
        });
        if (uglyID === undefined) {
          item.watched = true;
          item.rating = rating;
          fire.addToWatchList(item);
        } else {
          fire.rateMovie(uglyID, rating);
        }
      });
  },

  toggle: function(item) {
    $('.toggleButton').on("click", function(e) {
      console.log($('.toggleButton'));
      console.log("item", item);
      let moviesToDisplay = {};
      let watchListKeys = Object.keys(item);
      $(watchListKeys).each((windex, witem) => {
        let thisMovie = item[witem];
        if ($(e.target).attr('id') === 'watchList' && thisMovie.watched === false) {
          moviesToDisplay[windex] = thisMovie;
        }

      });
      card.createCard(moviesToDisplay);
    });
  }
};

module.exports = handlers;
