'use strict';

var movie = require('./getMovies');

var card = {
   createCard: function(movies) {
     $(movies).each((index, item) => {
       console.log(`itemmmmm`, item);
     });
   }
};

module.exports = card;
