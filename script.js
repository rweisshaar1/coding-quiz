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

// submit buttons
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
var userCorrectPoints = 1

const correct = userCorrect += userCorrectPoints ;
var userCorrectPointDisplay = correct


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
  return
}
// asking question one
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

function clearRadio () {
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;
}
// checking if answer one is correct
function isAnswerRight1(){
  if (radio1.checked) { // correct one
    correct
    userAnswers.textContent = "Correct!" // correct one
    questionTwo();
    console.log(userCorrectPointDisplay) ;
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionTwo() ;
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo();
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionTwo() ;
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(userCorrectPointDisplay) ;
  questionOne();
}
}


// function for second question
function questionTwo() {
  
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
// checking if answer 2 is correct
function isAnswerRight2(){
  if (radio1.checked) {
    userAnswers.textContent = "Incorrect!"
    questionThree() ;
    console.log(userCorrectPointDisplay)
} else if (radio2.checked) { // correct one
  correct
  userAnswers.textContent = "Correct!"
  console.log(userCorrectPointDisplay)
  questionThree() ;
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay)
  questionThree() ;
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay)
  questionThree() ;
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(userCorrectPointDisplay)
  questionTwo();
}} ;

// asking question three
function questionThree() {
  question.textContent = "3. This will be the third question of the quiz.";

  allAnswers = [
    {
      info: answer1Text.textContent = "A. This is not the answer to question 3",},
    {
      info: answer2Text.textContent = "B. This is not the answer to question 3"},
    {
      info: answer3Text.textContent = "C. This is not the answer to question 3"},
    {
      info: answer4Text.textContent = "D. This is the answer to question 3"}
    ]
  buttonSubmit.addEventListener("click", isAnswerRight3);
} ;

function isAnswerRight3(){
  if (radio1.checked) { // correct one
    userAnswers.textContent = "Incorrect!"
    questionFour();
    console.log(userCorrectPointDisplay) ;
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionFour();
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionFour();
} else if (radio4.checked) {
  userAnswers.textContent = "Correct!" // correct one
  correct
  console.log(userCorrectPointDisplay) ;
  questionFour();
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(userCorrectPointDisplay) ;
  questionThree();
}}

//question four function
function questionFour() {

  question.textContent = "4. This will be the fourth question of the quiz.";

  allAnswers = [
    {
      info: answer1Text.textContent = "A. This is the answer to question 4"},
    {
      info: answer2Text.textContent = "B. This is not the answer to question 4"},
    {
      info: answer3Text.textContent = "C. This is not the answer to question 4"},
    {
      info: answer4Text.textContent = "D. This is not the answer to question 4"}
    ]
  buttonSubmit.addEventListener("click", isAnswerRight4);
} ;

// checking if answer 4 is right
function isAnswerRight4(){
  if (radio1.checked) { // correct one
    userAnswers.textContent = "Correct!" // correct one
    correct
    questionFive();
    console.log(userCorrectPointDisplay) ;
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionFive();
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionFive();
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  questionFive();
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(userCorrectPointDisplay) ;
  questionFour();
}} ;

// displays question 5
function questionFive() {

  question.textContent = "5. This will be the fifth question of the quiz.";

  allAnswers = [
    {
      info: answer1Text.textContent = "A. This is not the answer to question 4"},
    {
      info: answer2Text.textContent = "B. This is not the answer to question 4"},
    {
      info: answer3Text.textContent = "C. This is the answer to question 4"},
    {
      info: answer4Text.textContent = "D. This is not the answer to question 4"}
    ]
  buttonSubmit.addEventListener("click", isAnswerRight5);
} ;

// checking if answer 5 is correct
function isAnswerRight5 () {
  if (radio1.checked) { 
    userAnswers.textContent = "Incorrect!"
    showScore();
    console.log(userCorrectPointDisplay) ;
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  showScore();
} else if (radio3.checked) {
  userAnswers.textContent = "Correct!" // correct one
  correct
  console.log(userCorrectPointDisplay) ;
  showScore();
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(userCorrectPointDisplay) ;
  showScore();
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(userCorrectPointDisplay) ;
  questionFive();
}} ;

// shows score page
function showScore () {
  var scoreMultiplier = 20 ;
  const actualScore = userCorrectPointDisplay *= scoreMultiplier ;

  console.log(userCorrectPointDisplay,scoreMultiplier);
  console.log(actualScore)

  answers.setAttribute("style", "visibility: hidden") ;

}