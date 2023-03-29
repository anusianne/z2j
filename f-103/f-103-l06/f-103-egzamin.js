let player1 = "";
let player2 = "";
const square = document.getElementsByClassName("square");
const s11 = document.getElementById("s11");
const s12 = document.getElementById("s12");
const s13 = document.getElementById("s13");
const s21 = document.getElementById("s21");
const s22 = document.getElementById("s22");
const s23 = document.getElementById("s23");
const s31 = document.getElementById("s31");
const s32 = document.getElementById("s32");
const s33 = document.getElementById("s33");

function choosePlayer(playerID) {
  if (playerID === "X") {
    player1 = "X";
    player2 = "O";
  } else {
    player1 = "O";
    player2 = "X";
  }
}
function chooseSquare(squareID) {
  if (player1) {
    document.getElementById(squareID).insertAdjacentHTML("afterbegin", player1);
  } else {
    document.getElementById(squareID).insertAdjacentHTML("afterbegin", player2);
  }
}
