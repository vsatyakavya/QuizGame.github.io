var scoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer");
var containerEl = document.getElementById("container");
var headingEl = document.querySelector(".heading");
var introductionEl = document.querySelector(".introduction");
var buttonEl = document.querySelector("#startbtn");



var mainEl = document.createElement("div");
var pEl = document.createElement("p");

var optionsEl = document.createElement("div");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var h1El = document.createElement("h1");


btn1.setAttribute("style", "display:flex;padding:5px;margin:5px;");
btn2.setAttribute("style", "display:flex;padding:5px;margin:5px;")
btn3.setAttribute("style", "display:flex;padding:5px;margin:5px;")
btn4.setAttribute("style", "display:flex;padding:5px;margin:5px;")
mainEl.setAttribute("style", "text-align:left");





buttonEl.addEventListener("click", function () {
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
    mainEl.appendChild(optionsEl)
    optionsEl.appendChild(btn1);
    optionsEl.appendChild(btn2);
    optionsEl.appendChild(btn3);
    optionsEl.appendChild(btn4);
    containerEl.appendChild(mainEl);
    containerEl.appendChild(h1El);

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
        "correctAnswer": "paranthesis"
    },
    {
        "question": "Arrays in javaScript can be used to store",
        "answers": {
            "a": "numbers and strings",
            "b": "other arrays",
            "c": "booleans",
            "d": "all of the above"
        },
        "correctAnswer": "all of the above"
    }

    ];

    var i = 0;
    looping();

    function looping() {
        if (i < quiz.length) {
            pEl.textContent = quiz[i].question;
            btn1.textContent = quiz[i].answers.a;
            btn2.textContent = quiz[i].answers.b;
            btn3.textContent = quiz[i].answers.c;
            btn4.textContent = quiz[i].answers.d;


        }
        else{
            h1El.textContent=" your score"+score;
        }
    }


    
var score = 0;
    btn1.addEventListener("click", function () {

        if (btn1.textContent === quiz[i].correctAnswer) {
            score++;
            h1El.textContent = "correct";

        }
        else {
            h1El.textContent = "wrong";
            time -= 10;
        }

        i++;
        looping();


    });
    btn2.addEventListener("click", function () {
        if (btn2.textContent === quiz[i].correctAnswer) {
            score++;
            h1El.textContent = "correct";
        }
        else {
            h1El.textContent = "wrong";
            time -= 10;
        }
        i++;
        looping();
    });
     

    btn3.addEventListener("click", function () {
        if (btn3.textContent === quiz[i].correctAnswer) {
            score++;
            h1El.textContent = "correct";
        }
        else {
            h1El.textContent = "wrong";
            time -= 10;

        }
        i++;
        looping();
    });
    btn4.addEventListener("click", function () {
        if (btn4.textContent === quiz[i].correctAnswer) {
            score++;
            h1El.textContent = "correct";
        }
        else {
            h1El.textContent = "wrong";
            time -= 10;
        }
        i++;
        looping();
    });

});