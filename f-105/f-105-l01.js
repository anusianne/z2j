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
// ! ladder object that allows to go up and down:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
