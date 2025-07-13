// Access the first actual argument (at index 2 in process.argv)
// If no argument is passed, process.argv[2] will be 'undefined'.
const firstArgument = process.argv[2];

// Check if the firstArgument is undefined (meaning no argument was passed)
if (firstArgument === undefined) {
    console.log("No argument");
} else {
    // If an argument exists, print its value
    console.log(firstArgument);
}