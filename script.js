// global variables
var value
//is the title
var title = document.querySelector("h1");
// displays questions
var question = document.querySelector(".question");
// displays answers
var answers = document.querySelector('form');
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
var timeInterval;

// var for the answers array
var allAnswers ;
// var for answers correct/incorrect
var currentScore = 0;
var scoreAdder = 1

var totalScore = 0 ;


function correctAnswer (){
  totalScore = currentScore += scoreAdder ;
}

button.textContent = "Start";
buttonSubmit.textContent = "Submit"

timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
var incorrect = 5;
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

// var questions = [
//   {
//     question: "1. This will be the first question of the quiz.",
//     answers: [
//       { text: "A. This is the answer to question 1!!!!!!", isCorrect: true },
//       { text: "B. This is the answer to question 1", isCorrect: false },
//       { text: "C. This is the answer to question 1", isCorrect: false },
//       { text: "D. This is the answer to question 1", isCorrect: false }
//     ]
//   }
// ]

// start the game
// get the current question (0 for starters)

// function showCurrentQuestion(){
//   var currQuestionObj = questions[currentQuestion]
//   var radioBtns = document.querySelectorAll("input[type=radio]")
//   var labels = document.querySelectorAll("label")
//   console.log(radioBtns)

//   currQuestionObj.answers.forEach( function(answer, idx) {
//     labels[idx].textContent = answer.text
//     if(answer.isCorrect === true){
//       radioBtns[idx].setAttribute("data-correct")
//     }
//   })

// }

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
  buttonSubmit.addEventListener("click",isAnswerRight1);
}

// checking if answer one is correct
function isAnswerRight1(){
  buttonSubmit.removeEventListener('click', isAnswerRight1);
  if (radio1.checked) { // correct one
    userAnswers.textContent = "Correct!" // correct one
    correctAnswer();
    console.log(totalScore) ;
    questionTwo()
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;
  questionTwo()
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  questionTwo()
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;
  questionTwo()
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(totalScore) ;
  questionOne();
}
}

// function for second question
function questionTwo() {

  // addTruth();
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
function isAnswerRight2(event){
  buttonSubmit.removeEventListener('click', isAnswerRight2);
  if (radio1.checked) {
    userAnswers.textContent = "Incorrect!"
    console.log(totalScore)
} else if (radio2.checked) { // correct one
  userAnswers.textContent = "Correct!"
  correctAnswer();
  console.log(totalScore)
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore)

} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore)

} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(totalScore)
  questionTwo();
}
questionThree() ;} ;

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
  buttonSubmit.removeEventListener('click', isAnswerRight3);
  if (radio1.checked) { 
    userAnswers.textContent = "Incorrect!"
    console.log(totalScore) ;
    
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;

} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;
} else if (radio4.checked) {
  userAnswers.textContent = "Correct!" // correct one
  correctAnswer();
  console.log(totalScore) ;
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(totalScore) ;
  questionThree();
} questionFour()}

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
  buttonSubmit.removeEventListener('click', isAnswerRight4);
  if (radio1.checked) { // correct one
    userAnswers.textContent = "Correct!" // correct one
    correctAnswer();
    calculateScore(totalScore);
    console.log(totalScore) ;
} else if (radio2.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;
  calculateScore(totalScore);
} else if (radio3.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;
  calculateScore(totalScore);
} else if (radio4.checked) {
  userAnswers.textContent = "Incorrect!"
  console.log(totalScore) ;
  calculateScore (totalScore);
} else {
  userAnswers.textContent = "Please select an answer to continue."
  console.log(totalScore) ;
  questionFour();
}} ;

function calculateScore (x) {
  var scoreMultiplier = 20 ;
  
  const actualScore = x *= scoreMultiplier 

  console.log(actualScore);
  showScore(actualScore);
}

function showScore (x) {
  timerEl.remove();
  userAnswers.remove() ;
  answers.setAttribute("style", "visibility: hidden") ;
  question.textContent = `Your score is ${x}! Please enter your intials here:`;
  buttonSubmit.textContent = 'Continue' ;
  buttonSubmit.addEventListener('click', saveScore(x));
}

function saveScore(x){
  let inputBox = document.createElement("input");
  inputBox.setAttribute('type', 'text');
  var parent = document.getElementById("field")
  parent.appendChild(inputBox);
  inputBox.textContent= "Input Intials"
  var value = inputBox.value;
  buttonSubmit.addEventListener('click', local (value, x));
}

function local (y, x){ 
  localStorage.setItem(y, (x));
  buttonSubmit.addEventListener('click', showHighScore());
 }

//  function showHighScore(){
//   var highScore = localStorage.getItem("initials", "value") ;

//   question.textContent = highScore
//  }
