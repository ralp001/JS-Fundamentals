// Define the recursive factorial function.
// This function will call itself until it reaches a base case.
function factorial(n) {
    // Base case:
    // 1. If 'n' is NaN (e.g., if the initial argument was missing or non-numeric).
    // 2. If 'n' is 0 or any negative number.
    // According to mathematical definition, 0! = 1.
    // For NaN and negative numbers, the problem specifies (or implies by example for NaN) that it should return 1.
    if (isNaN(n) || n <= 0) {
        return 1;
    }

    // Recursive step:
    // For any positive integer 'n', factorial(n) = n * factorial(n - 1).
    return n * factorial(n - 1);
}

// Get the first command-line argument.
// parseInt() converts it to an integer. If conversion fails, it returns NaN.
const num = parseInt(process.argv[2]);

// Calculate the factorial using the function.
const result = factorial(num);

// Print the result to the console.
console.log(result);