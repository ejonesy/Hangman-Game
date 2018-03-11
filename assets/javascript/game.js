var wins = 0;
var losses = 0;
var guesses = 0;
var remainingGuesses = 10;
var computerChoice = ["himalayan", "persian", "russian blue", "maine coon", "siamese", "ragdoll", "manx"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pickAWord = function() {
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return pickAWord;
}

ocument.onkeyup = function(event) {

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    var userGuess = event.key;

var userAttempt = function(){
    userChoices[Math.floor(Math.random() * userChoices.length)];
    return userAttempt;
};

function isCorrect(userChoices) {
    if (typeof userChoices === computerChoice) {
    console.log("Correct!");
    } else {
        console.log("Wrong!");
    };

}
};
//Press any key to get started --> how to code this?

//Computer picks a word from array but displays it as dashes
//User selects letters and computer confirms if they match any in the hidden word.

document.onkeyup = function(event) {
    //Program responds when user selects a letter
    var userChoices = event.key;
    if (userChoices === computerChoice)
    console.log
};