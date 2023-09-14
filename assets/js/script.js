// PSUEDO CODE:
// create variables / arrays / objects
// create object that hold all the questions + possible answers
// use document.queryselector to store the btn div (asign id to btn) as a variable = btn
// create startQuiz function that is triggered by 'click' event lastener, attached to the button variable
// startquiz() should hold a var = timeInterval, which is = setInterval(function ()
//
//
//
//
//
// call startQuiz();

time = 100;
initials = '';
score = 0;
//objects holding mult coice questions
var questions = [
    {
        pompt: "This will be question 1?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "b"
    },
    {
        pompt: "This will be question 2?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "d"
    },
    {
        pompt: "This will be question 3?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "d"
    },
    {
        pompt: "This will be question 4?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "c"
    },
    {
        pompt: "This will be question 5?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "a"
    },
    {
        pompt: "This will be question 6?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "b"
    },
    {
        pompt: "This will be question 7?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "a"
    },
    {
        pompt: "This will be question 8?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "a"
    },
    {
        pompt: "This will be question 9?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "c"
    },
    {
        pompt: "This will be question 10?\n(a) A1\n(b) A2\n(c) A3\n(d) A4",
        answer: "d"
    },

]

for (i = 0; i < questions.length; i++;) {
    var answer = //addeventlistener that stores which element the user clicks on as the 'answer'
   if (answer == questions[i].answer) {
        score++;
    } else (
        time == time - 10; // doing this in the case of 10 total questions 
   )
}