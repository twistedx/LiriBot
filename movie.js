var axios = require("axios");
const chalk = require("chalk");

function Movie(term) {
  this.term = term;

  this.movieSearch = function(term) {
    axios
      .get(
        "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy"
      )
      .then(function(response) {
        // Then we print out the imdbRating
        var movie = response.data;

        console.log(chalk.green("---------Title---------"));
        console.log(chalk.red(movie.Title));

        console.log(chalk.green("---------Year of release---------"));
        console.log(chalk.red(movie.Year));

        console.log(chalk.green("---------IMDB Rating---------"));
        console.log(chalk.red(movie.imdbRating));

        console.log("---------Rotten Tomatoes---------");
        if (movie.Ratings.length <= 2) {
          console.log(
            chalk.yellow("Movie does not have a Rotten Tomatoes score")
          );
        } else {
          console.log(chalk.red(movie.Ratings[1].Value));
        }
        console.log(chalk.green("---------Language---------"));
        console.log(chalk.red(movie.Language));

        console.log(chalk.green(`---------Plot of ${term} ---------`));
        console.log(chalk.red(movie.Plot));

        console.log(chalk.green("---------Actors---------"));
        console.log(chalk.red(movie.Actors));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
}
module.exports = Movie;
