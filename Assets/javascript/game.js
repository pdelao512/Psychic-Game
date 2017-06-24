// Define alphabet that computer will use.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Set variables to track wins, losses, ties, and guesses so far.
var Wins = 0;
var Losses = 0;
var Guesses Left = 10;
var guessesSoFar = [];
// userGuess is what the user picks by pressing a key
var userGuess = null;

var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// start listening for events
document.onkeyup = function(event) {

    // When user presses a key, it records it and saves to userGuess
    var userGuess = String.keyUp(event.keyCode).toLowerCase();

    

    // if letterToBeGuessed is same as userGuess then record win then reset guessesLeft to 10.
   
    if (letterToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 10;
        guessesSoFar = [];
        letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }
    // Add the user's guess to guessesSoFar array but if it wasn't already picked by the user
   
    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        // if it is a new letter then decrease remaining guesses by 1
        guessesLeft--;
    }

    // if guessesLeft gets to 0 then record it as a loss
   
    if (guessesLeft == 0) {
        losses++;
        console.log("You lost!");
        guessesLeft = 10;
        guessesSoFar = [];
        letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    // Displaying progress to HTML
    var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I\'m thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + guessesSoFar + "</p>";
   
    document.querySelector("#game").innerHTML = html;

}