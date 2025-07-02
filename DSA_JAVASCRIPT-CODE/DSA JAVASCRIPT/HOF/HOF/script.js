// Higher-Order Function: Takes a function as an argument
function greet(callback) {
    callback(); // Call the function passed as an argument
}

// Simple function to pass
function sayHello() {
    console.log("Hello! This is a Higher-Order Function in action.");
}

// Call the higher-order function
greet(sayHello);
