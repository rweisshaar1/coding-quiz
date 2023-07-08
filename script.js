// global variables

//is the title
var title = document.querySelector("h1");
// displays questions
var question = document.querySelector(".question");
// displays answers
var answers = document.querySelector('span');
// radio button text
var answer1Text = document.querySelector('.label1')
var answer2Text = document.querySelector('.label2')
var answer3Text = document.querySelector('.label3')
var answer4Text = document.querySelector('.label4')

//radio buttons variables
var radio1 = document.getElementById('answer1');
var radio2 = document.getElementById('answer2');
var radio3 = document.getElementById('answer3');
var radio4 = document.getElementById('answer4');

// radio1.checked = true;
// radio2.checked = false;
// radio3.checked = false;
// radio4.checked = false;


//footer for showing if answer is correct or not
var userAnswers = document.querySelector(".userAnswers");
// start button
var button = document.querySelector(".submit");

// submit button
var buttonSubmit = document.getElementById("submit");
buttonSubmit.setAttribute("style", "visibility: hidden")
//timer
var timerEl = document.querySelector(".timer");
var timeLeft = 60 ;

// var for the answers array
var allAnswers ;
// var for answers correct/incorrect
var currentScore

var right = localStorage.getItem("right") // right answer counter

var userCorrect = 0;
var userIncorrect = 0;

const correct = userCorrect ++;


button.textContent = "Start";
buttonSubmit.textContent = "Submit"

timerEl.textContent = `There are ${timeLeft} seconds remaining...`;

//timer function, set to 60 seconds
function countdown() {
  var timeLeft = 60;
  
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
    if(timeLeft===0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
//when time runs out!
function displayMessage() {
  alert("You ran out of time! Please try again.");
  location.reload();
}
//displays title, also hides answer selectors
title.textContent = "CODING QUIZ";
answers.setAttribute("style", "visibility: hidden");

//starts quiz with click of button, displays radio buttons, changes start button to submit button
button.addEventListener("click", startQuiz);

function startQuiz() {
  countdown();
  answers.setAttribute("style", "visibility: visible");
  button.setAttribute("style", "visibility: hidden")

  buttonSubmit.setAttribute("style", "visibility: visible")

  buttonSubmit;
  questionOne();
}

function questionOne() {
  question.textContent = "1. This will be the first question of the quiz.";

  allAnswers = [
    {
      info: answer1Text.textContent = "A. This is the answer to question 1",},
    {
      info: answer2Text.textContent = "B. This is not the answer to question 1"},
    {
      info: answer3Text.textContent = "C. This is not the answer to question 1"},
    {
      info: answer4Text.textContent = "D. This is not the answer to question 1"}
  ]
  buttonSubmit.addEventListener("click", isAnswerRight1);
}

function isAnswerRight1(){
  if (radio1.checked) { // correct one
    localStorage.setItem("right", correct);
    userAnswers.textContent = "Correct!"
    questionTwo();
    console.log(userCorrect)
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo() ;
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo();
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo() ;
} else {
  userAnswers.textContent = "Please select an answer to continue."
  questionOne();
}
}

function questionTwo(){
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;

  question.textContent = "2. This will be the second question of the quiz.";

  allAnswers = [
    {
      info: answer1Text.textContent = "A. This is not the answer to question 2",},
    {
      info: answer2Text.textContent = "B. This is the answer to question 2"},
    {
      info: answer3Text.textContent = "C. This is not the answer to question 2"},
    {
      info: answer4Text.textContent = "D. This is not the answer to question 2"}
  ]
  buttonSubmit.addEventListener("click", isAnswerRight2);
}

function isAnswerRight2(){
  if (radio1.checked) {
    userAnswers.textContent = "Incorrect!"
    questionTwo();
    console.log(userCorrect)
} else if (radio2.checked) { // correct one
  localStorage.setItem("right", correct);
  userAnswers.textContent = "Correct!"
  questionTwo() ;
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo();
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo() ;
} else {
  userAnswers.textContent = "Please select an answer to continue."
  questionOne();
}
}