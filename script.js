var scoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer");
var containerEl = document.getElementById("container");
var headingEl = document.querySelector(".heading");
var introductionEl = document.querySelector(".introduction");
var buttonEl = document.querySelector("#startbtn");



var mainEl = document.createElement("div");
var pEl = document.createElement("p");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
btn1.setAttribute("style", "display:flex;padding:5px;margin:5px;");
btn2.setAttribute("style", "display:flex;padding:5px;margin:5px;")
btn3.setAttribute("style", "display:flex;padding:5px;margin:5px;")
btn4.setAttribute("style", "display:flex;padding:5px;margin:5px;")
mainEl.setAttribute("style", "text-align:left");




var score = 0;

buttonEl.addEventListener("click", function () {
    console.log("hello");
    headingEl.textContent = "";
    introductionEl.textContent = "";
    buttonEl.style.visibility = "hidden";
    var time = 30;
    var timeInterval = setInterval(function () {
        time--;
        timerEl.textContent = time;

        if (time === 0) {
            clearInterval(timeInterval);
            headingEl.textContent = "game over";
        }

    }, 1000);

    mainEl.appendChild(pEl);
    mainEl.appendChild(btn1);
    mainEl.appendChild(btn2);
    mainEl.appendChild(btn3);
    mainEl.appendChild(btn4);
    containerEl.appendChild(mainEl);
    // pEl.textContent="Commomly used Data Type DO NOT include:";
    // btn1.textContent="valuetype";
    // btn2.textContent="value";
    // btn3.textContent="java";
    // btn4.textContent="javascript";

    var quiz = [{
        "question": "commonly used data types DO NOT include:",
        "answers": {
            "a": "strings",
            "b": "booleans",
            "c": "alerts",
            "d": "numbers"
        },
        "correctAnswer": "strings"
    },
    {
        "question": "The condition in an if/else statement is enclosed within_________:",
        "answers": {
            "a": "quotes",
            "b": "curly brackets",
            "c": "paranthesis",
            "d": "square brackets"
        },
        "correctAnswer": "quotes"
    },
    {
        "question": "Arrays in javaScript can be used to store",
        "answers": {
            "a": "numbers and strings",
            "b": "other arrays",
            "c": "booleans",
            "d": "all of the above"
        },
        "correctAnswer": "numbers and strings"
    }

    ];

    console.log(quiz)
    console.log("----------------")
    for (var i = 0; i < quiz.length; i++) {
        //    var check=JSON.stringify(quiz[i]);
        pEl.textContent = quiz[i].question;
        btn1.textContent = quiz[i].answers.a;
        btn2.textContent = quiz[i].answers.b;
        btn3.textContent = quiz[i].answers.c;
        btn4.textContent = quiz[i].answers.d;


    }

    //    console.log("parse-=->>", JSON.parse(check));

    // mainEl.innerHTML = quiz[i].question;



    btn1.addEventListener("click", function () {

        console.log(btn1.textContent)
        console.log(quiz.correctAnswer)
        if (btn1.textContent === quiz.correctAnswer) {
            score++;
            console.log("got point" + score);
        }
        else {
            console.log("lost the point");
        }



    });



}//var quiz= [{"q":"what is texas capital","a":"austin"}, {"c":"President of US", "d":"trump"}]


)
