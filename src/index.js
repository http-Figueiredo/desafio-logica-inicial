var rank = 0;
var playerName = "";
var rankName = "";
let text = "";
let img = null;

function askInfo() {
    playerName = prompt("Tell us how you're called: ");
    playerRank();
    if (playerName){
        text = document.getElementById("result").innerHTML = "Hi " + playerName + ", you have " + rank + " points and your rank is " + rankName;

        document.querySelector(".add").disabled = false;
        document.querySelector(".rmv").disabled = false;
        document.querySelector(".nick").disabled = true;
    } else {
        document.getElementById("result").innerHTML = "Invalid Nickname, try again!";
    };
};

function addPoints() {
    rank += 100;
    playerRank();
};

function rmvPoints() {
    if (rank <= 0) {     /* this doesn't allow the value of "rank" to be negative*/
        rank = 0;
    }else {
        rank -= 100;
    };
    playerRank();
};

function playerRank() {
    
    if (rank >= 1 && rank <= 399) {
        rankName = "Iron";
    }else if (rank >= 400 && rank <= 799) {
        rankName = "Bronze";
    }else if (rank >= 800 && rank <= 1199) {
        rankName = "Silver";
    }else if (rank >= 1200 && rank <= 1599) {
        rankName = "Gold";
    }else if (rank >= 1600 && rank <= 1999) {
        rankName = "Platinum";
    }else if (rank >= 2000 && rank <= 2399) {
        rankName = "Emerald";
    }else if (rank >= 2400 && rank <= 2799) {
        rankName = "Diamond";
    }else if (rank >= 2800 && rank <= 2999) {
        rankName = "Master";
    }else if (rank >= 3000 && rank <= 3199) {
        rankName = "Grand Master";
    }else if (rank >= 3200) {
        rankName = "Challenger";
    }else {
        rankName = "Unranked! let\'s play some games :3";
    };

    text = document.getElementById("result").innerHTML = "Hi " + playerName + ", you have " + rank + " points and your rank is " + rankName + " " + img;
};