
var time = 100; // to tick down with incorrect answers
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

var finalInitialsAndScores = [];

var mainEl = document.querySelector('main');
var startBtn = document.querySelector(".start-btn");
var mainContainer = document.querySelector(".main-container");
var timerEl = document.querySelector(".timer");
var viewScores = document.querySelector('.view-scores');
var answerOptions = document.getElementsByClassName('a-btn'); // array, since selecting ALL the options
var displayedQuestion = document.querySelector('#question');
var currentQuestion = 0; // to track current question, bc the 1st index of an array is 0, which is whats holding the questions.then increase it each time I get the next question by 1



function startQuiz() {
    mainContainer.classList.remove("hide");
    startBtn.classList.add("hide");
    getQuestion();
    getChoices();
    startTimer();
    addEventListenersToAnswerOptions();
}

let index = 0;
function getQuestion() {
    displayedQuestion.innerText = questions[currentQuestion].question;
}

function getChoices() {
    for (let i = 0; i < 4; i++) {
        answerOptions[i].innerText = questions[currentQuestion].choices[i];
    }
}

function checkAnswers(event) {
    console.log(event);
    if (event.target.innerText === questions[currentQuestion].answer) {
        score++;
        console.log(score);
    } else {
        time--;
        console.log(time);
    };
    currentQuestion++;
    if (currentQuestion === 10) {
        window.alert('Game over! Input your initials to save your score.');
        endGame();
    } else {
        getQuestion();
        getChoices();
    }
}

function addEventListenersToAnswerOptions() { // answerOptions is an HTML Collection, so cant directly add event listeners using addEventListener. looping through collection & adding event listeners to each element within it.
    for (let i = 0; i < answerOptions.length; i++) {
        answerOptions[i].addEventListener("click", checkAnswers);
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        time--;
        timerEl.textContent = 'Time left: ' + time;
    }, 1000);
}

var sectionEl = null; // declaring at global level so accessible by mult functions
function endGame() {
    clearInterval(timerInterval);
    mainContainer.classList.add("hide");
    // scoreContainer.classList.remove("hide");
    sectionEl = document.createElement('section');
    var initialsHTML = `
<h1>Initials</h1>
<input type="text" id="initials">
<button class="submit-btn">Submit</button>
`
    // assigns entire block of html to html
    sectionEl.innerHTML = initialsHTML;
    sectionEl.classList.add('initials-Container');
    mainEl.appendChild(sectionEl);
    var submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", setInitialsAndScore); // when submit button after game is clicked, run function
    console.log("here is the final score: " + score);
};

var collectSandI = null; // defined glocally so may be used in showScore();
function setInitialsAndScore() {
    var initialsInput = document.getElementById("initials");
    var initials = initialsInput.value.trim();
    collectSandI = {
        Score: score,
        Initials: initials
    };
    console.log(collectSandI);
localStorage.setItem("userScore", JSON.stringify(collectSandI)); // store object locally
showScore();
};

function showScore() {
    getInitialsAndScore();
    sectionEl.classList.add('hide'); // hiding container for submitting initials
    var scoreboardEl = document.createElement('section');
    var scoreboardHTML = `
    <h1 class= "scoreboard-Header">Scoreboard</h1>
   <h3 class ="user-name"></h3>
   <h3 class ="user-score"></h3>
    <button class="replay-btn">Play Again</button>
    ` 
    scoreboardEl.innerHTML = scoreboardHTML;
    scoreboardEl.classList.add('scoreboard-Container');
    mainEl.appendChild(scoreboardEl);
    //
    //

    var initialsEl = document.querySelector('.user-name'); // 
    var scoreEl = document.querySelector('.user-score');

console.log("Here is the globally accessible array: " + finalInitialsAndScores);
   initialsEl.innerText = ('Player Initials: ' + collectSandI.score);
    // scoreEl = 

    var replayBtn = document.querySelector(".replay-btn"); 
};

function getInitialsAndScore() { // function to GET intiials and score from local storage, to then be displayed to Scoreboard
    var storedInitials = localStorage.getItem("userScore", JSON.parse);
    console.log(storedInitials);
    finalInitialsAndScores.push(storedInitials);
    console.log("Pulled from local storage and pushed to empty global array: " + finalInitialsAndScores);
}

startBtn.addEventListener("click", startQuiz); 
