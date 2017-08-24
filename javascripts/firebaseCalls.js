'use strict';

var firebase = require('../lib/node_modules/firebase');

var config = {
    apiKey: "AIzaSyB_qfhqUeYQaHqPmFeh-_ewd_uHkF2whnI",
    authDomain: "moviehistorydb.firebaseapp.com",
    databaseURL: "https://moviehistorydb.firebaseio.com",
    projectId: "moviehistorydb",
    storageBucket: "moviehistorydb.appspot.com",
    messagingSenderId: "1015573230583"
};
firebase.initializeApp(config);

var fdr = firebase.database();
var uid = 'apd123';
var id = 123413;
var fire = {
  getDBRef: function() {
    let dbRef = fdr.ref();
    // dbRef.push({
    //   uid: uid,
    //   id: id,
    //   title: "Saving Private Ryan",
    //   description: "War. Guns. Blood. Comradery. Fortitude. Best. Movie. Ever.",
    //   img: 'https://www.google.com',
    //   rating: 0,
    //   watched: false,
    // });
  }
};

module.exports = fire;
