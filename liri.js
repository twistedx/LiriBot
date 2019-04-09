require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var bit = require("./bit");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var search = process.argv[2];
var term = process.argv.splice(3, 0).join(" ");

function startIt() {
  if (search === "concert-this") {
    var Btown = new bit(term);
    Btown.concertThis(term);
  } else if (search === "spotify-this-song") {
    console.log("Spot");
  } else if (search === "movie-this") {
    console.log("movie");
  } else if (search === "do-what-it-says") {
    console.log("simon says");
  } else {
    console.log("Yeah no it didnt work");
  }
}
var BandInTown = function() {
  var bitURL =
    "https://rest.bandsintown.com/artists/" +
    term +
    "/events?app_id=codingbootcamp";
  this.concertThis = function() {
    axios.get(bitURL).then(function(response) {
      console.log(response);
    });
  };
};

startIt();
