function cl(word) {
  console.log(word);
}

function Letter(char, playerGuess) {
  this.char = char;
  this.wasGuessed = false;
  this.playerGuess = playerGuess;

  this.returnLetter = function() {
    cl(this.char);
    return this.char;
  };

  this.letterCheck = function(char, playerGuess) {
    if (char === playerGuess) {
      this.returnLetter();
      return (wasGuessed = true);
    } else {
      return "_";
    }
  };
}
module.exports = Letter;
