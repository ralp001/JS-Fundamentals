// Get the first command-line argument and attempt to convert it to an integer.
// parseInt() will return NaN if the argument is not a valid number (e.g., "School", or undefined).
const x = parseInt(process.argv[2]);

// Check if 'x' is NaN (meaning the argument was missing or not a valid number).
// This covers "Missing number of occurrences" requirement.
if (isNaN(x)) {
    console.log("Missing number of occurrences"); // This is the first console.log
} else if (x > 0) {
    // If 'x' is a positive integer, proceed to loop.
    // We will build a single string with all the "C is fun" messages
    // separated by newlines, to use only one more console.log call.
    let outputString = "";
    for (let i = 0; i < x; i++) {
        outputString += "C is fun\n";
    }
    // Remove the very last newline character.
    // console.log() automatically adds a newline at the end, so we prevent an extra blank line.
    outputString = outputString.slice(0, -1);

    console.log(outputString); // This is the second console.log
}
// If x is 0 or a negative number (e.g., -3), the `if (isNaN(x))` condition
// is false, and the `else if (x > 0)` condition is also false.
// In this case, no console.log() is executed, which matches the example output for node 7-multi_c.js -3.