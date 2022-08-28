// DOM Elements
const multiChoiceEl = document.getElementById("multipleChoice"); 
const beginBtnEl = document.getElementById("begin"); // Bengin Quiz button
const timeLeftEl = document.getElementById("timer"); // Quiz timer 
const nameEl = document.getElementById("initials"); // Initials for high score
const nextBtn = document.getElementById("nextBtn");
// Main div quiz container
var quizCTrEl = document.getElementById("quizCTR");
// Answers 1 2 3 4 and Submit Score getting the Element from Html
const titleEl = document.getElementById("questions");
const questCtrEl = document.getElementById("questionCTR");
const submScEl = document.getElementById("submitScore"); // Results of quiz
// High Score and Final Score
const finalScrEl = document.getElementById("userScore");
const highScrEl = document.getElementsByClassName("highScore"); // Goats High Score button

// Questions Array
const questions = [ 
    {
        title: "Commonly used data types DO NOT include:",
        answer:  [
            {text: "numbers", correct: false},
            {text: "booleans", correct: false},
            {text: "strings", correct: false},
            {text: "alerts", correct: true}
        ]
    },
    {
        title: "_______ is the process of finding errors and fixing them within a program.",
        answer: [
            {text: "Executing", correct: false},
            {text: "Debbugging", correct: true},
            {text: "Compiling", correct: false},
            {text: "Scanning", correct: false}
        ]
    },
    {
        title: "A loop that never ends is referred to as a(n)_________.",
        answer: [
            {text: "for loop", correct: false},
            {text: "Recursive loop", correct: false},
            {text: "Infinite loop", correct: true},
            {text: "While loop", correct: false}
        ]
    },
    {
        title: "MJ has just constructed her first for loop within the Java language. \nWhich of the following is not a required part of a for loop?",
        answer: [
            {text: "Variable", correct: true},
            {text: "Increment", correct: false},
            {text: "Condition", correct: false},
            {text: "Initialization", correct: false}
        ]
    },
    {
        title: "CSS stands for -",
        answer: [
            {text: "Cascade style sheets", correct: false},
            {text: "Color style sheets", correct: false},
            {text: "Cascading style sheets", correct: true},
            {text: "C plus plus", correct: false}
        ]
    }
];

// Default settings
let timerId;
let score = 0;
let timeLeft = 75;

// Shuffle questions
let shuffledQuestions, activeQuestionIndex;


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
    timeLeftEl.classList.remove("hide");
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
function activeQuestion(question) {
    titleEl.innerText = question.title
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        multiChoiceEl.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    addClassRW(documen.body, correct)
    Array.from(multiChoiceEl.children).forEach(button => {
        addClassRW(button, button.dataset.correct)
    })
}

function resetState() {
    nextBtn.classList.add("hide")
    while (multiChoiceEl.firstChild) {
        multiChoiceEl.removeChild(multiChoiceEl.firstChild)
    }
}

function getQuestion() {
    resetState()
    activeQuestion(shuffledQuestions[activeQuestionIndex])
}

// Function to check answer right or wrong (Not working properly)
function addClassRW(element, correct) {
    removeClassRW(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function removeClassRW(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

