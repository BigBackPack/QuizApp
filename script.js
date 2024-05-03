let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "Tod McForster",
        "answer_2": "Gill Robertson Peter",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Ryan Van-Dangard",
        "right_answer": 3
    },
    {
        "question": "What does HTML stand for?",
        "answer_1": "Hyper Text Markup Language",
        "answer_2": "Hidden Text Media List",
        "answer_3": "Hardcore Typo Maker Loop",
        "answer_4": "Hover Transfom Media Language",
        "right_answer": 1
    },
    {
        "question": "What does the tag <b> mean?",
        "answer_1": "cursive",
        "answer_2": "hidden",
        "answer_3": "underlined",
        "answer_4": "bold",
        "right_answer": 4
    },
    {
        "question": "How to nest a website inside a wesite?",
        "answer_1": "By using hyperlinks",
        "answer_2": "With the help of an site index",
        "answer_3": "By using a dynamic table structure",
        "answer_4": "It is not possibel without plug ins",
        "right_answer": 1
    },
    {
        "question": "When was HTML invented?",
        "answer_1": "1965",
        "answer_2": "1993",
        "answer_3": "1966",
        "answer_4": "2002",
        "right_answer": 2
    }
];


let currentQuestionPos = 0;
let counter = 1;
let correctAnswers = 0;
let progress = 0;

let audioWin = new Audio("audio/win.ogg");
let audioFail = new Audio("audio/fail.ogg");
let audioEnd = new Audio("audio/end.ogg");


function init() {
    document.getElementById("all-question").innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (counter - 1 < questions.length) {
        let currentQuestion = questions[currentQuestionPos];

        document.getElementById("questiontext").innerHTML = currentQuestion["question"];
        document.getElementById("answer_1").innerHTML = currentQuestion["answer_1"];
        document.getElementById("answer_2").innerHTML = currentQuestion["answer_2"];
        document.getElementById("answer_3").innerHTML = currentQuestion["answer_3"];
        document.getElementById("answer_4").innerHTML = currentQuestion["answer_4"];
    } else {
        document.getElementById("end-screen").style = "display: block";
        document.getElementById("quiz-screen").style = "display: none";
        document.getElementById("result-right").innerHTML = `${correctAnswers}`;
        document.getElementById("result-total").innerHTML = `${counter -1}`;
    }
}


function evalAnswer(answer_id) {
    let question = questions[currentQuestionPos];
    let rightAnswer = question["right_answer"];
    let selcetedQusetionNumber = Number(answer_id.slice(-1));
    let idOfRightAnswer = "answer_" + rightAnswer;

    if(selcetedQusetionNumber == rightAnswer) {
        document.getElementById(answer_id).parentNode.classList.add("bg-success");
        document.getElementById("next-question-btn").disabled = false;
        correctAnswers++;
        audioWin.play();
    } else {
        document.getElementById(answer_id).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
        document.getElementById("next-question-btn").disabled = false;
        audioFail.play();
    }
}


function nextQuestion() {
    currentQuestionPos += 1;
        for (let i = 1; i < 5; i ++) {        
            document.getElementById("answer_" + i).parentNode.classList.remove("bg-success");
            document.getElementById("answer_" + i).parentNode.classList.remove("bg-danger");
        }
        document.getElementById("next-question-btn").disabled = true;

        counter ++;
        document.getElementById("counter").innerHTML = `${counter}`;

        progress += 20;
        document.getElementById("progress-bar").style = `width: ${progress}%`;

        showQuestion()
    }


function restartQuiz() {
    audioEnd.play();
    setTimeout(reloadPage, 600);
}

function reloadPage(){
    window.location = "index.html", self;
}