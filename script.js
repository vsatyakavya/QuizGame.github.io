var scoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer");
var containerEl= document.getElementById("container");
var headingEl=document.querySelector(".heading");
var introductionEl=document.querySelector(".introduction");
var buttonEl=document.querySelector("#startbtn");
console.log(buttonEl);
console.log("hello");
var mainEl=document.getElementById("main");

buttonEl.addEventListener("click",function(){
    console.log("hello");
        headingEl.textContent="";
        introductionEl.textContent="";
        var time=60;
     var timeInterval=setInterval(function(){
              time--;
              timerEl.textContent=time;
    
            if(time===0)
            {
                headingEl.textContent="game over";
            }
    
        },1000);
    
});




