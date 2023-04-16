countHome=0;
countGuest=0;
function freeRangePointsHome(){
    countHome+=1;
    document.getElementById("home-score-el").textContent=countHome;
}
function midRangePointsHome(){
    countHome+=2;
    document.getElementById("home-score-el").textContent=countHome;

}
function longRangePointsHome(){
    countHome+=3;
    document.getElementById("home-score-el").textContent=countHome;

}

function freeRangePointsGuest(){
    countGuest+=1;
    document.getElementById("guest-score-el").textContent=countGuest;
}
function midRangePointsGuest(){
    countGuest+=2;
    document.getElementById("guest-score-el").textContent=countGuest;
}
function longRangePointsGuest(){
    countGuest+=3;
    document.getElementById("guest-score-el").textContent=countGuest;
}

function finishGame(){
    if(countHome==countGuest){
        document.getElementById("conclusion").textContent="==>  The game is tie🎗️"
    }
    else if(countHome>countGuest){
        document.getElementById("conclusion").textContent=`==>  Home team is the winner by ${countHome-countGuest} lead 🥇🏁.`
    }
    else{
       document.getElementById("conclusion").textContent=`==>  Guest team is the winner by ${countGuest-countHome} lead 🥇🏁`
    }
}
function resetGame(){
    countHome=0;
    countGuest=0;
    document.getElementById("home-score-el").textContent=0;
    document.getElementById("guest-score-el").textContent=0;
    document.getElementById("conclusion").textContent="";
}