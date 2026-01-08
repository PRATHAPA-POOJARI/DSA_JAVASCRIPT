// Find maximum and minimum element in an array

let arr = [2, 3, 4, 5, 6, 7, 6, 34, 33, 441, 334];

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(`max element in that array is ${max}`);
console.log(`min element is ${min}`);
