// Create a Set from an array [1, 2, 3, 4, 4, 5] and remove duplicates.

let arr = [1, 2, 3, 4, 4, 5];

// Create Set → duplicates automatically removed
let uniqueSet = new Set(arr);

console.log(uniqueSet); // Set(5) { 1, 2, 3, 4, 5 }
