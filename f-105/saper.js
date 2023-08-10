const levelBtns = document.getElementsByClassName("level");
const levelChooser = document.getElementById("levelChooser");
const levelOption = {
  easy: document.getElementById("easy"),
  medium: document.getElementById("medium"),
  master: document.getElementById("master"),
};
let mineCounter = 0;
const boxes = document.getElementsByClassName("box");
const totalBoxesPerOptions = { easy: 64, medium: 256, master: 480 };
const btnUndo = document.createElement("button");
levelOption.easy.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let y = 1; y <= 8; y++) {
    for (let x = 1; x <= 8; x++) {
      let box = document.createElement("div");
      box.setAttribute("isFlagged", "false");
      newDiv.style.gridTemplateColumns = "repeat(8,50px)";
      newDiv.style.gridTemplateRows = "repeat(8,50px)";
      box.classList.add("box");
      box.setAttribute("id", "b" + y.toString() + x.toString());
      box.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        rightClick(box);
      });
      newDiv.appendChild(box);
      box.addEventListener("click", () => {
        box.className = "clickedBox";
        countMinesAround(box);
      });
    }
  }

  const totalBoxes = parseInt(getTotalBoxes(totalBoxesPerOptions));
  const totalMines = parseInt(numberOfMines(totalBoxes));
  while (mineCounter < totalMines) {
    console.log("total mines: " + totalMines);
    console.log(boxes);
    for (let box = 0; box < boxes.length - 1; box++) {
      let divider = parseFloat(totalMines / totalBoxes).toFixed(4);
      console.log("trying to plant " + divider);
      if (Math.random() <= parseFloat(divider) && mineCounter < totalMines) {
        boxes.item(box).setAttribute("hasMine", "true");
        mineCounter += 1;
      }
    }
    document.body.appendChild(btnUndo);
    btnUndo.innerText = "Undo";
    btnUndo.addEventListener("click", function () {
      location.reload();
    });
  }
});
levelOption.medium.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let y = 1; y <= 16; y++) {
    for (let x = 1; x <= 16; x++) {
      let box = document.createElement("div");
      box.setAttribute("isFlagged", "false");
      box.classList.add("box");
      box.setAttribute("id", "b" + y.toString() + x.toString());
      newDiv.style.gridTemplateColumns = "repeat(16,50px)";
      newDiv.style.gridTemplateRows = "repeat(16,50px)";
      box.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        rightClick(box);
      });
      newDiv.appendChild(box);
      box.addEventListener("click", () => {
        box.className = "clickedBox";
      });
    }
  }
  document.body.appendChild(btnUndo);
  btnUndo.innerText = "Undo";
  btnUndo.addEventListener("click", function () {
    location.reload();
  });
});
levelOption.master.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let y = 1; y <= 30; y++) {
    for (let x = 1; x <= 16; x++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("isFlagged", "false");
      box.setAttribute("id", "b" + y.toString() + x.toString());
      newDiv.style.gridTemplateColumns = "repeat(30,50px)";
      newDiv.style.gridTemplateRows = "repeat(16,50px)";
      box.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        rightClick(box);
      });
      newDiv.appendChild(box);
      box.addEventListener("click", () => {
        box.className = "clickedBox";
      });
    }
  }
  document.body.appendChild(btnUndo);
  btnUndo.innerText = "Undo";
  btnUndo.addEventListener("click", function () {
    location.reload();
  });
});
function rightClick(box) {
  if (box.getAttribute("isFlagged") === "false") {
    box.setAttribute("isFlagged", "true");
  } else {
    box.setAttribute("isFlagged", "false");
  }
  box.classList.toggle("isFlagged", box.getAttribute("isFlagged") === "true");
}
function numberOfMines(totalBoxes) {
  switch (totalBoxes) {
    case totalBoxes.easy:
      return 10;
    case totalBoxes.medium:
      return 40;
    case totalBoxes.master:
      return 90;
    default:
      return 10;
  }
}
function getTotalBoxes(totalBoxesPerOptions) {
  switch (totalBoxesPerOptions) {
    case totalBoxesPerOptions.easy:
      return 64;
    case totalBoxesPerOptions.medium:
      return 256;
    case totalBoxesPerOptions.master:
      return 480;
    default:
      return 64;
  }
}
function countMinesAround(box) {
  let bombCount = 0;
  const boxClickedId = box.id;
  boxarr = boxClickedId.split("").shift();
  console.log(boxarr);
  for (let y = -1; y <= 1; y++) {
    for (let x = -1; x <= 1; x++) {
      if (y === 0 && x === 0) {
        continue;
      }
      const idToSearch = "b" + y.toString() + x.toString();
      if (boxes.some((b) => b.id === idToSearch)) {
        bombCount++;
      }
    }
  }
  return bombCount;
}
