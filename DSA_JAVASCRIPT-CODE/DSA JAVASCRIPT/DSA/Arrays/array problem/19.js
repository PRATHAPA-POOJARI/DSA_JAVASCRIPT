// Copy one array into another (without using spread)

// method 1: basic for loop


// let  arr  = [23,3,4,56,6,7];
// let copy = [];

// for(let i =0;i<arr.length;i++){

//      copy[i]  =arr[i] 
// }

// console.log(copy)


// Method 3: Using Array.from() (no spread)

// let  arr  = [23,3,4,56,6,7];
// let copy  = Array.from(arr);

// console.log(copy)


// Method 4: Using map()

// let  arr  = [23,3,4,56,6,7];
//  let copy  = arr.map((item)=>item)

//  console.log(copy)

// Method 5: Using slice()


let  arr  = [23,3,4,56,6,7];
let copy = arr.slice();
console.log(copy)