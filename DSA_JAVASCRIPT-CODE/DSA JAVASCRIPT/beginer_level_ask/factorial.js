function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);

//n! = n * (n-1) * (n-2) * ... * 2 * 1
