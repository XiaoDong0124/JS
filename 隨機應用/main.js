let thisH1 = document.getElementsByName("abc")[0];
let thisButton =document.getElementsByTagName("button")[0];
thisButton.addEventListener("click",showAlert);
let d =new Date();
document.body.style.color="white";
let wantUrl="https://www.w3schools.com/cssref/paper.gif"
let wantUrl1="https://3.bp.blogspot.com/-gpkZGUDntes/T8QT0SKVQ7I/AAAAAAAAB5U/_N8ISn2GITU/s1600/colorful_web_background_image.jpg"
let wantUrl2="https://i.pinimg.com/474x/af/b6/d9/afb6d99af51006ae46e855d6b9796c51--light-orange-background-patterns.jpg"
let list = [wantUrl,wantUrl1,wantUrl2]

function showAlert(){
    thisH1.innerHTML=Math.ceil(Math.random()*10);
    document.body.style.backgroundImage='url('+list[Math.floor(Math.random()*3)]+')';


    // let myFriends = new Array();
   // let myFriends =["David","Beck","亂玩",d]
    //   let myFriends="David,Beck,Dong";
    //   let myFriends_array=myFriends.split(",");
    // thisH1.innerHTML=myFriends_array.join("|");
    // myFriends[0]="John";
    // myFriends[1]="David";
    // myFriends[2]="Beck";
    // myFriends[3]=123;
    // thisH1.innerHTML="["+myFriends[0]+"|"+myFriends[1]+"|"+myFriends[2]+"|"+myFriends[3]+"]";
    //console.log(typeof(myFriends));
    // let d =new Date();
    // thisH1.innerHTML=d.toLocaleDateString();
    // alert("字串長度:"+thisH1.innerHTML.length+"\n"+
    //     "world在第"+thisH1.innerHTML.indexOf("World")+"\n"+
    //     "第一個字"+thisH1.innerHTML.split(" ")[0]+"\n"+ //split依特定符號進行切割，並放入陣列
    //     "第二個字"+thisH1.innerHTML.split(" ")[1]);
}
