// PSUEDO CODE:
// create variables / arrays / objects
// create object that hold all the questions + possible answers
// use document.queryselector to store the btn div (asign id to btn) as a variable = btn
// create startQuiz function that is triggered by 'click' event lastener, attached to the button variable
// startquiz() should hold a var = timeInterval, which is = setInterval(function ()
//
//
// call startQuiz();

var time = 100;
var initials = '';
var score = 0;
var questions = [
    {
        question: "This will be question 1?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "b"
    },
    {
        question: "This will be question 2?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "d"
    },
    {
        question: "This will be question 3?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "d"
    },
    {
        question: "This will be question 4?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "c"
    },
    {
        question: "This will be question 5?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "a"
    },
    {
        question: "This will be question 6?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "b"
    },
    {
        question: "This will be question 7?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "a"
    },
    {
        question: "This will be question 8?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "a"
    },
    {
        question: "This will be question 9?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "c"
    },
    {
        question: "This will be question 10?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "d"
    },

]

var startBtn = document.querySelector(".start-btn");
var mainContainer = document.querySelector(".main-container");

function startQuiz () {
mainContainer.classList.remove("hide");
startBtn.classList.add("hide");
}

function startTimer () {};

function renderQAs () {};









// for (let i = 0; i < questions.length; i++) {
//     var answer; //addeventlistener that stores which element the user clicks on as the 'answer'
//    if (answer == questions[i].answer) {
//         score++;
//     } else (
//         (time == time - 10) // doing this in the case of 10 total questions 
//    )
// }
startBtn.addEventListener("click", startQuiz);


// startQuiz();