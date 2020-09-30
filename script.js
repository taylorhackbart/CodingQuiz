// variables
var start = document.getElementById("start"); //only the button
var displayCount = document.querySelector(".countdown"); // showing countdown
var container = document.querySelector(".container"); // header
var quizStart = document.querySelector(".questions"); // button types
var button1 = document.getElementById("button1"); // question button A
var button2 = document.getElementById("button2"); // question button A
var button3 = document.getElementById("button3"); // question button A
var button4 = document.getElementById("button4"); // question button A
var title = document.getElementById("title"); //questions header title
var timeLeft = 60;
var score = 0;
var questionIndex = 0;

//questions array
var questionsArr = [
  {
    question: " Where does the script.js link go in your html doc? ",
    choices: ["in the head","it doesn't go in the html doc", "after closing body tag","above closing body tag",],
    answer: "above closing body tag",
  },
  {
    question: " Where do we push our homeworks to (not submitting)? ",
    choices: [" Gitlab "," GitHub"," Bootstrap"," They magically appear in a webpage!",],
    answer: "Github",
  },
  {
    question: " Which is used to make a list? ",
    choices: ["array", "string", "boolean", "function"],
    answer: "array",
  },
  {
    question: " How to customize and add styles to your webpage?",
    choices: ["HTML", "CSS", "JavaScript", "pray"],
    answer: "CSS",
  },
];

// start button

function startQuiz() {
  container.style.display = "none"; // hiding the button
  quizStart.style.display = "block";
  startCountdown();
} 

//timer function
function startCountdown() {
  var countdown = setInterval(function () {
    timeLeft--;
    displayCount.textContent = timeLeft + " seconds left";
    if (timeLeft === 0 || displayQuestion === 4) {
        clearInterval(countdown);
    }
  
}, 1000);
//ask first question
displayQuestion();
}
// adding an click for start button
start.addEventListener("click", startQuiz);

//adding a click for questions
button1.addEventListener("click", function() {
    questionIndex++;
    displayQuestion();
});
button2.addEventListener("click", function() {
    questionIndex++;
    displayQuestion();
});
button3.addEventListener("click", function() {
    questionIndex++;
    displayQuestion();
});
button4.addEventListener("click", function() {
    questionIndex++;
    displayQuestion();
});

//first question
function displayQuestion() {
    document.querySelector(".title").innerHTML =
    questionsArr[questionIndex].question;

    button1.innerHTML =
    questionsArr[questionIndex].choices[0];

    button2.innerHTML =
    questionsArr[questionIndex].choices[1];

    button3.innerHTML =
    questionsArr[questionIndex].choices[2];

    button4.innerHTML =
    questionsArr[questionIndex].choices[3];
    
} end();
//displaying answer
var newTime = timeLeft-=15;
function correct(){
    if (questionIndex[0] === questionsArr[questionIndex].choices[3]){
         score++;
         console.log(score);
    }  else {
       newTime; 
    }}
   correct();


// or incorrect subtract time


//another question, another function lol

// all q answered or time = 0, game over

// prompt to initial and score

// if the time runs out, or you've answered all the questions, game over
function end(){
if (timeLeft === 0 || displayQuestion === 4) {
  clearInterval(countdown);
  // enter initials for scoreboard
  prompt("Enter initials to be added to the scoreboard!");

  // add up their score
  alert(score);
}}

