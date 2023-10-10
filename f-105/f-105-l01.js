// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles[1] = "Classics";
// console.log(styles);
// console.log(styles[0]);
// styles.shift();
// styles.unshift("Rap", "Reggae");
// console.log(styles);
// ! calculator object with two methods:
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// alert(calculator.sum());
// alert(calculator.mul());
// // ! ladder object that allows to go up and down:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep().down().showStep();
// // ! construction function calculator
// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
//! constructor function Accumulator(starting value)
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
