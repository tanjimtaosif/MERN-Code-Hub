function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || player1 === null || Array.isArray(player1) ||
        typeof player2 !== "object" || player2 === null || Array.isArray(player2)) {
        return "Invalid";
    }
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;
    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

let team1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
let team2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }; 
// Sample Inputs:
// let team1 = { name: "Spain", foul: 3, cardY: 2, cardR: 1 };
// let team2 = { name: "Germany", foul: 3, cardY: 2, cardR: 1 };
// let team1 = { name: "Italy", foul: 0, cardY: 0, cardR: 0 };
// let team2 = { name: "France", foul: 1, cardY: 0, cardR: 0 };
console.log("Problem-03 Output:", bestTeam(team1, team2));