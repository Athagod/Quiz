const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const questionBox = document.querySelector("#questionBox");
const correctDiv = document.querySelector("#correctDiv");
const incorrectDiv = document.querySelector("#incorrectDiv");
const hide = document.querySelector(".hide")

const startGameDiv = document.getElementById("startGame")
startGameDiv.classList.add("hidden")


const beginDiv = document.getElementById("begin")
const highScoreDiv = document.getElementById("highScore")
highScoreDiv.classList.add("hidden")

const questions = [
{
    question: "How do you write an ID selector in JavaScript", 
    choices: ["#", ".", "!", "%"],
    answer: "#"
}, 
{
    question: "What is the full name of CSS?",
    choices: ["Client Side Script", "Cassading Style Steet", "Coding Style Script", "Case Server Script"],
    answer: "Cassading Style Steet",
}, 
{
    question: "What does ES6 stand for?",
    choices: ["Extra Strength 6", "Example Script 6", "ECMA Script 6", "Elon Script 6"],
    answer: "ECMA Script 6"
}
]


let time = questions.length * 20;
let timer = document.querySelector(".timer");
let score = 0;

let setIntervalID;
//timer function  

function countDown()   {
        time--;

        timer.textContent = time;

        if (time <= 0 ){
            endGame();
            alert("Time's Up");
        }
}


//the questions function 

function showQuestion() {
   let questionIndex = 0;
   let currentQuestion = questions[questionIndex]; 

   const questionText = document.querySelector(".question-text");
   questionText.textContent = currentQuestion;

   currentQuestion.choices.forEach(function (choice) {

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary button-display");

    //adding the event listener

    button.addEventListener("click", function (event) {
        event.preventDefault();
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } else {
            time -= 10
        }

    });

    button.textContent = choice;

    choiceOption.appendChild(Button);
       
   });


}


startBtn.addEventListener("click", function(){

    startGameDiv.classList.remove("hidden")
    beginDiv.classList.add("hidden")

       setIntervalID = setInterval(countDown, 1000)


    showQuestion();

    
})

function showScore() {

    gameBegin.classList.add("hide");

    questionBox.classList.add("hide");

    gameOver.classList.add("hide");

}

function endQuiz() {

    gameScreen.classList.add("hide");

    gameOver.classList.remove("hide");

    const score = {
        score: Math.floor(Math.random()*50)
    }
}

