
var rndmNo=Math.random();
rndmNo=rndmNo*6;
rndmNo=Math.floor(rndmNo)+1; //this will genrate a random number from 0-6

var rndmImg= "images/dice"+ rndmNo+".png";

var rndmNo2=Math.random();
rndmNo2=rndmNo2*6;
rndmNo2=Math.floor(rndmNo2)+1; //this will genrate a random number from 0-6

var rndmImg2= "images/dice"+ rndmNo2+".png";

document.querySelector(".img1").setAttribute("src",rndmImg);
document.querySelector(".img2").setAttribute("src",rndmImg2);

if(rndmNo>rndmNo2){
    document.querySelector(".container h1").textContent="PLAYER 1️⃣ WINS";
}
if(rndmNo<rndmNo2){
    document.querySelector(".container h1").textContent="PLAYER 2️⃣ WINS";
}
if(rndmNo==rndmNo2){
    document.querySelector(".container h1").textContent="NO ONE WINS ITS A TIE";
}