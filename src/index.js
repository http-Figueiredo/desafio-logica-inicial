let charName = "";
var rank = 0;

function playerName() {
    charName = document.getElementById("input").value;
};

if (rank >= 1 && rank <= 499) {
    document.write("Your rank is Iron");
}else if (rank >= 500 && rank <= 999) {
    document.write("Your rank is Bronze");
}else if (rank >= 1000 && rank <= 1499) {
    document.write("Your rank is Silver");
}else if (rank >= 1500 && rank <= 1999) {
    document.write("Your rank is Gold");
}else if (rank >= 2000 && rank <= 2499) {
    document.write("Your rank is Platinum");
}else if (rank >= 2500 && rank <= 2999) {
    document.write("Your rank is Emerald");
}else if (rank >= 3000 && rank <= 3499) {
    document.write("Your rank is Diamond");
}else if (rank >= 3500 && rank <= 3799) {
    document.write("Your rank is Master");
}else if (rank >= 3800 && rank <= 4199) {
    document.write("Your rank is Grand Master");
}else if (rank >= 4200) {
    document.write("Your rank is Challenger");
}else {
    document.write("You\'re unranked, let\'s play some games");
}
console.log(charName);