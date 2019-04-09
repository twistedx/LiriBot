var axios = require("axios");
const chalk = require("chalk");
var moment = require("moment");

var BandInTown = function(term) {
  this.term = term;

  if (term == "") {
    term = "cher";
  }

  var bitURL =
    "https://rest.bandsintown.com/artists/" +
    term +
    "/events?app_id=codingbootcamp";
  this.concertThis = function(term) {
    axios
      .get(bitURL)
      .then(function(response) {
        var count = Object.keys(response.data).length;
        console.log(chalk.red(count));
        if (response.length != 0) {
          console.log(chalk.yellow(`Upcoming concerts for ${term} include: `));

          for (var i = 0; i < count; i++) {
            var temp = response.data[i];
            console.log(chalk.cyan("Venue name: " + temp.venue.name));
            if (temp.venue.country == "United States") {
              console.log(
                "City: " + temp.venue.city + ", " + temp.venue.region
              );
            } else {
              console.log(
                "City: " + temp.venue.city + ", " + temp.venue.country
              );
            }
            console.log("Date: " + moment(temp.datetime).format("MM/DD/YYYY"));
            console.log();
          }
        } else {
          console.log(`${term} has no upcoming concerts`);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};
module.exports = BandInTown;
