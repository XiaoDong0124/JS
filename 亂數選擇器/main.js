$(function(){
    //console.log("Yo");
    $("input").on("click",function(){
       // alert("Hi");
       $("h1").text($("li").eq(Math.floor(Math.random()*$("li").length)).text())  //找到h1 設定文字變成Hello
    });
});

function xxx(){

}