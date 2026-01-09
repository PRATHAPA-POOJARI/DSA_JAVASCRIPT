// write an program to reverse an given array..

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

//2. Using .slice() and .reverse() (Without Mutating Original)


let arr = [1, 2, 3, 4,45, 5];
let reversedArr = arr.slice().reverse();
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]

//3. Using a for Loop (Manual Reversal)

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
function reverse(arr) {
  let back = []
  for(let i =arr.length-1;i>=0;i--){
    back.push(arr[i])
  }
  return back
}

let sp = reverse([2,5,6,87,8,8]);
console.log(sp)



