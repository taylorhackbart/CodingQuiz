// leadboard pops up twice
//try to stop the time beforehand
//try to get the initials there 

// variables
var highscore = document.getElementById("high-scores"); //high score link
var start = document.getElementById("start"); //only the button
var displayCount = document.querySelector(".countdown"); // showing countdown
var container = document.querySelector(".header"); // header
var quizSection = document.querySelector(".quiz-elements"); //quiz body
var questionId = document.getElementById("question"); //questions
var answerId = document.getElementById("answer"); // answer
var messageId = document.getElementById("message"); //correct or incorrect
var resultsId = document.querySelector("#results"); // results section
var resultsInitials = document.getElementById("initials");
var resultsScore = document.getElementById("score");
var currentScore = document.getElementById("current-score");
var userName = "";
var timeLeft = 60;
var score = 0;
var questionIndex = 0;
var letter = ["A) ", "B) ", "C) ", "D) "];
var leaderboard = [];
//questions array
var questionsArr = [
    {
    question: " Where does the script.js link go in your html doc? ",
    choices: ["in the head","it doesn't go in the html doc", "after closing body tag","above closing body tag"],
    answer: "above closing body tag",
    },
    {
    question: " Where do we push our homeworks to (not submitting)? ",
    choices: [" Gitlab ", "GitHub", "Bootstrap", "They magically appear in a webpage!"],
    answer: "GitHub",
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

// Start button

function startQuiz(e) {
  e.preventDefault(e);
  container.style.display = "none"; // hiding the start button
  quizSection.style.display = "block"; // showing quiz
  startCountdown();
  startingQuestions();
}

//Timer function
function startCountdown() {
  var countdown = setInterval(function () {
    timeLeft--;
    displayCount.textContent = timeLeft + " seconds left";

    if (timeLeft === 0) {
      clearInterval(countdown);
      timeLeft.textContent = "Finished!";
      scoreFinal();
    }
  }, 1000);
}

function startingQuestions() {
  console.log(questionIndex)
  if (questionIndex === (questionsArr.length)){
    scoreFinal();
  } else {
    questionId.textContent = "Question: " + questionsArr[questionIndex].question;
    startingChoices(questionIndex);
  }
}

function startingChoices(questionIndex) {
  //loop through the questions
  for (var i = 0; i < questionsArr[questionIndex].choices.length; i++) {
    if (
      questionId.childElementCount < questionsArr[questionIndex].choices.length
    ) {
      //creating buttons for choices
      var newButton = document.createElement("button");
      questionId.appendChild(newButton);
      //displaying the choices with the new button
      newButton.textContent =
        letter[i] + " " + questionsArr[questionIndex].choices[i];
      newButton.setAttribute("class", "button" + [i]);
      newButton.setAttribute(
        "data-answer",
        questionsArr[questionIndex].choices[i]
      );
    } else {
      var existingButton = document.querySelector(".button" + [i]);
      existingButton.textContent =
        letter[i] + " " + questionsArr[questionIndex].choices[i];
      existingButton.setAttribute(
        "data-answer",
        questionsArr[questionIndex].choices[i]
      );
    }
  }
}

//Checks answers for correct/incorrect
function checkAnswer(e) {
  e.preventDefault();
  var userAnswer = e.target.getAttribute("data-answer");

  if (questionsArr[questionIndex].answer == userAnswer) {
    message.textContent = "Correct!";
    score++;
  } else {
    message.textContent = "Incorrect!";
    timeLeft -= 5;
  }

  if (userAnswer) {    
    questionIndex++;
    console.log(questionIndex);
    currentScore.textContent = "Current score: " + score;
    startingQuestions();
  }  
}

function scoreFinal() {
  questionId.style.display = "none";
  var initials = prompt("Enter your initials for the leaderboard.");
  displayCount.style.display = "none";
  messageId.style.display = "none";
  currentScore.style.display = "none";
  container.textContent = initials + " " + score;
  resultsId.style.display = "block";

  //adding scores into local storage
  var previousPlayers = JSON.parse(localStorage.getItem("players"));
  var currentPlayer = {
    player: initials,
    playerScore: score,
  };
  //creating a leaderboard
  leaderboard.push(currentPlayer);
  if (previousPlayers != null) {
    for (var l = 0; l < previousPlayers.length; l++) {
      leaderboard.push(previousPlayers[l]);
    }
  } else {
    var first = document.createElement("h4");
    first.classList.add("col-md-6");
    first.classList.add("yourefirst");
    first.textContent = "You're First To Play!";
    questionId.insertAdjacentElement("afterend", first);
  }

  localStorage.setItem("players", JSON.stringify(leaderboard));
  //high score calculator
  leaderboard.sort((a, b) => (a.playerScore < b.playerScore ? 1 : -1));
  //creating list elements to display initials and score
  var ul = document.createElement("ul");
  ul.classList.add("col-md-6");
  ul.classList.add("topThree");
  var liOne = document.createElement("li");
  liOne.textContent =
    leaderboard[0]["player"] + " " + leaderboard[0]["playerScore"];
  var liTwo = document.createElement("li");
  liTwo.textContent =
    leaderboard[1]["player"] + " " + leaderboard[1]["playerScore"];
  ul.appendChild(liOne);
  ul.appendChild(liTwo);
  if (leaderboard[2] != null) {
    var liThree = document.createElement("li");
    liThree.textContent =
      leaderboard[2]["player"] + " " + leaderboard[2]["playerScore"];
    ul.appendChild(liThree);
  }

  questionId.insertAdjacentElement("afterend", ul);
}

//Starts by clicking "Start Quiz"
start.addEventListener("click", startQuiz);

//Checks the answers when a user clicks
questionId.addEventListener("click", checkAnswer);
