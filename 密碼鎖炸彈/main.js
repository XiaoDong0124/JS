let timer=document.getElementById("timer");
let userInput=document.getElementById("userInputer");
let hint = document.getElementById("hint");
let button = document.getElementsByTagName("button")[0];
let count= 10;
timer.innerHTML=count;
button.addEventListener("click",checkPassword);
let myVar=setInterval(myTimer,1000);

function myTimer(){
    count--;
    timer.innerHTML=count;
    if(count==0){
        hint.innerHTML="Gameover";
        clearInterval(myVar);
    }
}
function checkPassword(){
    hint.innerHTML="";
    if(parseInt(userInput.value)==1234){
        alert("you got it");
        clearInterval(myVar);
    }else{
        hint.innerHTML="Try again!";
    }
    userInput.value=null;
}