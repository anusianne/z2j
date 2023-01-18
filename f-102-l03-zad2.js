let num1 = parseFloat(prompt("Wpisz pierwszą liczbę:", ""));
while (isNaN(num1)) {
  alert("Wpisz liczbę.");
  num1 = parseFloat(prompt("Wpisz pierwszą liczbę:", ""));
}
let operation = prompt("Wybierz operator (+ ,- ,* ,/ albo %):", "");
while (
  operation != "+" &&
  operation != "-" &&
  operation != "*" &&
  operation != "/" &&
  operation != "%"
) {
  alert("Wpisz poprawny znak działania.");
  operation = prompt("Wybierz operator (+ ,- ,* ,/ albo %):", "");
}
let num2 = parseFloat(prompt("Wpisz drugą liczbę:", ""));
if (isNaN(num2)) {
  alert("Wpisz liczbę.");
  num2 = parseFloat(prompt("Wpisz drugą liczbę:", ""));
}

if (operation === "+") {
  alert(num1 + num2);
} else if (operation === "-") {
  alert(num1 - num2);
} else if (operation === "*") {
  alert(num1 * num2);
} else if (operation === "/") {
  if (num2 === 0) {
    alert("Nie dzieli się przez zero, spróbuj jeszcze raz!");
    location.reload();
  } else {
    alert(num1 / num2);
  }
} else {
  alert(num1 % num2);
}
