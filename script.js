var hignScoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer");
var containerEl = document.getElementById("container");
var headingEl = document.querySelector(".heading");
var introductionEl = document.querySelector(".introduction");
var buttonEl = document.querySelector("#startbtn");
var resultDiv=document.getElementById("allDone");
var scoreDiv=document.getElementById("score");
var initialEl=document.getElementById("initial");
var submitButton=document.getElementById("submitButton");




var mainEl = document.createElement("div");
var pEl = document.createElement("p");

var optionsEl = document.createElement("div");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var h4El = document.createElement("h4");

//



btn1.setAttribute("style", "display:flex;padding:5px;margin:5px;background-color:coral");
btn2.setAttribute("style", "display:flex;padding:5px;margin:5px;background-color:coral")
btn3.setAttribute("style", "display:flex;padding:5px;margin:5px;background-color:coral")
btn4.setAttribute("style", "display:flex;padding:5px;margin:5px;background-color:coral")
mainEl.setAttribute("style", "text-align:left");



var time = 30;
var i = 0;
var timeInterval;
var initial;

buttonEl.addEventListener("click", function () {
    headingEl.textContent = "";
    introductionEl.textContent = "";
    buttonEl.style.visibility = "hidden";
    
     timeInterval = setInterval(function () {
        time--;
        timerEl.textContent = time;

        if (time === 0) {
            clearInterval(timeInterval);
            

        }

    }, 1000);

    mainEl.appendChild(pEl);
    mainEl.appendChild(optionsEl)
    optionsEl.appendChild(btn1);
    optionsEl.appendChild(btn2);
    optionsEl.appendChild(btn3);
    optionsEl.appendChild(btn4);
    containerEl.appendChild(mainEl);
    containerEl.appendChild(h4El);


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

    
    looping();

    function looping() {
        if (i < quiz.length) {
            pEl.textContent = quiz[i].question;
            btn1.textContent = quiz[i].answers.a;
            btn2.textContent = quiz[i].answers.b;
            btn3.textContent = quiz[i].answers.c;
            btn4.textContent = quiz[i].answers.d;


        }
        else if(time==0|| i==quiz.length) {
           
            showResult();
            scoreDiv.textContent=score;
            resultDiv.setAttribute("style","display:block,max-width:500px;margin:0 auto;width:50%;text-align:left");
            clearInterval(timeInterval);
        
        }
    }

    function showResult() {
        mainEl.style.visibility="hidden";
        optionsEl.style.visibility="hidden";
        h4El.textContent="";
      
       
    }


    
var score = 0;
    btn1.addEventListener("click", function () {

        if (btn1.textContent === quiz[i].correctAnswer) {
            score++;
            h4El.textContent = "correct";

        }
        else {
            h4El.textContent = "wrong";
            time -= 10;
        }

        i++;
        looping();



    });
    btn2.addEventListener("click", function () {
        if (btn2.textContent === quiz[i].correctAnswer) {
            score++;
            h4El.textContent = "correct";
        }
        else {
            h4El.textContent = "wrong";
            time -= 10;
        }
        i++;
        
      looping();
    });
     

    btn3.addEventListener("click", function () {
        if (btn3.textContent === quiz[i].correctAnswer) {
            score++;
            h4El.textContent = "correct";
        }
        else {
            h4El.textContent = "wrong";
            time -= 10;

        }
        i++;
        looping();
    });
    btn4.addEventListener("click", function () {
        if (btn4.textContent === quiz[i].correctAnswer) {
            score++;
            h4El.textContent = "correct";
        }
        else {
            h4El.textContent = "wrong";
            time -= 10;
        }
        i++;
        

        looping();
    });

    submitButton.addEventListener("click", function() {
        initial = document.getElementById('initial').value;
        localStorage.setItem(initial, score);
        console.log(initial);
    });

    hignScoreEl.addEventListener("click", function() {
        var highScoreUser, highestScore = 0;
        var storedValues = Object.entries(localStorage);
        for (var i in storedValues) {
            var curr = storedValues[i];
            if (curr[1] > highestScore) {
                highestScore = curr[1];
                highScoreUser = curr[0];
            }
        }

        console.log('highest score user',highScoreUser);

    });
 
});



