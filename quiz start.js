const quizQuestions = [{
  question: "What is the closest planet to the Sun?",
  answers: ["Earth", "Mars", "Mercury", "Venus"],
  correct: 2
},
{
  question: "Which planet is known as the Red Planet?",
  answers: ["Saturn", "Mars", "Jupiter", "Neptune"],
  correct: 1
},
{
  question: "What is the largest planet in our solar system?",
  answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
  correct: 2
},
{
  question: "What galaxy do we live in?",
  answers: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
  correct: 1
},
{
  question: "Who was the first person to walk on the Moon?",
  answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
  correct: 2
},
{
  question: "Which planet has the most moons?",
  answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
  correct: 1
},
{
  question: "What is the name of the first artificial satellite launched into space?",
  answers: ["Sputnik 1", "Apollo 11", "Voyager 1", "Hubble"],
  correct: 0
},
{
  question: "What is the hottest planet in the solar system?",
  answers: ["Mercury", "Venus", "Mars", "Earth"],
  correct: 1
},
{
  question: "What is the name of our star?",
  answers: ["Proxima Centauri", "The Moon", "The Sun", "Polaris"],
  correct: 2
},
{
  question: "Which planet is known as the 'Ice Giant'?",
  answers: ["Neptune", "Uranus", "Saturn", "Mars"],
  correct: 0
},
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
const currentQuestion = quizQuestions[currentQuestionIndex];
questionElement.textContent = currentQuestion.question;
answersElement.innerHTML = "";

currentQuestion.answers.forEach((answer, index) => {
  const li = document.createElement("li");
  li.textContent = answer;
  li.addEventListener("click", () => selectAnswer(index));
  answersElement.appendChild(li);
});

nextButton.disabled = true;
updateProgressBar();
}

function selectAnswer(selectedIndex) {
const correctIndex = quizQuestions[currentQuestionIndex].correct;

Array.from(answersElement.children).forEach((child, index) => {
  if (index === correctIndex) {
      child.style.backgroundColor = "#4caf50";
  } else {
      child.style.backgroundColor = "#f44336";
  }
  child.style.pointerEvents = "none";
});

if (selectedIndex === correctIndex) {
  score++;
}
nextButton.disabled = false;
}

function showResult() {
questionElement.classList.add("hidden");
answersElement.classList.add("hidden");
nextButton.classList.add("hidden");
progressBar.style.width = "100%";
resultContainer.classList.remove("hidden");

resultMessage.textContent =
  score === quizQuestions.length ?
  "Congratulations! You got all answers correct." :
  "Good effort! Try again to score higher.";
scoreElement.textContent = `Your score: ${score}/${quizQuestions.length}`;
}

function restartQuiz() {
currentQuestionIndex = 0;
score = 0;
resultContainer.classList.add("hidden");
questionElement.classList.remove("hidden");
answersElement.classList.remove("hidden");
nextButton.classList.remove("hidden");
loadQuestion();
}

function updateProgressBar() {
const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
progressBar.style.width = `${progressPercentage}%`;
}

nextButton.addEventListener("click", () => {
currentQuestionIndex++;
if (currentQuestionIndex < quizQuestions.length) {
  loadQuestion();
} else {
  showResult();
}
});

restartButton.addEventListener("click", restartQuiz);

window.onload = loadQuestion;