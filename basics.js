"use strict";
function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect input!");
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 12;
const result = add(number1, number2);
console.log(result);
