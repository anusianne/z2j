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
    while (num1 === undefined || isNaN(num1)) {
      num1 = prompt("Wpisz pierwszą liczbę:");
      if (!num1) {
        return 0;
      } else {
        if (isNaN(num1)) {
          alert("Wpisz liczbę.");
        }
      }
    }
  } else {
    num1 = ans;
  }
  let operator;
  if (ans === undefined) {
    operator = prompt("Wybierz operator (+ ,- ,* ,/ albo %):");
  } else {
    operator = prompt(
      `Wynik to: ${ans}. Wybierz następny operator do kolejnych obliczeń.`
    );
  }
  if (!operator) {
    return 0;
  } else {
    while (
      operator != "+" &&
      operator != "-" &&
      operator != "*" &&
      operator != "/" &&
      operator != "%"
    ) {
      alert("Wpisz poprawny znak działania.");
      operator = prompt("Wybierz operator (+ ,- ,* ,/ albo %):");
      if (!operator) {
        return 0;
      }
    }
  }
  let num2;
  while (num2 === undefined || isNaN(num2)) {
    num2 = prompt("Wpisz drugą liczbę:");
    if (!num2 && num2 != 0) {
      return 0;
    } else {
      if (isNaN(num2)) {
        alert("Wpisz liczbę.");
      } else if (parseInt(num2) === 0 && operator === "/") {
        alert("Nie dzieli się przez zero, spróbuj jeszcze raz!");
        num2 = undefined;
      }
    }
  }
  switch (operator) {
    case "+":
      result = addition(parseFloat(num1), parseFloat(num2));
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
