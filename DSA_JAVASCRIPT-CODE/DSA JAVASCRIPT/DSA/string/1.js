

// How to convert a string into a integer without using parseInt() function in JavaScript?
//  ?
// ans: using unary (+) operator
//  Using the Number() Constructor:

// 1. Using the Unary + Operator

// The + operator before a string will convert it into a number.
let str = "123";
let num = +str;
console.log(num); // Output: 123
console.log(typeof num); // Output: number

// 2. Using the Number() Constructor

// The Number() function explicitly converts a string to a number.

let str = "123";
let num = Number(str);
console.log(num); // Output: 123
console.log(typeof num); // Output: number


// 3. Using Math.floor() (or Math.ceil(), Math.round(), Math.trunc())

// These functions work by converting the string to a number implicitly before applying the operation.
let str = "123";
let num = Math.floor(str);
console.log(num); // Output: 123


// 4. Using Bitwise OR (|)

// The bitwise OR | operator converts a string to an integer by performing a bitwise operation.

let str = "123";
let num = str | 0; 
console.log(num); // Output: 123


// 5. Using ~~ (Double Bitwise NOT)

// Similar to | 0, ~~ converts a string to an integer.

let str = "123";
let num = ~~str;
console.log(num); // Output: 123

