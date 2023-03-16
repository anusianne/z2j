function removalFunction() {
  document.getElementById("text").style.display = "none";
}

function removalFunction1() {
  document.getElementById("text2").remove();
}
function toggle() {
  let elem = document.getElementById("text3");
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function hiddenButton() {
    let hbutton = document.getElementById('hbutton');
    hbutton.style.display = "none";
}


