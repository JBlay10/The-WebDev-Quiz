// DOM Elements
const multiChoiceEl = document.getElementById("multipleChoice"); 
const beginBtnEl = document.getElementById("begin"); // Bengin Quiz button
const timeLeftEl = document.getElementById("timer"); // Quiz timer 
const nameEl = document.getElementById("initials"); // Initials for high score

// Main div quiz container
var quizCTrEl = document.getElementById("quizCTR");
// Answers 1 2 3 4 and Submit Score getting the Element from Html
const titleEl = document.getElementById("questions");
const questCtrEl = document.getElementById("questionCTR");
const ans1BtnEl = document.getElementById("answer1");
const ans2BtnEl = document.getElementById("answer2");
const ans3BtnEl = document.getElementById("answer3");
const ans4BtnEl = document.getElementById("answer4");
const submScEl = document.getElementById("submitScore"); // Results of quiz
// High Score and Final Score
const finalScrEl = document.getElementById("userScore");
const highScrEl = document.getElementsByClassName("highScore"); // Goats High Score button

let timeLeft = 75;

// Shuffle questions
let shuffledQuestions, activeQuestionIndex;

// Questions Array
const questions = [ 
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer:  [
            {text: "numbers", correct: false},
            {text: "booleans", correct: false},
            {text: "strings", correct: false},
            {text: "alerts", correct: true}
        ]
    },
    {
        title: "_______ is the process of finding errors and fixing them within a program.",
        choices: ["Compiling", "Executing", "Debbugging", "Scanning"],
        answer: [
            {text: "Executing", correct: false},
            {text: "Debbugging", correct: true},
            {text: "Compiling", correct: false},
            {text: "Scanning", correct: false}
        ]
    },
    {
        title: "A loop that never ends is referred to as a(n)_________.",
        choices: ["While loop", "Infinite loop", "Recursive loop", "for loop"],
        answer: [
            {text: "for loop", correct: false},
            {text: "Recursive loop", correct: false},
            {text: "Infinite loop", correct: true},
            {text: "While loop", correct: false}
        ]
    },
    {
        title: "MJ has just constructed her first for loop within the Java language. \nWhich of the following is not a required part of a for loop?",
        choices: ["Condition", "Increment", "Initialization", "Variable"],
        answer: [
            {text: "Variable", correct: true},
            {text: "Increment", correct: false},
            {text: "Condition", correct: false},
            {text: "Initialization", correct: false}
        ]
    },
    {
        title: "CSS stands for -",
        choices: ["Cascade style sheets", "Color style sheets", "Cascading style sheets", "C plus plus"],
        answer: [
            {text: "Cascade style sheets", correct: false},
            {text: "Color style sheets", correct: false},
            {text: "Cascading style sheets", correct: false},
            {text: "C plus plus", correct: true}
        ]
    }
];

// Default settings
let timerId;
let score = 0;

// Function to change questions Divs
// function changeDiv(act,next) {
//     document.getElementById(act).classList.add('hide');
//     document.getElementById(next).removeAttribute('class')
// };

// FUnction for begin quiz

beginBtnEl.addEventListener("click", quizBegin);

function quizBegin(){
    var beginWindowEl = document.getElementById("beginQuiz");
    beginWindowEl.setAttribute("class", "hide");
    questCtrEl.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    activeQuestionIndex = 0;
    timerId = setInterval(clockTick, 1000);

    timeLeftEl.textContent = timer;
    getQuestion();
}

// Timer function for when quiz begins
function clockTick() {
    console.log("here");
    timeLeftEl.textContent = timeLeft;
            if (timeLeft > 0) {
            //     clearInterval(timeChange);
            timeLeft--;
            timeLeftEl.textContent = timeLeft;
                
            }
            console.log(timeLeft);
}

// This 3 functions getQuestion, activeQuestion and resetState gets a random question from questions array
function activeQuestion(title) {
    console.log(title);
    titleEl.innerText = title.title; 
    title.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        multiChoiceEl.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide")
    while (multiChoiceEl.firstChild) {
        multiChoiceEl.removeChild(multiChoiceEl.firstChild)
    }
}

function getQuestion() {
    activeQuestion(shuffledQuestions[activeQuestionIndex]);
// --------------------------Testing------------------------------
    multiChoiceEl.innerHTML = "";

    activeQuestion.choices.forEach(function(choice, i) {
            var choiceNode = document.createElement("button");
            choiceNode.setAttribute("class", choice)
        }
    )
// ---------------------------------------------------------------
    resetState();
}

// function getQuestion() {
//     // get question object from array
//     var activeQuestion = questions[activeQuestionIndex];

//     // Update title with current question
//    // var titleEl = document.getElementById("questions");
//    titleEl.textContent = activeQuestion.title;
//    // Change questions answers
//    multiChoiceEl.innerHTML = "";
//    // loop choices
//    activeQuestion.choices.forEach(function(choice, i) {
//     var choiceNode = document.createElement("button");
//     choiceNode.setAttribute("class", choice)
//    })
// }

