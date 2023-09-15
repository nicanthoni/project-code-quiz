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
        question1: "This will be question 1?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer1: "b"
    },
    {
        question2: "This will be question 2?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer2: "d"
    },
    {
        question3: "This will be question 3?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer3: "d"
    },
    {
        question4: "This will be question 4?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer4: "c"
    },
    {
        question5: "This will be question 5?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer5: "a"
    },
    {
        question6: "This will be question 6?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer6: "b"
    },
    {
        question7: "This will be question 7?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer7: "a"
    },
    {
        question8: "This will be question 8?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer8: "a"
    },
    {
        question9: "This will be question 9?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer9: "c"
    },
    {
        question10: "This will be question 10?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer10: "d"
    },

]
var startBtn = document.querySelector(".start-btn");
var mainContainer = document.querySelector(".main-container");
var timer = document.querySelector(".timer");
var viewScores = document.querySelector('.view-scores');
var answerOptions = document.getElementsByClassName('.a-btn');
var displayedQuestion = document.querySelector('#question');



// function starts once start button is clicked - 
function startQuiz () {
mainContainer.classList.remove("hide");
startBtn.classList.add("hide");
// asign a random array from the questions object (1 question and corresponding answer options) into fields of main container (quiz)
getRandomQuestion();
// Assign corresponding question value from randomly selected array to the '.question' element using textContent
// assign corresponding answer options from randomly selected array to the ".a-btn" element using textContent
displayedQuestion.textContent = ques
}


//

var lastIndex = -1; // Initialize with an index that won't match any valid index
function getRandomQuestion() {
    var index;
    do {
        index = Math.floor(Math.random() * questions.length);
    } while (index === lastIndex); // Keep going until it's different from the last index
    lastIndex = index; // Update the last index
    return questions[index];
}



function startTimer () {

};

function renderQAs () {

};

function checkAnswers() {

};

function viewHighScores () {

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
answerOptions.addEventListener('click', ); // listen for click of the answer options, and run the function that compares to the correct answer, if statement for what happens if matches correct answer or not


// startQuiz();