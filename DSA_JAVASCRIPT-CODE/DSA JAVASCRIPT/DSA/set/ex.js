// Empty set
const s1 = new Set();

// From an array (great way to dedupe!)
const s2 = new Set([1, 2, 3, 3, 2, 1]);
console.log(s2); // Set(3) { 1, 2, 3 }

// From a string (splits into characters)
const s3 = new Set("hello");
console.log(s3); // Set(4) { 'h', 'e', 'l', 'o' } 