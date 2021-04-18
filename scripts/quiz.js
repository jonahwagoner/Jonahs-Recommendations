import {RECOMMENDATIONS_MAP} from './constants.js';


function addButtonListeners() {
    const startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", startQuiz);
    const nextBtn = document.getElementById("next-button");
    nextBtn.addEventListener("click", nextQuestion);
    const getQuizResults = document.getElementById("get-results");
    getQuizResults.addEventListener("click", getResults);
}

window.onload = addButtonListeners;


function startQuiz(event) {
    event.preventDefault();
    const startButton = event.target;
    startButton.classList.add("d-none");
    const firstQuestion = document.getElementById("question1");
    firstQuestion.classList.remove("d-none");
    const nextButton = document.getElementById("next-button");
    nextButton.classList.remove("d-none");
    window.localStorage.setItem("currentQuestion", "1");
}

function nextQuestion(event) {
    event.preventDefault();
    const currentQuestion = parseInt(window.localStorage.getItem("currentQuestion"));
    const questionId = "question" + currentQuestion;
    const firstQuestion = document.getElementById(questionId);

    const qInput = document.querySelector("#" + questionId + " input");
    console.log('valid ', qInput.checkValidity())
    if(qInput.checkValidity() == false){
        return;
    }
    const answer = document.querySelector("#" + questionId + " input:checked").value;
    console.log('ans ', answer);
    window.localStorage.setItem(questionId, answer);


    const theNextQuestion = currentQuestion + 1;
    const nextBtn = event.target;
    nextBtn.blur();
    firstQuestion.classList.add("d-none");
    const secondQuestion = document.getElementById("question" + theNextQuestion);
    secondQuestion.classList.remove("d-none");
    window.localStorage.setItem("currentQuestion", theNextQuestion.toString());
    if(theNextQuestion == 4){
        nextBtn.classList.add("d-none");
        const getTheResults = document.getElementById("get-results");
        getTheResults.classList.remove("d-none");
    }

}

function getResults(event) {
    event.preventDefault();
    const currentQuestion = parseInt(window.localStorage.getItem("currentQuestion"));
    const questionId = "question" + currentQuestion;

    const qInput = document.querySelector("#" + questionId + " input");
    if(qInput.checkValidity() == false){
        return;
    }
    let answerString = "";
    for(let i = 1; i < currentQuestion; i++){
        const answer = localStorage.getItem("question" + i);
        answerString += (answer);
    }
    const currentAnswer = document.querySelector("#" + questionId + " input:checked").value;
    answerString += currentAnswer;

    const listItems = document.querySelectorAll("#quiz-rec-list li");
    const products = RECOMMENDATIONS_MAP[answerString];

    for (let i = 0; i < listItems.length; i++) {
        const productBrand = listItems[i].children[0].children[0];
        const productName = listItems[i].children[0].children[1];
        const productLink = listItems[i].children[0].children[2];
        const productDescription = listItems[i].children[1];
        productBrand.innerHTML = products[i].brand;
        productName.innerHTML = products[i].name;
        productLink.innerHTML = products[i].link;
        productDescription.innerHTML += products[i].ingredients
    }

    const buttonSpinner = document.getElementById("btn-spinner");
    buttonSpinner.classList.remove("d-none");
    const theGetResultsBtn = document.getElementById("get-results");

    theGetResultsBtn.disabled = true;

    setTimeout(() => {
        const quizHeader = document.getElementById("quiz-head");
        quizHeader.innerHTML = 'Your Personalized Regimen';


        const theForm = document.getElementById("quiz-form");
        theForm.classList.add("d-none");

        const theRecommendations = document.getElementById("quiz-rec-list");
        theRecommendations.classList.remove("d-none");

        localStorage.clear();

    }, 1600);



}