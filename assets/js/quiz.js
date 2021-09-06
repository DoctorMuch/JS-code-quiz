let timerEl = document.getElementById("timer");
let startBtnEl = document.getElementById("start");
let introEl = document.getElementById("intro");
let introP = document.getElementById("introP");
let questionEl = document.getElementById("quiz-start");

let askQuestionEl = document.createElement("h2");
let answerOptionsEl = document.createElement("div");
let quizFooter = document.createElement("div");

let timeLeft = 75;
let questionCounter = 0;
let pointTotal = 0;

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
  },
  {
    question: "Which of the following shows proper heading use?",
    answer: ["h1, h2, h3, h4, h5, h6", "h1, h3, h5, h2, h6, h4", "h6, h5, h4, h3, h2, h1", "It doesn't matter how you use headings on your page."],
    correct: "text"
  },
  {
    question: "Which of the following is not a common data type in JavaScript?",
    answer: ["boolean", "string", "number", "text"],
    correct: "text"
  },
  {
    question: "Which of the following is not a common data type in JavaScript?",
    answer: ["boolean", "string", "number", "text"],
    correct: "text"
  },
  {
    question: "Which of the following is not a common data type in JavaScript?",
    answer: ["boolean", "string", "number", "text"],
    correct: "text"
  },
]

function countDown(){
console.log(questions.answer);
  let timerInterval = setInterval(function(){
    if (timeLeft > 0) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
      
    }
    else if (timerEl.textContent = '' || questionCounter >= questions.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

let startQuiz = function(){
  countDown();
  clearStart();
  // Ask first question & display possible answers
  askQuestion();
};

let clearStart = function(){
  questionEl.removeChild(startBtnEl);
  questionEl.removeChild(introEl);
  questionEl.removeChild(introP);
};

let nextQuestion = function(){
  let newQEl = document.getElementById("question");
  newQEl.innerHTML = questions[questionCounter].question;
  for (let i=0;i<4;i++){
    let newAEl = document.getElementById("answer");
    newAEl.value = questions[questionCounter].answer[i];
  }
};
  


let askQuestion = function(){
  questionEl.className = "quizText";
  askQuestionEl.id = "question";
  askQuestionEl.className = "questionText";
  askQuestionEl.textContent = questions[questionCounter].question;
  questionEl.appendChild(askQuestionEl);
  displayAnswers();
  
};

let displayAnswers = function(){
  answerOptionsEl.className = "answers";
  questionEl.appendChild(answerOptionsEl);
  quizFooter.className = "statusBar";
  for (let i=0;i<4;i++){
    let answerOptionEl = document.createElement("input");
    answerOptionEl.type = "button";
    answerOptionEl.id = "answer";
    answerOptionEl.value = questions[questionCounter].answer[i];
    answerOptionEl.className = "inputBtn";
    answerOptionsEl.appendChild(answerOptionEl);
    answerOptionEl.addEventListener("click", function(){
      if (answerOptionEl.value === questions[questionCounter].correct){
        pointTotal +=5;
        console.log(pointTotal);
        quizFooter.textContent = "Correct!";
        questionEl.appendChild(quizFooter); 
      }
      else {
        timeLeft -= 10;
        quizFooter.textContent = "Wrong!";
        questionEl.appendChild(quizFooter);
      }
      
      questionCounter++;
      console.log(questionCounter);
      nextQuestion();
    });
  } 
};

let endQuiz = function(){
  alert("Time is up! Let's see how you did!");
};

startBtnEl.onclick = startQuiz;