let timerEl = document.getElementById("timer");
let startBtnEl = document.getElementById("start");
let questionEl = document.getElementById("question");
let answerEl = document.getElementById("answer");

let questions = {
    question: "Which of the following is not a common data type in JavaScript?",
    answer: ["boolean", "string", "number", "text"]
};

function countDown(){
  let timeLeft = 75;

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
  let clearStart = document.getElementById("quiz-start");
  clearStart.removeChild(startBtnEl);
  // Ask first question
  questionEl.textContent = questions.question;
  // Display possible answers
  makeList();
};

// Turn answers array into list
let makeList = function(){
  answerEl.textContent= '';
  let answerOptions = document.createElement("ol");
  answer.appendChild(answerOptions)
  for (let i=0; i < 4; i++){
    let answerOption = document.createElement("li");
    answerOption.textContent = questions.answer[i];
    answerOptions.appendChild(answerOption);
  }
}

let endQuiz = function(){

};

startBtnEl.onclick = startQuiz;