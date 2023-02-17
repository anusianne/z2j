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
  if (parseInt(num2) != 0) {
    return parseFloat(num1 / num2);
  } else {
    return "Nie dzieli się przez zero. Spróbuj jeszcze raz.";
  }
}
function calculate(ans) {
  let num1;
  let num2;
  let result;
  if (ans === undefined) {
    while (num1 === undefined || isNaN(num1) || num1 === "") {
      num1 = prompt("Wpisz pierwszą liczbę:");
      console.log(num1);
      if (!num1 && num1 != "") {
        return 0;
      } else {
        if (isNaN(num1)) {
          alert("Wpisz liczbę.");
        }
      }
    }
  } else {
    num1 = parseFloat(ans);
  }
  let operator;
  if (ans === undefined) {
    operator = prompt("Wybierz operator (+ ,- ,* ,/ albo %):");
  } else {
    operator = prompt(
      `Wynik to: ${ans}. Wybierz następny operator do kolejnych obliczeń.`
    );
  }
  if (operator === null) {
    return 0;
  } else if (operator === "") {
    operator = prompt(
      "Nie wybrałeś operatora. Wybierz operator (+ ,- ,* ,/ albo %):"
    );
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
  while (num2 === undefined || isNaN(num2) || num2 === "") {
    num2 = prompt("Wpisz drugą liczbę:");
    if (!num2 && num2 != 0 && num2 != "") {
      return 0;
    } else {
      if (isNaN(num2)) {
        alert("Wpisz liczbę.");
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
      while (typeof result === "string") {
        num2 = parseFloat(prompt("Wpisz drugą liczbę. INNĄ NIŻ ZERO..."));
        if (num2 === null) {
          return;
        }
        result = division(num1, num2);
      }
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    default:
      alert("Błąd. Spróbuj ponownie i wpisz poprawny znak.");
      break;
  }
  calculate(result);
}
calculate();
