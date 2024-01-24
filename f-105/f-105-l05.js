//try catch finally
// try {
//     console.log(x);
// }
// catch(error) {
//     console.log(error);
// }
// finally {
//     console.log("This always executes.");
// }
//dividers errors
try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    if (divisor === 0) {
        throw new Error("You can't divide by 0");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers!");
    }
    const result = dividend/divisor;
    console.log(result);
}
catch (e) {
    console.error(e)
}
console.log("Reached!");