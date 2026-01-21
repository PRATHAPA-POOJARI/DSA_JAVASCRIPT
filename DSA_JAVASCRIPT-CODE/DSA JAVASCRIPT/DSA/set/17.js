// Convert a Set back to an array.

// Method 1: Using spread operator (most popular)
// let arr = new Set([23,4,5,32,4322,422,12321,31,1]);
// let final = [...arr];
// console.log(final)

// Method 2: Using Array.from()

 let arr = new Set([23,4,5,32,4322,422,12321,31,1]);
 let value = Array.from(arr)