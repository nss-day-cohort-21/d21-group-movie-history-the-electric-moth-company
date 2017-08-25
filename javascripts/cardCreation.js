'use strict';

var movie = require('./getMovies');
var handler = require('./handlers');
var card = {
   createCard: function(movies) {
     let cardMovieKeys = Object.keys(movies);
     $(cardMovieKeys).each((index, item) => {
       let thisMovie = movies[item];
       thisMovie.fbID = cardMovieKeys[index];
       let content =
       `<div class="col s4" id=card--${cardMovieKeys[index]}>
   				<div class="card sticky-action">
   					<div class="card-image waves-effect waves-block waves-light">
   					  <img class="activator icon${thisMovie.movieID}" src="${thisMovie.poster}">
   					</div>
              <div id="bottomStuff">
       					<div class="card-content">
         					  <span class="card-title activator grey-text text-darken-4 icon${thisMovie.movieID} col s10">${thisMovie.title}</span>
                    <i class="material-icons right icon${thisMovie.movieID} col s2 activator">more_vert</i>
       					</div>
       					<div class="card-reveal" id=reveal${thisMovie.movieID}>
       					  <span class="card-title grey-text text-darken-4">Overview<i class="material-icons right">close</i></span>
       					  <p>${thisMovie.overview}</p>
                  <span class="card-title grey-text text-darken-4">Cast</span>
                  <p id=castReveal${thisMovie.movieID}></p>
       					</div>
       					<div class="card-action">
       						<a href="#" id=plus${thisMovie.movieID}><i class="material-icons" >add_circle</i></a>
       						<a href="#" id=watch${thisMovie.movieID}>Watched</a>
                  <div class="rating">
    									<span id="rating--5">☆</span><span id="rating--4">☆</span><span id="rating--3">☆</span><span id="rating--2">☆</span><span id="rating--1">☆</span>
    							</div>
       					</div>
              </div>
   				  </div>`;
        $('.row').append(content);
        handler.moreInfo(thisMovie);
        handler.watchList(thisMovie);
        handler.markWatched(thisMovie);
     });
   }
};

module.exports = card;
