// Bank of Words for the Word Guess Game
// Top Secret!!
var candyWords = [
  "kisses",
  "gum",
  "lollipops",
  "chocolate",
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
];
// keep going until reached 10 tries
var maxTry = 12;

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

// shuffle the array so you don't always get the same order of words
candyWords = shuffle(candyWords);
resetGame();
console.log(candyWords);


// Let's jumble the order of candyWords array, So you never know what you're going to get.
// Fisher-Yates (aka Knuth) Shuffle.
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element... Once element is picked the currentIndex is reduced and so is the range of randomIndex
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

// This function will prepare the screen for a new game
function resetGame()
{
    // if we have run through the entire array of candy words, We will reset and run through them again
    if (numGames==candyWords.length)
    {
        numGames = 0;
    }

    // Get a new top secret candy word
    theWord = candyWords[numGames];
    // set a new displayWord "_ _ _ _"
    displayWord = initDisplayWord(theWord);
    // reset user guesses
    guesses = new Array();
    document.getElementById("guessesSoFar").innerHTML = "no guesses yet";
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
    console.log("HEATHER Word as guessed " + display);
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

// functions to show a div for 3 seconds if player won
function showWin() {
    document.getElementById("winDiv").style.display="block";
    setTimeout("hideWin()", 3000);  // 3 seconds
}

function hideWin() {
    document.getElementById("winDiv").style.display="none";
}

// function to show the answer for 5 seconds if player lost
function showLose() {
    document.getElementById("loseDiv").style.display="block";
    document.getElementById("loseDiv").innerHTML="The Answer is: " + theWord;
    setTimeout("hideLose()", 5000);  // 5 seconds
}

function hideLose() {
    document.getElementById("loseDiv").style.display="none";
}



// MAIN PROCESS
// ==============================================================================
/*
window.addEventListener('touchstart', function() {
    // the user touched the screen!
    alert("you toched the screen");
    //bring up virtual keyboard
  });
*/

// Captures keyboard input. The letter pressed will be the user's guess.
document.onkeyup = function(event) 
{

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var currentGuess = event.key.toLowerCase();
    
    // make sure the current guess is not the enter button
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

        // set array of letters from the displayWord "_ _ a _ s"
        var localDisplay = displayWord.split(" ");
        var displayText = new String();
        var success = false;

        // see if the current guess matches any letters in the candy word
        for (i=0; i<letters.length; i++)
        {
            if (letters[i] === currentGuess)
            {
                // populate the display with current correct letters
                localDisplay[i] = currentGuess;
                numCorrectGuesses++;
                success = true;
                console.log("You did it ");
            }
           
        }
        // if the user guessed a correct letter (one that is in the candy word) we need to change the displayWord
        if (success)
        {
            // turn array into a string again adding back the spaces "_ _ a _ s a"
            for (i=0; i<localDisplay.length; i++)
            {
                displayText = displayText.concat(localDisplay[i] + " ");
            }

            displayWord = displayText;
            console.log("Word as guessed:" + displayWord + ":");
            /*  document.getElementById("displayGuessText").innerHTML = displayText;*/
            document.getElementById("displayGuessText").textContent = displayWord;
        }
        
        numTries++;
    }
    else
    {
        alert("You already guessed this");
        return;
    }
    
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

        // show the winning image for 5 seconds
        showWin();

        // Play some winning music
        var x = document.getElementById("winAudio"); 
        x.play();
        
        // In 3 seconds, reset the game
        setTimeout("resetGame()", 3000);  // 5 seconds
    }
    else if (triesLeft==0)
    {
        // increase losses
        losses++;
        console.log("Losses: " + losses);
        document.getElementById("displayLosses").innerHTML = "Losses: " + losses;
        // show the losing image for 5 seconds
        showLose();
        // Play some losing music
        var x = document.getElementById("loseAudio"); 
        x.play();

        // In 5 seconds, reset the game
        setTimeout("resetGame()", 5000);  // 5 seconds
    }

} 
