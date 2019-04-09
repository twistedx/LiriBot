var axios = require("axios");

var BandInTown = function(term) {
  this.term = term;

  var bitURL =
    "https://rest.bandsintown.com/artists/" +
    term +
    "/events?app_id=codingbootcamp";

  this.concertThis = function(term) {
    axios
      .get(bitURL)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};
module.exports = BandInTown;
