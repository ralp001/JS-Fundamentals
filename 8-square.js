// Get the first command-line argument and attempt to convert it to an integer.
const size = parseInt(process.argv[2]);

// Check if 'size' is NaN (meaning the argument was missing or not a valid number).
if (isNaN(size)) {
    console.log("Missing size");
} else if (size <= 0) {
    // If 'size' is 0 or a negative number, do nothing (as per example output).
    // No console.log() here.
} else {
    // If 'size' is a valid positive integer, print the square.

    // Outer loop: Controls the number of rows (size rows total)
    for (let i = 0; i < size; i++) {
        let row = ''; // Initialize an empty string for each row

        // Inner loop: Controls the characters in each row (size 'X's per row)
        for (let j = 0; j < size; j++) {
            row += 'X'; // Add an 'X' to the current row string
        }
        console.log(row); // Print the completed row. console.log adds a newline automatically.
    }
}