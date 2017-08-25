"use strict";

console.log("User View.js, YO!");
var fbCall = require('./firebaseCalls.js');

$("#my-movies").on("click", function(){
    $("#userView").show();
    $("#searchView").hide();
    console.log(fbCall.returnWatchList());
});
