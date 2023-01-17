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

login = "Director";
let message = console.log(
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : ""
);

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
}

if (age >= 14 && age <= 90) {
  alert(age);
}

if (age < 14 && age > 90);
if (!(age >= 14 && age <= 90));

let login = prompt("Enter your login: ", "");
if (login === "Admin") {
  let password = prompt("Enter your password:", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Wrong password.");
  } else {
    alert("Canceled.");
  }
} else if (login === "" || null) {
  alert("Canceled.");
} else {
  alert("I do not know.");
}
