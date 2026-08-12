// swap 2 variable without useing extra variable 

let a = 10;
let b = 20;

// Step 1: Add both and store in a
a = a + b;    // a = 10 + 20 = 30

// Step 2: Subtract new a with b to get original a
b = a - b;    // b = 30 - 20 = 10 (original value of a)

// Step 3: Subtract new a with new b to get original b
a = a - b;    // a = 30 - 10 = 20 (original value of b)

console.log(a, b);  // Output: 20 10
