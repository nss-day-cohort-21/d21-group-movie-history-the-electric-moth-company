"use strict";

console.log("User View.js, YO!");
var fbCall = require('./firebaseCalls.js');
var cardCreation = require('./cardCreation.js');

$("#my-movies").on("click", function(){
  $('#searchView').html('');
  $('#userview-content').html('');
  $('.row').empty();
  $("#userView").show();
  $("#searchView").hide();
  fbCall.returnWatchList()
  .then(function(data){
      cardCreation.createCard(data, false, true);
      console.log(cardCreation);
      console.log(data);
  });
});
