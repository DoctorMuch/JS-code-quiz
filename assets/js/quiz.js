let timerEl = document.getElementById("timer");
let startBtnEl = document.getElementById("start");
let introEl = document.getElementById("intro");
let introP = document.getElementById("introP");
let questionEl = document.getElementById("quiz-start");
let timeLeft = 75;

let questions = [
  {
    question: "Which of the following is not a common data type in JavaScript?",
    answer: ["boolean", "string", "number", "text"],
    correct: "text"
  },

  {
    question: "What is required to call a function?",
    answer: ["a button", "parentheses", "a parameter", "an argument"],
    correct: "parentheses"
  }
]

function countDown(){

  let timerInterval = setInterval(function(){
    if (timeLeft > 0) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
      
    }
    else {
      timerEl.textContent = '';
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

let startQuiz = function(){
  countDown();
  clearStart();
  // Ask first question
  askQuestion();
  // Display possible answers
  displayAnswers();
};

let clearStart = function(){
  questionEl.removeChild(startBtnEl);
  questionEl.removeChild(introEl);
  questionEl.removeChild(introP);
}

let askQuestion = function(){
  questionEl.className = "quizText";
  let askQuestionEl = document.createElement("h2");
  askQuestionEl.className = "questionText";
  askQuestionEl.textContent = questions[0].question;
  questionEl.appendChild(askQuestionEl);
};

let displayAnswers = function(){
  let pointTotal = 0;
  let answerOptionsEl = document.createElement("ol");
  answerOptionsEl.className = "answers";
  questionEl.appendChild(answerOptionsEl);
  let quizFooter = document.createElement("div");
  quizFooter.className = "statusBar";
  for (let i=0;i<4;i++){
    let answerOptionEl = document.createElement("input");
    answerOptionEl.type = "button";
    answerOptionEl.id = "submit";
    answerOptionEl.value = questions[0].answer[i];
    answerOptionEl.className = "inputBtn";
    answerOptionEl.addEventListener("click", function(){
      if (answerOptionEl.value === questions[0].correct){
        pointTotal +=5;
        quizFooter.textContent = "Correct!";
        questionEl.appendChild(quizFooter);
      }
      else {
        timeLeft -= 10;
        quizFooter.textContent = "Wrong!";
        questionEl.appendChild(quizFooter);
      }
    })
    answerOptionsEl.appendChild(answerOptionEl);
  } 
};

let endQuiz = function(){
  alert("Time is up! Let's see how you did!");
};

startBtnEl.onclick = startQuiz;