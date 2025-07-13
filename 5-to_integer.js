// Get the first command-line argument
const firstArg = process.argv[2];

// Attempt to convert the argument to an integer using parseInt().
// parseInt() parses a string argument and returns an integer of the specified radix (base).
// If the first character cannot be converted to a number, it returns NaN (Not-a-Number).
// It also truncates decimal parts.
const myNumber = parseInt(firstArg);

// Check if the result of parseInt() is NaN.
// isNaN() is a global JavaScript function that checks if a value is NaN.
// This handles cases where the argument is not a number (e.g., "School"),
// or if no argument was provided (firstArg would be undefined, parseInt(undefined) is NaN).
if (isNaN(myNumber)) {
    console.log("Not a number");
} else {
    // If it's a valid number, print it in the specified format.
    console.log(`My number: ${myNumber}`);
}