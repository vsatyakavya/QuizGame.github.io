var hignScoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer");


var containerEl = document.getElementById("container");

var firstPageEl = document.querySelector("#firstPage");
// var headingEl = document.querySelector(".heading");
// var introductionEl = document.querySelector(".introduction");
var buttonEl = document.querySelector("#startbtn");

var resultDiv = document.getElementById("allDone");
var scoreDiv = document.getElementById("score");
var initialEl = document.getElementById("initial");
var submitButton = document.getElementById("submitButton");

var finalPageEl=document.getElementById("finalPage");
var highScoreInfoEl=document.querySelector(".highScoreInfo");
var goBackEl=document.querySelector("#goback");
var clearHighScoreEl=document.querySelector("#clearHighScore");




var mainEl = document.createElement("div");
var pEl = document.createElement("p");

var optionsEl = document.createElement("div");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var h4El = document.createElement("h4");

//



btn1.setAttribute("class","optionbuttons");
btn2.setAttribute("class","optionbuttons");

btn3.setAttribute("class","optionbuttons");
btn4.setAttribute("class","optionbuttons");

mainEl.setAttribute("style", "text-align:left");
optionsEl.setAttribute("style","text-align:left");
pEl.setAttribute("style","text-align:left");

var score = 0;
var quiz;
var time;
var i;
var timeInterval;
var initial;

buttonEl.addEventListener("click", function () {
    time=30;
    i=0;
    // headingEl.textContent = "";
    // introductionEl.textContent = "";
    // buttonEl.style.visibility = "hidden";
  
     firstPageEl.setAttribute("style","display:none;");
     mainEl.setAttribute("style","display:block");
     optionsEl.setAttribute("style","display:block");


    
     timeInterval = setInterval(function () {
        time--;
        timerEl.textContent = time;

        if (time === 0) {
            clearInterval(timeInterval);
            showResult();

        }

    }, 1000);

    mainEl.appendChild(pEl);
    mainEl.appendChild(optionsEl)
    optionsEl.appendChild(btn1);
    optionsEl.appendChild(btn2);
    optionsEl.appendChild(btn3);
    optionsEl.appendChild(btn4);
    containerEl.appendChild(mainEl);
    console.log(mainEl,pEl);
    containerEl.appendChild(h4El);


     quiz = [{
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

    


     score = 0;
    // btn1.addEventListener("click", function () {

    //     if (btn1.textContent === quiz[i].correctAnswer) {
    //         score++;
    //         h4El.textContent = "correct";

    //     }
    //     else {
    //         h4El.textContent = "wrong";
    //         time -= 10;
    //     }

    //     i++;
    //     looping();



    // });
    // btn2.addEventListener("click", function () {
    //     if (btn2.textContent === quiz[i].correctAnswer) {
    //         score++;
    //         h4El.textContent = "correct";
    //     }
    //     else {
    //         h4El.textContent = "wrong";
    //         time -= 10;
    //     }
    //     i++;

    //     looping();
    // });


    // btn3.addEventListener("click", function () {
    //     if (btn3.textContent === quiz[i].correctAnswer) {
    //         score++;
    //         h4El.textContent = "correct";
    //     }
    //     else {
    //         h4El.textContent = "wrong";
    //         time -= 10;

    //     }
    //     i++;
    //     looping();
    // });
   

        
    // {
    //     if (btn4.textContent === quiz[i].correctAnswer) {
    //         score++;
    //         h4El.textContent = "correct";
    //     }
    //     else {
    //         h4El.textContent = "wrong";
    //         time -= 10;
    //     }
    //     i++;


    //     looping();
    // });
   
    submitButton.addEventListener("click", function () {
        initial = document.getElementById('initial').value;
        localStorage.setItem(initial, score);
        console.log(initial);

        var highScoreUser="";
        var highestScore = 0;
        var storedValues = Object.entries(localStorage);
        for (var i in storedValues) {
            var curr = storedValues[i];
            if (curr[1] > highestScore) {
                highestScore = curr[1];
                highScoreUser = curr[0];
                console.log(highestScore);
                console.log(highScoreUser);
            }

        }
        resultDiv.setAttribute("style","display:none")
        finalPageEl.setAttribute("style","display:block;color:blue;");
        highScoreInfoEl.textContent=highScoreUser+" "+highestScore;
        highScoreInfoEl.setAttribute("style","background-color:skyblue;");
       // highScoreInfoEl.textContent= highScoreUser;
       // highScoreInfoEl.setAttribute("style","background-color:#cccccc;")

        console.log('highest score user', highScoreUser);
    });
   

    goBackEl.addEventListener("click",function( ){
        
        firstPageEl.setAttribute("style","display:block");
        finalPageEl.setAttribute("style","display:none");
        
    })
    
    clearHighScoreEl.addEventListener("click",function(){
        highScoreInfoEl.textContent="";
        highScoreInfoEl.setAttribute("style","display:none")
        console.log("hellooooooooo");
    });


});
 
// var goBackEl=document.querySelector("#goback");
// var clearHighScoreEl=document.querySelector("#clearHignScore");


btn1.addEventListener("click", checkAnswer )
btn2.addEventListener("click", checkAnswer )
btn3.addEventListener("click", checkAnswer )
btn4.addEventListener("click", checkAnswer )
function checkAnswer(event){
    if (event.target.textContent === quiz[i].correctAnswer) {
        score++;
        h4El.textContent = "correct";

    }
    else {
        h4El.textContent = "wrong";
        time -= 10;
    }
    i++;

    setTimeout(function(){
        h4El.textContent="";
    },500)
    looping()
}
function looping() {
    if (i < quiz.length) {
        pEl.textContent = quiz[i].question;
        btn1.textContent = quiz[i].answers.a;
        btn2.textContent = quiz[i].answers.b;
        btn3.textContent = quiz[i].answers.c;
        btn4.textContent = quiz[i].answers.d;


    }
    else if (time == 0 || i == quiz.length) {
        console.log("helloooooooooooooo")
        showResult();
        clearInterval(timeInterval);

    }
}

function showResult() {
    mainEl.setAttribute("style","display:none");
    optionsEl.setAttribute("style","display:none");
    scoreDiv.textContent = score;
    resultDiv.setAttribute("style", "display:block,max-width:500px;margin:0 auto;width:50%;text-align:left");

    h4El.textContent = "";


}
