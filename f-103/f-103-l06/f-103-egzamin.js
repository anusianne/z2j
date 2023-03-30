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
const arr = [s11, s12, s13, s21, s22, s23, s31, s32, s33];
function choosePlayer(playerID) {
  if (playerID === "X") {
    player1 = "X";
    player2 = "O";
  } else {
    player1 = "O";
    player2 = "X";
  }
  document.getElementById("playerChooser").style.visibility = "hidden";
}
function chooseSquare(squareID) {
  const sq = document.getElementById(squareID);
  if (sq.innerText === "") {
    sq.insertAdjacentHTML("afterbegin", player1);
    setTimeout(aiMove, 500);
  }
}
function aiMove() {
  for (let sq of arr) {
    if (sq.innerText === "") {
      sq.innerText = player2;
      break;
    }
  }
}
