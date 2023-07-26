const levelBtns = document.getElementsByClassName("level");
let gridSize = 0;
function levelBtnHandler() {
  console.log("hi");
  let newDiv = document.createElement("div");
  newDiv.className = "container";
  newDiv.style.gridTemplateColumns = "repeat(8,1fr)";
  newDiv.style.gridTemplateRows = "repeat(8,1fr)";
  document.body.appendChild(newDiv);
}
for (el of levelBtns) {
  el.addEventListener("click", levelBtnHandler);
}
