let val = prompt("What is the official name of JS?", "");
if (val === "ECMAScript") {
  alert("That's correct!");
} else {
  alert("ECMAScript");
}

let num = prompt("Give me a number:", "");
if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}

a = 3;
b = 2;
let result = a + b < 4 ? "Below" : "Over";

login = 'Director';
let message =
  console.log(login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "");
