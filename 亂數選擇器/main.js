$(function(){
    //console.log("Yo");
    $("input").on("click",function(){
       // alert("Hi");
       let numberOfListItem = $("li").length
       let randomChildNumber=Math.floor(Math.random()*numberOfListItem);
       $("h1").text($("li").eq(randomChildNumber).text());  //找到h1 設定文字變成Hello
       $("img").attr("src",list[randomChildNumber]); //類似字典的概念給屬性一個值
    });
});
let laman="https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg";
let Mc="https://cc.tvbs.com.tw/img/program/upload/2020/11/04/20201104155314-cdb87dcb.jpg";
let dumpling="https://shopping.udn.com/blog/public/uploads/edImages/20210423062930967.jpg";
let list =[laman,dumpling,Mc]

function xxx(){

}