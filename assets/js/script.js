var time = 21; // to tick down with incorrect answers
var score = 0; // final score
var questions = [ // questions, choices, and correct answer
    {
        question: "What does the 'DOM' stand for?",
        choices: ['A) Document of Model', 'B) Description of Model', 'C) Document Object Model', 'D) Descriptive Object Model'],
        answer: 'D) Descriptive Object Model'
    },
    {
        question: "In JavaScript, which is an example of correctly 'calling' a function?",
        choices: ['A) exampleFunction();', 'B) Example Function();', 'C) exampleFunction[];', 'D) example = function();'],
        answer: 'A) exampleFunction();'
    },
    {
        question: "How is a variable declared in vanilla JavaScript?",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) None of the above'],
        answer: "choice 2"
    },
    {
        question: "What does 'HTML' stand for?",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 4"
    },
    {
        question: "What is JQuery?",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 3"
    },
    {
        question: "What is Bootstrap?",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 4"
    },
    {
        question: "What is event bubbling?",
        choices: ['A) choice 1', 'B) choice 2', 'C) choice 3', 'D) choice 4'],
        answer: "choice 2"
    },
    {
        question: "How can you dynamically create an HTMLelement within JavaScript?",
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

var leaderboardContainer = document.querySelector('.leaderboard');

viewScores.addEventListener('click', () => {
    var leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
    var leaderboardElements = leaderboardData.map((player) => {
        return `<li>${player.Initials} - Score: ${player.Score}</li>`;
    });
    leaderboardContainer.innerHTML = leaderboardElements.join('');
    leaderboardContainer.classList.remove("hide");
});

// function sortScores () {
//  if ()
// }

function startQuiz() {
    
    mainContainer.classList.remove("hide");
    startBtn.classList.add("hide");
    timerEl.classList.remove("hide");
    viewScores.classList.add("hide");
    leaderboardContainer.classList.add("hide")
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
        // event.target.style.background = green;
    } else {
        time--;
    };
    currentQuestion++;
    if (currentQuestion === 10) {

    } else {
        getQuestion();
        getChoices();
    }
}

function addEventListenersToAnswerOptions() {
    for (let i = 0; i < answerOptions.length; i++) {
        answerOptions[i].addEventListener("click", checkAnswers);
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        time--;
        timerEl.textContent = 'Time left: ' + time;
        if (time < 0 || currentQuestion === 10) {
            clearInterval(timerInterval);
            window.alert('Game over! Input your initials to save your score.');
            endGame();
            timerEl.classList.add("hide");
        }
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
};

var collectSandI = null; // declaring glocally so may be used in showScore();
function setInitialsAndScore() {
    var initialsInput = document.getElementById("initials");
    var initials = initialsInput.value.trim();
    collectSandI = {
        Score: score,
        Initials: initials
    };
    
    localStorage.setItem("current_user_score", JSON.stringify(collectSandI)); // store object locally
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

    var initialsEl = document.querySelector('.user-name');
    var scoreEl = document.querySelector('.user-score');

console.log("Here is the globally accessible array: " + finalInitialsAndScores);
   initialsEl.innerText = ('Player Initials: ' + collectSandI.Initials);
   scoreEl.innerText = ('Score: ' + collectSandI.Score);

    var replayBtn = document.querySelector(".replay-btn");
    console.log(replayBtn)
    replayBtn.addEventListener('click', () => {
        location.reload(); // refreshes page
    });
};

function getInitialsAndScore() { // function to GET intiials and score from local storage, to then be displayed to Scoreboard
    var currentUserScore = JSON.parse(localStorage.getItem("current_user_score"));
    var leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push(currentUserScore)
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    console.log("Pulled from local storage and pushed to empty global array: " + finalInitialsAndScores);
}

startBtn.addEventListener("click", startQuiz); 
