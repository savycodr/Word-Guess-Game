

// Bank of Words for the Word Guess Game
// Top Secret!!
var candyWords = [
  "kisses"
  /*,
  "lollipops",
  "chocolate",
  "gum",
  "gumdrops",
  "caramel",
  "snickers",
  "mounds",
  "starburst"
  */
];

// Keep playing the game, passing in a new word until we run out of words
for (i=0; i<candyWords.length; i++)
{
    playGame(candyWords[i]);
}
//when we run out of candyWords say goodbye
alert("Thanks for Playing. Good-bye");

// This funcion plays an entire game until their is a win or a loss
// it takes an newWord
function playGame(theWord)
{
    // Creating an empty array for players guesses
    var guesses = new Array();
    // currentGuess needs to come from html
    var currentGuess;
    // keep going until reached 10 tries
    var maxTry = 5;
    // the number of tries so far
    var numTries = 0;
    //the number of games won
    var wins = 0;
    //the number of games lost
    var losses = 0;
    //the display of _ _ _ for the word popluated with correct guesses
    var display = new Array();

    // eventually we will populate this in a loop that repeats when the
    // player wins or loses
    //var theWord = candyWords[0];
    // this will turn theWord into an array of characters
    var letters = theWord.split("");
    // Populate the array of display with one _ for each letter in theWord
    for (i=0; i<letters.length; i++){
        display.push("_");
    }
 
    // When the number of correct guesses equals the length of the word, stop
    var numCorrectGuesses = 0;
    
    // while the number of tries is less than the max allowed tries
    // and while the number of correct guesses is less than the length of word
    while ((numTries<=maxTry) && (numCorrectGuesses<theWord.length)){
        
        currentGuess=prompt("What is your guess?")
        // make sure the current guess is lower case
        currentGuess = currentGuess.toLowerCase()
        //Make sure that the guess hasn't been guessed before
        if (isNewGuess(currentGuess, guesses))
        {
            // place the currentGuess into the list of guesses
            guesses.push(currentGuess);
            // see if the current guess matches any letters in the word
            for (i=0; i<letters.length; i++)
            {
                if (letters[i] === currentGuess)
                {
                    // populate the display with current correct letters
                    display[i] = currentGuess;
                    numCorrectGuesses++;
                    alert("You did it ");
                }
            }
            // Eventually, I want the display to not have commas
            alert(display.join());
            numTries++;
        }
        else
        {
            alert("You already guessed this");
        }

    
    }
    alert(numTries);
    //eventually write nicer code such that numTries doesn't increase on the last run
    // but for now numTries will be bigger than maxTries.
    if (numTries>maxTry)
    {
        // increase losses
        losses++;
        alert("The number of losses " + losses);
    }
    else
    {
        // increase wins
        wins++;
        alert("The number of wins " + wins);
    }
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
