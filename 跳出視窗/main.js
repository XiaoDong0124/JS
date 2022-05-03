// window.onload = function(){
//     //document.write("Hello JavaScript");
//     document.onclick = function(e){
//         //debugger;
//         alert(e.target.innerHTML+"有"+e.target.innerHTML.length+"個字元");
//     };
// }
// let confirmAnswer = confirm("你真的確定你想要取消這個服務嗎？");
// debugger;
// let thisH1 = document.getElementsByTagName("h1")[0];
// if(confirmAnswer){
//     thisH1.innerHTML = "服務已取消";
// }else{
//     thisH1.innerHTML = "繼續使用本服務";
// }

// let promptAnswer = prompt("小明家有三小孩，兩個哥哥叫張一、張二，請問第三個較?","張三")
// let thisH1 = document.getElementById("Response");

// switch(promptAnswer){
//     case "張三":
//         thisH1.innerHTML = "那小明是誰?";
//         break
//     case "小明":
//         thisH1.innerHTML = "聰明喔";
//         break
//     default:
//         thisH1.innerHTML = "請你離開";
// }

function showAlert(){
    thisH1.innerHTML ="Hello!";

    // for (let i=0;i<10;i++){
    //     if(i==3){
    //         continue;
    //     }
    //     console.log(i);
    // }
    // let person={
    //     firstName:"Dong",
    //     lastName:"Beck",
    //     height:175
    // };
    //for(x in person){
    //    console.log(x+":"+person[x]);
    //}
    for(x in window){
        console.log(x+":"+window[x]);
    }
    
}
let thisButton =document.getElementById("bbb");
let thisH1 =document.getElementById("Response");
//let thisButton = document.getElementsByTagName("Button")[0];
//let thisH1 = document.getElementsByTagName("h1")[0];
// #1
// thisButton.onclick = function(){
//     showAlert();
// };
// #2
// thisButton.onclick = function(){
//     thisH1.innerHTML = "Hello!";
// };
// #3
// thisButton.onclick=showAlert;
// #4
thisButton.addEventListener("click",showAlert); //如果發生，執行他
