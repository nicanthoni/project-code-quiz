// PSUEDO CODE:
// create variables / arrays / objects
// create object that hold all the questions + possible answers
// use document.queryselector to store the btn div (asign id to btn) as a variable = btn
// create startQuiz function that is triggered by 'click' event lastener, attached to the button variable
// startquiz() should hold a var = timeInterval, which is = setInterval(function ()
// call startQuiz();

var time = 100;
var initials = '';
var score = 0;
var questions = [
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
var answerOptions = document.getElementsByClassName('.a-btn');
var displayedQuestion = document.querySelector('#question');



// function starts once start button is clicked - 
function startQuiz() {
    mainContainer.classList.remove("hide");
    startBtn.classList.add("hide");
    // asign a random array from the questions object (1 question and corresponding answer options) into fields of main container (quiz)
    getRandomQuestion();
    // Assign corresponding question value from randomly selected array to the '.question' element using textContent
    // assign corresponding answer options from randomly selected array to the ".a-btn" element using textContent
    // displayedQuestion.textContent = ques
}


//get random question
let index = 0;
function getRandomQuestion() {
    for (let i = 0; i < questions.length; i++) {
        console.log(i);
       console.log(questions[i]);
       console.log(questions[index].question);
    }
}



function startTimer() {

};

function renderQAs() {

};

function checkAnswers() {

};

function viewHighScores() {

};


// for (let i = 0; i < questions.length; i++) {
//     var 'answer' //addeventlistener that stores which element the user clicks on as the 'answer'
//    if (answer == questions[i].answer) {
//         score++;
//     } else (
//         (time == time - 10) // doing this in the case of 10 total questions 
//    )
// }

startBtn.addEventListener("click", startQuiz); // starts quiz when start button is clicked
answerOptions.addEventListener('click',); // listen for click of the answer options, and run the function that compares to the correct answer, if statement for what happens if matches correct answer or not


// startQuiz();