
var time = 100; // to tick down with incorrect answers
var initials = ''; // to log add the end with my score
var score = 0; // final score
var questions = [ // questions, choices, and correct answer
    {
        question: "What does the 'DOM' stand for?",
        choices: ['A) Document of Model', 'B) Description of Model', 'C) Document Object Model', 'D) Descriptive Object Model'],
        answer: 'D) Descriptive Object Model'
    },
    {
        question: "In JavaDcript, which is an example of correctly 'calling' a function?",
        choices: ['A) exampleFunction();', 'B) Example Function();', 'C) exampleFunction[];', 'D) example = function();'],
        answer: 'A) exampleFunction();'
    },
    {
        question: "This will be question 3",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) None of the above'],
        answer: "choice 2"
    },
    {
        question: "This will be question 4",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 4"
    },
    {
        question: "This will be question 5",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 3"
    },
    {
        question: "This will be question 6",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 4"
    },
    {
        question: "This will be question 7",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 2"
    },
    {
        question: "This will be question 8",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 1"
    },
    {
        question: "This will be question 9",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 1"
    },
    {
        question: "This will be question 10",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 3"
    },

]

var startBtn = document.querySelector(".start-btn");
var mainContainer = document.querySelector(".main-container");
var timer = document.querySelector(".timer");
var viewScores = document.querySelector('.view-scores');
var answerOptions = document.getElementsByClassName('a-btn'); // array, since selecting ALL the options
var displayedQuestion = document.querySelector('#question');
var currentQuestion = 0; // to track current question, bc the 1st index of an array is 0, which is whats holding the questions.then increase it each time I get the next question by 1

// function starts once start button is clicked 
function startQuiz() {
    mainContainer.classList.remove("hide");
    startBtn.classList.add("hide");
    getQuestion();
    getChoices();
    addEventListenersToAnswerOptions();
    checkAnswers();
    // repeat
}

// Getting all the questions, and index will display the first one
let index = 0;
function getQuestion() {
    displayedQuestion.innerText = questions[currentQuestion].question;
}

//  loop to get all the options/choices -> assign the event listener to each and check if the answer is correct and move to the next question with index++ to display 1 by 1
function getChoices() {
    for (let i = 0; i < 4; i++) {
        // console.log(questions[i].choices[i]);
        answerOptions[i].innerText = questions[currentQuestion].choices[i];
    }
}

function checkAnswers(event) { // event listener runs when answer btn clicked -> check if event.target === the questions.answer
    if (event.target.innerText === questions[currentQuestion].answer) {
        score++;
    } else {
        time--;
    };
    currentQuestion++;
    getQuestion();
    getChoices();
    console.log('checkAnswers function ran');
    if (currentQuestion === 9) { // for some reason once i set to 10, it won't hide!
        mainContainer.classList.add("hide");
        // then remove 'hide' from a container that shows the scores!
    }
}

function addEventListenersToAnswerOptions() { // answerOptions is an HTML Collection, so cannot directly add event listeners using addEventListener. looping through the collection & add event listeners to each element within it.
    for (let i = 0; i < answerOptions.length; i++) {
        answerOptions[i].addEventListener("click", checkAnswers);
    }
}


function generateScore() {

};

function startTimer() {
};

function viewHighScores() {
};



startBtn.addEventListener("click", startQuiz); // starts quiz when start button is clicked