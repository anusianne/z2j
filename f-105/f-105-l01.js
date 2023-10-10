let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
console.log(styles[0]);
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);

// ! calculator object with two methods:
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
alert(calculator.sum());
alert(calculator.mul());
