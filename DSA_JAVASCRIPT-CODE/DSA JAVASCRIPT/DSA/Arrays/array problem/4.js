// find the sum of all elements in an array;

let array = [34, 45, 0, 23, 4444, 9];
let sum = 0;  

for(let i =0;i<array.length;i++) {
    sum = sum+array[i];
}

console.log(`the sum of the array is ${sum}`)