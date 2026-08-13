

// Display a popup message after 5 seconds.

setTimeout(() => {
    alert("Hello, this is a popup!");
}, 5000);





// Why?

// alert() is a browser function.

// alert("Hello");

// It works in:

// Browser → ✅
// Node.js → ❌

// That's why Node.js says:

// ReferenceError: alert is not defined