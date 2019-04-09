require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const chalk = require("chalk");

function spot(term) {
  this.term = term;

  if (term == "") {
    term = "Sexual Healing";
  }

  this.Ssearch = function() {
    spotify.search({ type: "track", query: term, limit: 1 }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      var song = data.tracks.items[0];
      if (song != undefined) {
        console.log();
        console.log(chalk.blue("-------Song-------"));
        console.log(chalk.green(song.name));

        console.log(chalk.blue("********* Artist Info *********"));
        console.log(chalk.green(song.album.artists[0].name));

        console.log(chalk.blue(`---------- Preview of ${term} ----------`));
        console.log(chalk.green(song.preview_url));

        console.log(chalk.blue(`************ Album ************`));
        console.log(chalk.green(song.album.name));
      }
    });
  };
}

module.exports = spot;
