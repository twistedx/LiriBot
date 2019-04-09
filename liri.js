var Bit = require("./bit");
var Spot = require("./spot");
var Movie = require("./movie");
var fs = require("fs");

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

function startIt() {
  if (search === "concert-this") {
    var Btown = new Bit(term);
    Btown.concertThis(term);
  } else if (search === "spotify-this-song") {
    var spot = new Spot(term);
    spot.Ssearch();
  } else if (search === "movie-this") {
    var movie = new Movie(term);
    movie.movieSearch(term);
    console.log("movie");
  } else if (search === "do-what-it-says") {
    doWhatItSays();
  } else {
    console.log("Yeah no it didnt work");
  }
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(err, response) {
    if (err) {
      console.log(err);
    }
    let file = response.split(",");
    search = file[0];
    term = file[1];
    startIt();
  });
}
startIt(search, term);
