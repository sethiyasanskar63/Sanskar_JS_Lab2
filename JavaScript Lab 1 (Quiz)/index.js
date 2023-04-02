const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the highest mountain in the world?",
        choices: ["Mount Everest", "Mount Kilimanjaro", "Mount Rushmore", "Mount Fuji"],
        answer: "Mount Everest"
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Yuan", "Yen", "Dollar", "Euro"],
        answer: "Yen"
    },
    {
        question: "Who invented the telephone?",
        choices: ["Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin", "Isaac Newton"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btns = [btn0, btn1, btn2, btn3];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    btn0.innerHTML = currentQuizData.choices[0];
    btn1.innerHTML = currentQuizData.choices[1];
    btn2.innerHTML = currentQuizData.choices[2];
    btn3.innerHTML = currentQuizData.choices[3];
}

function getSelected() {
    let selectedChoice = undefined;

    btns.forEach((btn) => {
        if (btn.checked) {
            selectedChoice = btn.innerHTML;
        }
    });
    return selectedChoice;
}

function deselectAll() {
    btns.forEach((btn) => {
        btn.checked = false;
    });
}

function submitAnswer() {
    const selectedChoice = getSelected();
    if (selectedChoice === quizData[currentQuestion].answer) {
        score++;
    }
    deselectAll();
    currentQuestion++;
    if (currentQuestion === quizData.length) {
        showResults();
    } else {
        loadQuestion();
        updateProgress();
    }
}

function updateProgress() {
    progressEl.innerHTML = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function showResults() {
    quiz.innerHTML = `
    <h1>Quiz Results</h1>
    <hr>
    <h2>Your Score: ${score} out of ${quizData.length}</h2>
    <h2>Percentage: ${(score / quizData.length) * 100}%</h2>
  `;
}

loadQuestion();
updateProgress();
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.checked=true;
        submitAnswer();
    });
});
