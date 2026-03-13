// Check even or odd

// Check even or odd

let even = function (num) {
  if (num % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
};

even(6);

//

let isEven = function (num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isEven(6));
