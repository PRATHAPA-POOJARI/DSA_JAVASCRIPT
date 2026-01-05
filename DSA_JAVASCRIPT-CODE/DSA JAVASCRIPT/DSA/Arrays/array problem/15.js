
// // Find the second largest element

// Method 1: Using Sorting

let arr = [23,45,56,77,77,66,777,666,77777];
let unique = [... new Set(arr)];
// console.log(unique);
unique.sort((a,b)=>a-b);
console.log(unique);

let secondLarge = unique[1];
console.log(secondLarge)