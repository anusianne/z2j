const levelBtns = document.getElementsByClassName("level");
let gridSize = 0;
function levelBtnHandler() {
  console.log("hi");
  let newDiv = document.createElement("div");
  newDiv.className = "container";

  document.body.appendChild(newDiv);
}
for (el of levelBtns) {
  el.addEventListener("click", levelBtnHandler);
}
