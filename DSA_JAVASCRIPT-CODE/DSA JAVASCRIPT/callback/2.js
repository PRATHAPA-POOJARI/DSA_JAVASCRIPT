function mainFunction() {
    console.log("Main function started.");
    setTimeout(subFunction, 6000); // Call subFunction after 3 seconds
    console.log("Main function continues working...");
}

function subFunction() {
    console.log("Sub function executed after 3 seconds!");
}

// Start the process
mainFunction(subFunction());
