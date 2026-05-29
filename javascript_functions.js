// Create function that multiplies three numbers and returns the result
function multiply(a, b, c) {
    return a * b * c;
}
console.log(`Sum of 4, 6, 12: ${multiply(4, 6, 12)}`);

// Create function that converts minutes to seconds and returns the result
let convertToSeconds = function(minutes) {
    return minutes * 60;
}
console.log(`5 minutes in seconds: ${convertToSeconds(5)}`);

// Create function that converts Fahrenheit to Celsius and returns the result
function fahrenheitToCelsius(fahrenheitTemp) {
    return (fahrenheitTemp - 32) / 1.8
}
console.log(`Fahrenheit to Celsius: ${fahrenheitToCelsius(80)}`);

// Create function that takes a string as input and returns the string reversed
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(`Reversed string: ${reverseString("Hello World!")}`);

// Create function that takes a string as input and returns the number of vowels in the string
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split("").filter(char => vowels.includes(char)).length;
}
console.log(`Output the amount of vowels found: ${countVowels("Goodbye Everyone!")}`);

// Create function that takes a number and returns true if the number is prime, and false otherwise
function isPrime(num) {
     if (num <= 1) return false;

     for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(`Is 17 a prime number? ${isPrime(17)}`);
console.log(`Is 34 a prime number? ${isPrime(34)}`);
console.log(`Is 2 a prime number? ${isPrime(2)}`);
console.log(`Is 99 a prime number? ${isPrime(99)}`);






