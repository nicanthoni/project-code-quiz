
var time = 100; // to tick down with incorrect answers
var initials = ''; // to log add the end with my score
var score = 0; // final score
var questions = [ // questions, choices, and correct answer
    {
        question: "This will be question 1",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 2",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 3",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 4",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 5",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 6",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 7",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 8",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 9",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },
    {
        question: "This will be question 10",
        choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
        answer: "correct answer"
    },

]

var startBtn = document.querySelector(".start-btn");
var mainContainer = document.querySelector(".main-container");
var timer = document.querySelector(".timer");
var viewScores = document.querySelector('.view-scores');
var answerOptions = document.getElementsByClassName('.a-btn'); // array, since selecting ALL the options
var displayedQuestion = document.querySelector('#question');
var currentQuestion = 0; // to track current question, bc the 1st index of an array is 0, which is whats holding the questions.then increase it each time I get the next question by 1


// function starts once start button is clicked 
function startQuiz() {
    mainContainer.classList.remove("hide");
    startBtn.classList.add("hide");
    getQuestion();
    getChoices();
    // checkAnswers();
    // repeat
}

// Getting all the questions, and index will display the first one
let index = 0;
function getQuestion() {
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].question);
        
        displayedQuestion.textContent = questions[index].question;
    }
}

//  loop to get all the options/choices -> assign the event listener to each and check if the answer is correct and move to the next question with index++ to display 1 by 1
function getChoices() {
    for (let i = 0; i < 4; i++) {
        console.log(questions[i].choices[i]);

        answerOptions[i].textContent = questions[index].answer;
    }
}


// function checkAnswers(event) { // event listener runs when answer btn clicked -> check if event.target === the questions.answer
//     if (event.target.value === questions.answer.value) {
//         index++;
//         score++;
//     } else {

//     }

// };

function startTimer() {
};

function viewHighScores() {
};



startBtn.addEventListener("click", startQuiz); // starts quiz when start button is clicked
// answerOptions.addEventListener('click', checkAnswers); // listen for click of the answer options, and run the function that compares to the correct answer, if statement for what happens if matches correct answer or not

// startQuiz();