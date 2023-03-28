let count = 3;
let width = 130;
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let imgWidth = 130;
let offset = 0;
function slide(direction) {
  let myImgs = document.getElementsByClassName("icons");
  if (direction === "next" && offset >= -780) {
    offset -= width;
    for (myImg of myImgs) {
      myImg.style.transform = "translateX(" + offset + "px)";
      console.log(offset);
    }
  } else if (direction === "prev" && offset <= -130) {
    offset += width;
    for (myImg of myImgs) {
      myImg.style.transform = "translateX(" + offset + "px)";
    }
  }
}
