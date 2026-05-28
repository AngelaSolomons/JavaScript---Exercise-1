// Create function that multiplies three numbers and returns the result
function multiply(a, b, c) {
    return a * b * c;
}
console.log(`Sum of 4, 6, 12: ${multiply(4, 6, 12)}`);

let convertToSeconds = function(minutes) {
    return minutes * 60;
}

function fahrenheitToCelsius(fahrenheitTemp) {
    return (fahrenheitTemp - 32) / 1.8
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World!"));