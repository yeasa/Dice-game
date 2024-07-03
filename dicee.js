
document.querySelector("button").addEventListener("click", function play(){
    var randomNum1 = Math.floor(Math.random()*6)+1;
    var diceImage1 = "images/dice" + randomNum1 + ".png";
    
    var randomNum2 = Math.floor(Math.random()*6)+1;
    var diceImage2 = "images/dice" + randomNum2 + ".png";
    
    document.querySelector(".img1").setAttribute("src", diceImage1)
    document.querySelector(".img2").setAttribute("src", diceImage2)
    
    if (randomNum1 > randomNum2){
        document.querySelector("h1").textContent= "🚩Player 1 wins"
    }
    else if(randomNum1 < randomNum2){
        document.querySelector("h1").textContent = "Player 2 wins 🚩"
    }
    else{
        document.querySelector("h1").textContent = "Draw"
    }
    });



