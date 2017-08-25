"use strict";

console.log("User View.js, YO!");
var fbCall = require('./firebaseCalls.js');
var handler = require('./handlers');

$("#my-movies").on("click", function(){
    $("#userView").show();
    $("#searchView").hide();
    fbCall.returnWatchList()
    .then((data) => {
      handler.toggle(data);
    });
});
