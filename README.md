# Word-Guess-Game
The player guesses the letters in a mystery word. The player wins if they can guess all the letters in a word before they the run out of their allotted guesses. Click [HERE]( https://savycodr.github.io/word-guess-game/) to play the game.

### Instructions

* Enter any letter to start the game.

* The letter entered will be displayed under "your guesses so far" at the bottom of the page. Your total number of guesses will decrease by one.

* If the letter entered is in the mystery word, it will be displayed in its proper location in the word. 
 
* The game continues until the player guesses the word or runs out of tries.

* After a few seconds a new game will start.

### Technology

* This application uses Javascript to dynamically update the DOM. It listens for the player to enter a letter and then updates the display with the letter placed within the mystery word and in the letters guessed section. It also updates the number of guesses left. 

* The game uses setTimeout to display the correct answer screen or the winner screen at the end of the game. The screen automatically disappears after 3-5 seconds (depends on the screen, there is extra time to display the correct answer so the player can evaluate how close they were to winning).

* Utilizes Bootstrap CSS library. Uses a font called Pacifico from Google Fonts.

* The game plays audio at the end of a game.

* The game has user validation. It checks that the user has entered a valid letter. It checks that the user has entered a new letter (no repeat guesses).

* The game shuffles the mystery words a the start of a player's session so the player won't experience the same game on refresh.


### Future Enhancements

* This game is mobile responsive, however, it does not work with out a keyboard. I would like to write a keyboard for smaller screens. This would allow you to play the game on tablets and phones.

### Credits
There is a credits page for audio and image files. It can be found at [credits](https://savycodr.github.io/word-guess-game/credit.html).

