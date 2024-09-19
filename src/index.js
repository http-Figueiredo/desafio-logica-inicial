function askInfo() {
    let playerName = prompt("diga o seu nome: ");
    var rank = prompt("Digite quantos pontos você tem: (valor entre 0 e 4200+");
}

let nameText = ("Hi, " + playerName + ", your rank is ");

function playerRank() {
    if (rank >= 1 && rank <= 499) {
        document.write(nameText + "Iron");
    }else if (rank >= 500 && rank <= 999) {
        document.write(nameText + "Bronze");
    }else if (rank >= 1000 && rank <= 1499) {
        document.write(nameText + "Silver");
    }else if (rank >= 1500 && rank <= 1999) {
        document.write(nameText + "Gold");
    }else if (rank >= 2000 && rank <= 2499) {
        document.write(nameText + "Platinum");
    }else if (rank >= 2500 && rank <= 2999) {
        document.write(nameText + "Emerald");
    }else if (rank >= 3000 && rank <= 3499) {
        document.write(nameText + "Diamond");
    }else if (rank >= 3500 && rank <= 3799) {
        document.write(nameText + "Master");
    }else if (rank >= 3800 && rank <= 4199) {
        document.write(nameText + "Grand Master");
    }else if (rank >= 4200) {
        document.write(nameText + "Challenger");
    }else {
    document.write(nameText + "unranked! let\'s play some games :3");
    }
};
