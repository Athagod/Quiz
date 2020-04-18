const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const questionBox = document.querySelector("#questionBox");
const hide = document.querySelector(".hide")

const startGameDiv = document.getElementById("startGame")



const beginDiv = document.getElementById("begin")
const highScoreDiv = document.getElementById("highScore")
highScoreDiv.classList.add("hidden")

const wrongDiv = document.getElementById("wrongDiv")
wrongDiv.classList.add("hidden")

const correctDiv = document.getElementById("correctDiv")
correctDiv.classList.add("hidden")

const choiceContainer = document.querySelector(".choice-container")

const questions = [
    {
        question: "How do you write an ID selector in JavaScript",
        choices: ["#", ".", "!", "%"],
        answer: "#"
    },
    {
        question: "What is the full name of CSS?",
        choices: ["Client Side Script", "Cassading Style Sheet", "Coding Style Script", "Case Server Script"],
        answer: "Cassading Style Sheet",
    },
    {
        question: "What does ES6 stand for?",
        choices: ["Extra Strength 6", "Example Script 6", "ECMA Script 6", "Elon Script 6"],
        answer: "ECMA Script 6"
    }
]

let time = questions.length * 15;
let timer = document.querySelector(".timer");
let score = 0;
timer.textContent = score
let setIntervalID;
//timer function  

let questionIndex = 0;


function countDown() {
    time--;

    timer.textContent = time;
console.log(time)
    if (time <= 0) {
        clearInterval(setIntervalID)
        endGame();
        alert("Time's Up");
    }
    else {


        showQuestion();

        if (time % 15 === 0) {
            questionIndex++
        }

    }
}

//the questions function 

function showQuestion() {

    choiceContainer.textContent = ""
    const questionText = document.querySelector(".question-text");

    if (questions[questionIndex] != undefined) {
        let currentQuestion = questions[questionIndex].question;
        questionText.textContent = currentQuestion;
        let currentChoices = questions[questionIndex].choices
        currentChoices.forEach((choice, i) => {

            const button = document.createElement("button");
            button.setAttribute("class", "btn btn-primary button-display answerbutton");
            button.textContent = i + 1 + ". " + choice;
            button.addEventListener("click", function () {
                let userChoice = this.textContent
                if (questions[questionIndex] != undefined) {
                    let answer = questions[questionIndex].answer
                    console.log(answer, userChoice)
                    if (userChoice.indexOf(answer) > -1) {
                        correctDiv.classList.remove("hidden")
                        clearInterval(setIntervalID)
                        setTimeout(nextQuestion, 3000)

                    }
                }


            });

            choiceContainer.appendChild(button)

            const br = document.createElement("br")
            choiceContainer.appendChild(br)
        });
    }




}


function nextQuestion() {
    questionIndex++
    correctDiv.classList.add("hidden")

    if (questionIndex < questions.length){
        setIntervalID = setInterval(countDown, 1000)
    }
 


}
 


startBtn.addEventListener("click", function () {
    beginDiv.classList.add("hidden")
    questionBox.classList.remove("hidden")

    setIntervalID = setInterval(countDown, 1000)



})


