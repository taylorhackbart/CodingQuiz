var start = document.getElementById("start");
var quizBody = document.body.querySelector(".modal");
var displayCount = document.querySelector(".countdown");
var container = document.querySelector(".container");
var quizCont = document.querySelector(".two");
var timeLeft = 60;
var score = 0;
var questionIndex = 0;

function displayQuestion() {
  document.querySelector(".title").innerHTML =
    questionsArr[questionIndex].question;
  document.getElementById("button1").innerHTML =
    questionsArr[questionIndex].choices[0];
  document.getElementById("button2").innerHTML =
    questionsArr[questionIndex].choices[1];
  document.getElementById("button3").innerHTML =
    questionsArr[questionIndex].choices[2];
  document.getElementById("button4").innerHTML =
    questionsArr[questionIndex].choices[3];
  console.log(questionIndex);
}

var questionsArr = [
  {
    question: " Where does the script.js link go in your html doc? ",
    choices: [
      "in the head",
      "it doesn't go in the html doc",
      "after closing body tag",
      "above closing body tag",
    ],
    answer: "above closing body tag",
  },
  {
    question: " Where do we push our homeworks to (not submitting)? ",
    choices: [
      " Gitlab ",
      " GitHub",
      " Bootstrap",
      " They magically appear in a webpage!",
    ],
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

//Start Timer and un hide quiz

function startQuiz(e) {
  e.preventDefault();
  quizBody.style.display = "block";
  container.style.display = "none";

  startCountdown();
}
function startCountdown() {
  quizCont.style.display = "block";
  var countdown = setInterval(function () {
    timeLeft--;
    displayCount.textContent = timeLeft + " seconds left";
    // if the time runs out, or you've answered all the questions, game over
    if (timeLeft === 0 || displayQuestion === 4) {
      clearInterval(countdown);
      // enter initials for scoreboard
      prompt("Enter initials to be added to the scoreboard!");

      // add up their score
      alert(score);
    }
  }, 1000);
  //display first question
  // askQuestions();

  displayQuestion();
}

start.addEventListener("click", startQuiz());
function nextQuestion() {
  console.log("test");
  displayQuestion();
}
var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
  console.log("test");
  questionIndex++;
  displayQuestion();
  console.log("test2");
});


