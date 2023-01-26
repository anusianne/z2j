function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function modulo(num1, num2) {
  return num1 % num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function calculate(ans) {
  let num1;
  if (ans === undefined) {
    num1 = parseFloat(prompt("Wpisz pierwszą liczbę:", ""));
    while (isNaN(num1)) {
      alert("Wpisz liczbę.");
      num1 = parseFloat(prompt("Wpisz pierwszą liczbę:", ""));
    }
  } else {
    num1 = ans;
  }
  let operator = prompt("Wybierz operator (+ ,- ,* ,/ albo %):", "");
  while (
    operator != "+" &&
    operator != "-" &&
    operator != "*" &&
    operator != "/" &&
    operator != "%"
  ) {
    alert("Wpisz poprawny znak działania.");
    operator = prompt("Wybierz operator (+ ,- ,* ,/ albo %):", "");
  }
  let num2 = parseFloat(prompt("Wpisz drugą liczbę:", ""));
  if (isNaN(num2)) {
    alert("Wpisz liczbę.");
    num2 = parseFloat(prompt("Wpisz drugą liczbę:", ""));
  } else if (num2 === 0 && operator === "/") {
    alert("Nie dzieli się przez zero, spróbuj jeszcze raz!");
    num2 = parseFloat(prompt("Wpisz drugą liczbę:", ""));
  }
  switch (operator) {
    case "+":
      result = addition(num1, num2);
      break;
    case "-":
      result = subtraction(num1, num2);
      break;
    case "*":
      result = multiplication(num1, num2);
      break;
    case "/":
      result = division(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    default:
      alert("Błąd. Spróbuj ponownie i wpisz poprawny znak.");
      break;
  }
  alert(result);
  calculate(result);
}
calculate();
