// Find the second smallest element

let kp = function (arr) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
};
let mk = kp([3, 425, 5, 6, 7, 8, 9]);

console.log(mk);
