var Letter = require("./Letter.js");

function cl(word) {
  console.log(word);
}
// "t", "e", "s", "t"
var gameWord = [];

function Word(word, playerGuess) {
  this.word = word;
  gameWord = this.word.split("");
  this.playerGuess = playerGuess;

  this.wordString = function() {
    for (var i = 0; i < gameWord.length; i++) {
      var temp1 = new Letter(gameWord[i], word.playerGuess);
      temp1.letterCheck(gameWord[i], word.playerGuess);
      console.log(temp1);
    }
  };
}

var temp = new Word("test", "c");

console.log(temp);
console.log(gameWord);
