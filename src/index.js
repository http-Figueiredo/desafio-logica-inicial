var rank = 0;
var playerName = "";

function askInfo() {
    playerName = prompt("diga o seu nome: ");
};

function addPoints() {
    rank += 100;
};

function rmvPoints() {
    if (rank <= 0) {     /* this doesn't allow the value of "rank" to be negative*/
        rank = 0;
    }else {
        rank -= 100;
    }
};

function playerRank() {

    const nameText = ("Hi, " + playerName + ", your rank is ");
    const text = document.getElementById("result").innerHTML;
    
    if (rank >= 1 && rank <= 499) {
        text = nameText + "Iron";
    }else if (rank >= 500 && rank <= 999) {
        text = nameText + "Bronze";
    }else if (rank >= 1000 && rank <= 1499) {
        text = nameText + "Silver";
    }else if (rank >= 1500 && rank <= 1999) {
        text = nameText + "Gold";
    }else if (rank >= 2000 && rank <= 2499) {
        text = nameText + "Platinum";
    }else if (rank >= 2500 && rank <= 2999) {
        text = nameText + "Emerald";
    }else if (rank >= 3000 && rank <= 3499) {
        text = nameText + "Diamond";
    }else if (rank >= 3500 && rank <= 3799) {
        text = nameText + "Master";
    }else if (rank >= 3800 && rank <= 4199) {
        text = nameText + "Grand Master";
    }else if (rank >= 4200) {
        text = nameText + "Challenger";
    }else {
    text = nameText + "unranked! let\'s play some games :3";
    }
};
