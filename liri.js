require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.splice(3, 0).join(" ");

console.log("To enter a search type concert-this");

var bit = new BandInTown();

if (search === "concert-this") {
  bit.concertThis();
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
