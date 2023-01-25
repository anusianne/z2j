function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  if (num2 === 0) {
    alert("Nie dzieli się przez zero, spróbuj jeszcze raz!");
    location.reload();
  } else {
    return num1 / num2;
  }
}
function modulo(num1, num2) {
  return num1 % num2;
}
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
