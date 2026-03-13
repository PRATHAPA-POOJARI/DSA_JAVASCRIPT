// check given number is palidrome  or not
// What is a Palindrome Number?

// A number is palindrome if it reads the same forward and backward.
let palidrome = function (num) {
  let orginal = num;
  let reverse = 0;

  if (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return orginal === reverse;
};

console.log(palidrome(121));
