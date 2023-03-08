let div = document.createElement("div");
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
document.body.append(div);

let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}
