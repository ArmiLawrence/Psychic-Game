

// VARIABLES
// ==========================================================================    

// Creates an array that lists out all of the options (all the alphabet).
var computerChoices = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k","l","m", "n", "o","p","q","r","s","t","u", "v", "w", "x", "y","z"];

// Creating the array for User and computer Choices

var userArray = []
var computerArray = []

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;

// Creating variable for max number of tries
var remainingGuess = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var userArrayText = document.getElementById("userArray-text");
var computerArrayText = document.getElementById("computerArray-text");
var remainingGuessText = document.getElementById("remainingGuess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var gameplayText = document.getElementById("gameplay-text");


// GLOBAL FUNCTIONS
// ==============================================================================

function resetGame(){
  if (remainingGuess < 0){
    userArray = []
    computerArray = []
    wins = 0;
    losses = 0;
    remainingGuess = 10;
    gameplayText.textContent = "Let's Play!";
  }
};

// MAIN PROCESS
// ==============================================================================

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userGuess = event.key.toLowerCase();
          // Insert values to userArray
            userArray.push(userGuess);


        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          // Insert values to computerArray
            computerArray.push(computerGuess);


        // Let's play the game!
        // This logic determines the outcome of the game (win/loss), and increments the appropriate number
        if (userGuess === computerGuess) {
                  wins++;
                  remainingGuess--;
            } 
              else {
                  losses++;
                  remainingGuess--;
                }     
        if (remainingGuess === 0) {
              gameplayText.textContent = "Game Over";
              } 


        // Display the user and computer guesses, and wins/losses.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "Psychic chose: " + computerGuess;
        userArrayText.textContent = "You have chosen these letters: " + userArray;
        computerArrayText.textContent = "Psychic has chosen these letters: " + computerArray;
        remainingGuessText.textContent = "Remaining guesses: " + remainingGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;

        // Set the game up again;
        resetGame();

      };