"use strict";

console.log("User View.js, YO!");
var fbCall = require('./firebaseCalls.js');
var cardCreation = require('./cardCreation.js');

///SEE README for issues. Showing movies is user is logged in and has movies///
$("#my-movies").on("click", function(){
    $('.row').empty();
    $("#userView").show();
    $("#searchView").hide();
    fbCall.returnWatchList()
    .then(function(data){
        cardCreation.createCard(data, false);
        console.log(cardCreation);
        console.log(data);
    });
});
