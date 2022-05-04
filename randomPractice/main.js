$(function(){
    $("input").on("click",function(){
        //alert("HI");
        randomOfFood=Math.floor(Math.random()*FoodList.length)
        $("h1").text($("li").eq(randomOfFood).text());
        $("img").attr("src",FoodList[randomOfFood]);
    });
});
let Laman="https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg";
let Mc="https://cc.tvbs.com.tw/img/program/upload/2020/11/04/20201104155314-cdb87dcb.jpg";
let Dumpling="https://shopping.udn.com/blog/public/uploads/edImages/20210423062930967.jpg";
FoodList=[Laman,Dumpling,Mc]

