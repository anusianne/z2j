let formCalculator = document.forms.calculator;
formCalculator.money.oninput = calculate;
formCalculator.interest.oninput = calculate;
formCalculator.months.onchange = calculate;
function calculate() {
  let initial = +formCalculator.money.value;
  if (!initial) return;
  let interest = formCalculator.interest.value * 0.01;
  if (!interest) return;
  let years = formCalculator.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);

  let height = (result / formCalculator.money.value) * 100 + "px";
  document.getElementById("height-after").style.height = height;
  document.getElementById("money-before").innerHTML =
    formCalculator.money.value;
  document.getElementById("money-after").innerHTML = result;
}
calculate();
