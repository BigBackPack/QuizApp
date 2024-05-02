let questions = [
    {
        "question": "Who invented HTML?",
        "anwer_1": "Tod McForster",
        "anwer_2": "Gill Robertson Peter",
        "anwer_3": "Tim Berners-Lee",
        "anwer_4": "Ryan Van-Dangard",
        "right_answer": 3
    },
    {
        "question": "What does HTML stand for?",
        "anwer_1": "Hyper Text Markup Language",
        "anwer_2": "Hidden Text Media List",
        "anwer_3": "Hardcore Typo Maker Loop",
        "anwer_4": "Hover Transfom Media Language",
        "right_answer": 1
    },
    {
        "question": "What does the tag <b> mean?",
        "anwer_1": "cursive",
        "anwer_2": "hidden",
        "anwer_3": "underlined",
        "anwer_4": "bold",
        "right_answer": 4
    },
    {
        "question": "How to nest a website inside a wesite?",
        "anwer_1": "By using hyperlinks",
        "anwer_2": "With the help ov an site index",
        "anwer_3": "By using a dynamic table structure",
        "anwer_4": "It is not possibel without plug ins",
        "right_answer": 1
    },
    {
        "question": "When was HTML invented",
        "anwer_1": "1965",
        "anwer_2": "1993",
        "anwer_3": "1966",
        "anwer_4": "2002",
        "right_answer": 2
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById("all-question").innerHTML = questions.length;
}


function showQuestion() {
    let questions = question[currentQuestion];
}