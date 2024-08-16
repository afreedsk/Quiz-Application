const questions = [
    {
        question: "What is the capital of India?",
        options: ["Bengaluru", "Delhi", "Paris", "Hyderabad"],
        answer: 1
    },
    {
        question: "How many Continents are there in World?",
        options: ["7", "11", "6", "9"],
        answer: 0
    },
    {
        question: "What is Chemical Symbol of Water?",
        options: ["O2", "HCL", "H2O", "NaCl"],
        answer: 2
    },
    {
        question: "Which of the following is not Programming Lanaguage?",
        options: ["Java", "Python", "HTML", "C++"],
        answer: 2
    },
    {
        question: "Who developed Java programming Language?",
        options: ["Guido Van Rossum", "Tim Berners-Lee", "James Gosling", "Bill Gates"],
        answer: 2
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('answer-options');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(li);
    });
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (index === correctAnswer) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        nextButton.classList.remove('hide');
    } else {
        showResult();
    }
}

function showResult() {
    nextButton.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', showQuestion);
restartButton.addEventListener('click', startQuiz);

startQuiz();
