// Access the first actual argument (at index 2)
const arg1 = process.argv[2];

// Access the second actual argument (at index 3)
const arg2 = process.argv[3];

// Print the arguments in the format "arg1 is arg2"
// We use template literals (backticks ``) for easy string interpolation.
// If an argument is undefined, it will be converted to the string "undefined".
console.log(`${arg1} is ${arg2}`);