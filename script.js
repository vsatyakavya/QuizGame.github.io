var scoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer");
var containerEl= document.getElementById("container");
var headingEl=document.querySelector(".heading");
var introductionEl=document.querySelector(".introduction");
var buttonEl=document.querySelector("#startbtn");
console.log(buttonEl);
console.log("hello");


var mainEl=document.createElement("div");
var pEl=document.createElement("p");
var btn1=document.createElement("button");
var btn2=document.createElement("button");
var btn3=document.createElement("button");
var btn4=document.createElement("button");





buttonEl.addEventListener("click",function(){
    console.log("hello");
        headingEl.textContent="";
        introductionEl.textContent="";
        buttonEl.style.visibility="hidden";
        var time=30;
     var timeInterval=setInterval(function(){
              time--;
              timerEl.textContent=time;
    
            if(time===0)
            {   
                clearInterval(timeInterval);
                headingEl.textContent="game over";
            }
    
        },1000);
 

pEl.textContent="Commomly used Data Type DO NOT include:";
btn1.textContent="valuetype";
btn2.textContent="value";
btn3.textContent="java";
btn4.textContent="javascript";
btn1.setAttribute("style","display:flex;padding:5px;margin:5px;");
btn2.setAttribute("style","display:flex;padding:5px;margin:5px;")
btn3.setAttribute("style","display:flex;padding:5px;margin:5px;")
btn4.setAttribute("style","display:flex;padding:5px;margin:5px;")
mainEl.setAttribute("style","text-align:left");




mainEl.appendChild(pEl);
mainEl.appendChild(btn1);
mainEl.appendChild(btn2);
mainEl.appendChild(btn3);
mainEl.appendChild(btn4);
containerEl.appendChild(mainEl);
    
});





