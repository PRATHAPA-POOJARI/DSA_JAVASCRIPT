
// // Find the second largest element

// Method 1: Using Sorting

// let arr = [23,45,56,77,77,66,777,666,77777];
// let unique = [... new Set(arr)];
// // console.log(unique);
// unique.sort((a,b)=>a-b);
// console.log(unique);

// let secondLarge = unique[1];
// console.log(secondLarge)


function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Example
console.log(secondLargest([10, 5, 8, 20, 15])); // 15