//Array of letter options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables to hold number of wins, loses, and guesses. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoice = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessChoiceText = document.getElementById("guesschoice-text");

//Run whenever user presses a key.
document.onkeyup = function(event) {

    //Randomly chooses a choice from options array. This is computer's letter choice.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Determines which key was pressed by user.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //Store guesses so far.
    guessChoice.push(userGuess);

    //This logic determines the outcome of the game and increments the appropriate number.
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessChoice.length = 0;
    } else if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessChoice.length = 0;
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    //Display the user wins, losses number guess left and their guesses.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessChoiceText.textContent = "Your Guesses so far: " + guessChoice;    
};