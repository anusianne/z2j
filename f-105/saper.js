const levelBtns = document.getElementsByClassName("level");
const levelChooser = document.getElementById("levelChooser");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const master = document.getElementById("master");
const btnUndo = document.createElement("button");
easy.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let i = 1; i <= 64; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    newDiv.appendChild(box);
    document.body.appendChild(btnUndo);
    btnUndo.innerText = "Undo";
    btnUndo.addEventListener("click", function () {
      levelChooser.style.display = "grid";
      newDiv.style.display = "none";
      box.style.display = "none";
      btnUndo.style.display = "none";
    });
  }
});
medium.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let i = 1; i <= 256; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    newDiv.style.gridTemplateColumns = "repeat(16,50px)";
    newDiv.style.gridTemplateRows = "repeat(16,50px)";
    newDiv.appendChild(box);
  }
});
master.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let i = 1; i <= 480; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    newDiv.style.gridTemplateColumns = "repeat(30,50px)";
    newDiv.style.gridTemplateRows = "repeat(16,50px)";
    newDiv.appendChild(box);
  }
});
