// Declare an array of strings with the required messages
const messages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// Use a loop to process the array elements.
// The most straightforward way to print each on a new line with one console.log
// is to join them with a newline character.

// Method 1: Using a for...of loop and then joining (to strictly satisfy "use a loop")
// Although Array.prototype.join() is often more direct for this,
// if the "loop" must explicitly *construct* the string:
let outputString = "";
for (const msg of messages) {
    outputString += msg + "\n";
}
// Remove the last newline character if not desired, but usually okay for console.log
// outputString = outputString.slice(0, -1); // Uncomment this line if you need to remove the trailing newline
outputString = outputString.slice(0, -1);
// Now, print the combined string using only one console.log
console.log(outputString);

// --- Alternative (more concise for this specific problem, if loop iteration itself isn't the primary focus): ---
// This is often the most idiomatic JS way to print array elements on new lines
// by joining them first, which implicitly uses an internal loop.
// console.log(messages.join('\n'));
// If the explicit "loop" constraint means you must write a loop construct, stick to the `for...of` above.
// For general JavaScript, `join('\n')` is preferred for this pattern.