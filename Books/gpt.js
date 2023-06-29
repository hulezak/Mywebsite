const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false }
    ]
  },
  {
    question: 'What is the tallest mountain in the world?',
    answers: [
      { text: 'Mount Everest', correct: true },
      { text: 'Kilimanjaro', correct: false },
      { text: 'Denali', correct: false },
      { text: 'Mount Fuji', correct: false }
    ]
  },
  {
    question: 'What is the largest country in the world by area?',
    answers: [
      { text: 'Russia', correct: true },
      { text: 'Canada', correct: false },
      { text: 'China', correct: false },
      { text: 'USA', correct: false }
    ]
  }
  ];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('#answers button');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startQuiz();

submitButton.addEventListener('click', () => {
  const selectedAnswer = getSelectedAnswer();
  
  if (selectedAnswer && selectedAnswer.dataset.correct) {
    score++;
    scoreElement.innerText = `Score: ${score}`;
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < shuffledQuestions.length) {
    setNextQuestion();
  } else {
    endQuiz();
  }
});

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  
  quizContainer.classList.remove('hide');
  
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  
  question.answers.forEach(answer => {
    const button = document.getElementById(`answer${question.answers.indexOf(answer) + 1}`);
    
    button.innerText = answer.text;
    button.dataset.correct = answer.correct;
    
    button.addEventListener('click', selectAnswer);
    
    button.classList.remove('selected');
  });
}

function resetState() {
  answerButtons.forEach(button => {
    button.classList.remove('correct');
    button.classList.remove('wrong');
    button.removeEventListener('click', selectAnswer);
  });
  
  submitButton.disabled = true;
}
function selectAnswer(e) {
  const selectedButton = e.target;
  
  answerButtons.forEach(button => {
    if (button === selectedButton) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });
  
  submitButton.disabled = false;
}

function getSelectedAnswer() {
  let selectedAnswer = null;
  
  answerButtons.forEach(button => {
    if (button.classList.contains('selected')) {
      selectedAnswer = button;
    }
  });
  
  return selectedAnswer;
}
function endQuiz() {
  quizContainer.classList.add('hide');
  
  alert(`You scored ${score} out of ${questions.length}!`);
}