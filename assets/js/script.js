var highScBtnEl = document.getElementsByClassName("highScore"); // Goats High Score button
var beginBtnEl = document.getElementById("beginQuiz"); // Bengin Quiz button
var timeLeftEl = document.getElementsByClassName("timer"); // Quiz timer 
var nameEl = document.getElementById("initials"); // Initials for high score
// Main div quiz container
var quizCTrEl = document.getElementsByClassName("quizCTR");
// Answers 1 2 3 4 and Submit Score getting the Element from Html
var ans1BtnEl = document.getElementById("answer1");
var ans2BtnEl = document.getElementById("answer2");
var ans3BtnEl = document.getElementById("answer3");
var ans4BtnEl = document.getElementById("answer4");
var submScEl = document.getElementById("submitScore"); // Results of quiz
// High Score and Final Score
var finalScrEl = document.getElementById("userScore");
var highScrEl = document.getElementsByClassName("highScore");

// Timer function
function gameBegin() {
    let timeLeft = 75;
    timeLeftEl.textContent = timeLeft;
    var timeChange = setInterval(
        () => {
            timeLeft--;
            timeLeftEl.textContent = timeLeft;
            if (timeLeft = 0) {
                
            }
        }
    )
}