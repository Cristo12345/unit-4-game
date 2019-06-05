//variable to store random target number
var targetScore = 0;

//User's score so far, must be reset to 0 after each game
var totalScore = 0;

//vars to store the values of each crystal
var blueValue;
var redValue;
var greenValue;
var yellowValue;


$(document).ready(
    startGame()
);

function startGame() {
    //reset target score for user to achieve
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    $("#target-score-text").html(targetScore);


    //reset user's score
    totalScore = 0;

    //assign random values to each crystal - this method leaves the possibility of different crystals having the same value, however
    blueValue = Math.floor(Math.random() * (13 - 1) + 1);
    redValue = Math.floor(Math.random() * (13 - 1) + 1);
    greenValue = Math.floor(Math.random() * (13 - 1) + 1);
    yellowValue = Math.floor(Math.random() * (13 - 1) + 1);

    // console.log("blueValue: ", blueValue);
    // console.log("redValue: ", redValue);
    // console.log("greeValue: ", greenValue);
    // console.log("yellowValue: ", yellowValue);

}