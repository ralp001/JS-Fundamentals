// Define the add function as specified: function add(a, b)
// This function takes two arguments (a and b) and returns their sum.
// It assumes a and b are numbers.
function add(a, b) {
    return a + b;
}

// Get the first command-line argument and convert it to an integer.
// If the argument is missing or not a valid number, parseInt() will return NaN.
const num1 = parseInt(process.argv[2]);

// Get the second command-line argument and convert it to an integer.
// If the argument is missing or not a valid number, parseInt() will return NaN.
const num2 = parseInt(process.argv[3]);

// Call the add function with the parsed numbers.
// If num1 or num2 is NaN, their addition will also result in NaN,
// which matches the required output for invalid/missing arguments.
const sum = add(num1, num2);

// Print the result using console.log().
console.log(sum);