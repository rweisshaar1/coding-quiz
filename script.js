// global variables
var value

var val

var inputBox

var actualScore
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
var timeSubtracter = 5
var timeInterval;

function lessTime() {
  timeLeft = timeLeft -= timeSubtracter ;
  console.log(timeLeft)
  return timeLeft
}

// var for the answers array
var allAnswers ;
// var for answers correct/incorrect
var currentScore = 0;
var scoreAdder = 1

var totalScore = 0 ;

//
var scoreArray = JSON.parse(localStorage.getItem('scores')) || []

function correctAnswer (){
  totalScore = currentScore += scoreAdder ;
}

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
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
    questionTwo()
  } else if (radio3.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
    questionTwo()
  } else if (radio4.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
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
};

// checking if answer 2 is correct
function isAnswerRight2(event){
  buttonSubmit.removeEventListener('click', isAnswerRight2);
  if (radio1.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
  } else if (radio2.checked) { // correct one
    userAnswers.textContent = "Correct!"
    correctAnswer();
    console.log(totalScore)
  } else if (radio3.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
  
  } else if (radio4.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
  
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
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
  } else if (radio2.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
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
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`; ;
    calculateScore(totalScore);
  } else if (radio3.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
    calculateScore(totalScore);
  } else if (radio4.checked) {
    userAnswers.textContent = "Incorrect!"
    lessTime() 
    timerEl.textContent = `There are ${timeLeft} seconds remaining...`;
    calculateScore (totalScore);
  } else {
    userAnswers.textContent = "Please select an answer to continue."
    console.log(totalScore) ;
    questionFour();
}} ;

function calculateScore (x) {
  var scoreMultiplier = 20 ;
  
  actualScore = x *= scoreMultiplier ;
  
  console.log(actualScore);
  showScore(actualScore);
}

function showScore (x) {
  timerEl.remove();
  userAnswers.remove() ;
  answers.setAttribute("style", "visibility: hidden") ;
  question.textContent = `Your score is ${x}! Please enter your intials here:`;
  buttonSubmit.textContent = 'Continue' ;
  buttonSubmit.addEventListener('click', createInput());
}

function createInput(){
  buttonSubmit.removeEventListener('click', createInput)
  inputBox = document.createElement("input");
  inputBox.setAttribute('type', 'text', 'style','margin-left: 5px');
  var parent = document.getElementById("field")
  parent.appendChild(inputBox);
  buttonSubmit.addEventListener('click', getVal)
}

function getVal() {
  buttonSubmit.removeEventListener('click', getVal);
  val = document.querySelector('input').value
  console.log(val)
  buttonSubmit.addEventListener('click', saveLocal);
}
function saveLocal (){ 
  buttonSubmit.removeEventListener('click',saveLocal);
  var store = {
    key: val,
    score: actualScore 
  }
  scoreArray.push(store);
  localStorage.setItem('scores', JSON.stringify(scoreArray))
  
  console.log(scoreArray);

  getLocalStor();
}

function getLocalStor(){
  var store = JSON.parse(localStorage.getItem('scores')) ;
  inputBox.remove()
  title.textContent = "HIGH SCORES"
  console.log(store);
  console.log(scoreArray)
  createLi();
}
function createLi() {
  question.textContent = '' ;
  var ulTagDom = document.getElementById("field")
  var ulTag = document.createElement("ul")
  ulTag.textContent = 'Overall Scores:'
  ulTagDom.appendChild(ulTag)
  scoreArray.forEach((key, x) => {
    var x = scoreArray[x].score
    var liTag = document.createElement("li")
    ulTag.appendChild(liTag) ;
    liTag.textContent = (key.key + ' ' + (x)) ;
  })
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
