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
  for (let y = 1; y <= 8; y++) {
    for (let x = 1; x <= 8; x++) {
      let box = document.createElement("div");
      newDiv.style.gridTemplateColumns = "repeat(8,50px)";
      newDiv.style.gridTemplateRows = "repeat(8,50px)";
      box.classList.add("box");
      box.setAttribute("id", "b" + y.toString() + x.toString());
      newDiv.appendChild(box);
    }
  }
  document.body.appendChild(btnUndo);
  btnUndo.innerText = "Undo";
  btnUndo.addEventListener("click", function () {
    location.reload();
  });
});
medium.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let y = 1; y <= 16; y++) {
    for (let x = 1; x <= 16; x++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("id", "b" + y.toString() + x.toString());
      newDiv.style.gridTemplateColumns = "repeat(16,50px)";
      newDiv.style.gridTemplateRows = "repeat(16,50px)";
      newDiv.appendChild(box);
    }
  }
  document.body.appendChild(btnUndo);
  btnUndo.innerText = "Undo";
  btnUndo.addEventListener("click", function () {
    location.reload();
  });
});
master.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let y = 1; y <= 30; y++) {
    for (let x = 1; x <= 16; x++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("id", "b" + y.toString() + x.toString());
      newDiv.style.gridTemplateColumns = "repeat(30,50px)";
      newDiv.style.gridTemplateRows = "repeat(16,50px)";
      newDiv.appendChild(box);
    }
  }
  document.body.appendChild(btnUndo);
  btnUndo.innerText = "Undo";
  btnUndo.addEventListener("click", function () {
    location.reload();
  });
});
