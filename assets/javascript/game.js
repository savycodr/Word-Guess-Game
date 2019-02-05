// Bank of Words for the Word Guess Game
// Top Secret!!
var candyWords = [
  "kisses",
  "gum"
  /*,
  "lollipops",
  "chocolate",
  "gum",
  "gumdrops",
  "caramel",
  "snickers",
  "mounds",
  "starburst",
  "smarties",
  "rolo",
  "zagnut",
  "reeses",
  "spree",
  "skittles",
  "twix"
  */
];
// keep going until reached 10 tries
var maxTry = 5;

//the number of games won
var wins = 0;
//the number of games lost
var losses = 0;
// the number of games so far
var numGames = 0;



// Need to display the number of wins
console.log("Wins: " + wins);
document.getElementById("displayWins").innerHTML = "Wins: " + wins;
console.log("Losses: " + losses);
document.getElementById("displayLosses").innerHTML = "Losses: " + losses;
console.log("Number of Tries Left: " + maxTry);
document.getElementById("displayTriesLeft").innerHTML = "Number of Tries Left: " + maxTry;

// the secret word selected from array of Candy Words
var theWord;
// the displayed text showing the letters in the word
var displayWord;
// An array for players guesses
var guesses;
// the number of correct guesses 
var numCorrectGuesses;
// theWord turned into an array of characters
var letters;
// the number of tries so far 
var numTries;


resetGame();

function resetGame()
{
    // Get a new word
    theWord = candyWords[numGames];
    // set a new displayWord
    displayWord = initDisplayWord(theWord);
    // reset guesses
    guesses = new Array();
    document.getElementById("guessesSoFar").innerHTML = "";
    //reset numCorrectGuesses
    numCorrectGuesses = 0;
    // set array of letters from theWord
    letters = theWord.split("");
    // reset the number of tries
    numTries = 0;
    document.getElementById("displayTriesLeft").innerHTML = "Number of Tries Left: " + maxTry;
    //Increase the number of games for next time
    numGames++;
}

// This function creates the initial display of _ _ _ _  for the word
// it returns the string of "_ _ _ _ "
function initDisplayWord(theWord)
{
  //the display of _ _ _ for the word one _ for each letter in the word
  var display = new String();
  var letters = theWord.split("");
  // Populate the array of display with one _ for each letter in theWord
  for (i=0; i<letters.length; i++){
      display = display.concat("_ ");
  }
   //Print the word to display for user to see
    //Eventually need to get rid of commas
    console.log("HEATHER Word as guessed" + display);
    document.getElementById("displayGuessText").innerHTML =  display;
    return display;
}

// this function returns true if the input has never been guessed before in this game
function isNewGuess(newGuess, guesses)
{
    // We loop through the guesses array...
    for (var j = 0; j < guesses.length; j++) {
        // check newGuess against all the previous guesses
        console.log(guesses[j]);
        if (guesses[j]===newGuess)
        {
            return false;
        }
    }
    // this code is executed when guesses.length is zero (first guess)
    // or when it is a new guess
    return true;
}

// MAIN PROCESS
// ==============================================================================

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) 
{

    // currentGuess needs to come from html
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var currentGuess = event.key.toLowerCase();
    
    // make sure the current guess is not enter button
    if (currentGuess.length !== 1) 
    { 
        alert("Please enter a letter");
        return;
    }
    // make sure currentGuess is a letter 
    else if (currentGuess == currentGuess.toUpperCase())
    {
        alert("Please enter a REAL letter");
        return;
    }
    //Make sure that the guess hasn't been guessed before
    else if (isNewGuess(currentGuess, guesses))
    {
        // place the currentGuess into the list of guesses
        guesses.push(currentGuess);

        // Display the guess to user
        console.log("Guesses so far " + guesses.join());
        document.getElementById("guessesSoFar").innerHTML = guesses.join();

        // New array loses all of the previous right answers
        // need to work with displayWord array
        // set array of letters from theWord
        var localDisplay = displayWord.split(" ");
        var displayText = new String();

        // see if the current guess matches any letters in the word
        for (i=0; i<letters.length; i++)
        {
            if (letters[i] === currentGuess)
            {
                // populate the display with current correct letters
                localDisplay[i] = currentGuess;
                numCorrectGuesses++;
                alert("You did it ");
            }
           
        }
        // turn array into a string again
        for (i=0; i<localDisplay.length; i++)
        {
            console.log(":"+localDisplay[i]+":")
            displayText = displayText.concat(localDisplay[i] + " ");
        }

        displayWord = displayText;
        alert(displayWord);
        console.log("Word as guessed" + displayWord);
        /*  document.getElementById("displayGuessText").innerHTML = displayText;*/
        document.getElementById("displayGuessText").textContent = displayWord;
        numTries++;
    }
    else
    {
        alert("You already guessed this");
        return;
    }
    
    // this alerts more than number of tries
    alert(numTries);
    var triesLeft = maxTry-numTries;
    console.log("Number of Tries Left: " + triesLeft);
    document.getElementById("displayTriesLeft").innerHTML = "Number of Tries Left: " + triesLeft;


    /// Number of correct guesses is equal to the length of the word
    if (numCorrectGuesses==theWord.length)
    {
        // increase wins
        wins++;
        console.log("Wins: " + wins);
        document.getElementById("displayWins").innerHTML = "Wins: " + wins;
        // WANT TO SHOW DANCE AND PONY SHOW BEORE RESET GAME
        resetGame();
    }
    else if (triesLeft==0)
    {
        // increase losses
        losses++;
        console.log("Losses: " + losses);
        document.getElementById("displayLosses").innerHTML = "Losses: " + losses;
        // WANT TO SHOW ANSWER BEORE RESET GAME
        resetGame();
    }

} 
 

