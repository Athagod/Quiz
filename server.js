const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const questionBox = document.querySelector("#questionBox");
const correctDiv = document.querySelector("#correctDiv");
const incorrectDiv = document.querySelector("#incorrectDiv");
const hide = document.querySelector(".hide")

let time = question.length * 20;
let timer = document.querySelector("#timer");
let score = 0;

const questions = [

    
]



//timer function 

function countDown()    {
    timerInterval = setInterval(function(){
        time--;

        timer.textContent = time;

        if (time <= 0 ){
            endGame();
            alert("Time's Up");
        }
    }, 1000);
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

    gameBegin.classList.add("hide");

    questionBox.classList.remove("hide");

    countDown();

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

