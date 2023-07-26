const easy = document.getElementById("#easy");
const medium = document.getElementById("#medium");
const master = document.getElementById("#master");

easy.addEventListener("click", function () {
  console.log("hi");
  const div = document.createElement("div");
  div.className = "container";
  div.style.gridTemplateColumns = "repeat(8,1fr)";
  div.style.gridTemplateRows = "repeat(8,1fr)";
  easy.appendChild("div");
});
