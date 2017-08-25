"use strict";

let user = require('./users');

//***************************************************************
// User login section. Should ideally be in its own module

$("#auth-btn").click(function() {
  // console.log("clicked auth");
  user.logInGoogle()
  .then((result) => {
    // console.log("result from login", result.user.uid);
    // user = result.user.uid;
    user.setUser(result.user.uid);
    $("#auth-btn").addClass("is-hidden");
    $("#logout").removeClass("is-hidden");
  });
});

$("#logout").click(() => {
  // console.log("logout clicked");
  user.logOut();
  $("#auth-btn").removeClass("is-hidden");
  $("#logout").addClass("is-hidden");
});
