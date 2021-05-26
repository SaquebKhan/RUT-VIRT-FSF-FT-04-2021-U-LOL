// TODO: Import `maths.js`
const maths = require("./math.js");
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operator = process.argv [2];
const argNumOne = process.argv [3];
const argNumTwo = process.argv [4];
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`


if (operator === "sun") {
    console.log(maths.sun(argNumOne, argNumTwo));
}
else if (operator === "difference") {
    console.log(maths.differ)
}