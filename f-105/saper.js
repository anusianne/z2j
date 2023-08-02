const levelBtns = document.getElementsByClassName("level");
const levelChooser = document.getElementById("levelChooser");
const easy = document.getElementById("easy");
easy.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  levelChooser.style.display = "none";
  newDiv.classList.add("container");
  document.body.appendChild(newDiv);
  for (let i = 1; i <= 64; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    newDiv.appendChild(box);
  }
});
