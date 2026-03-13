// // check whether prime no or not

let num = 11;
let i = 2;
let isPrime = true;

if (num <= 1) isPrime = false;

while (i < num && isPrime) {
  if (num % i === 0) isPrime = false;
  i++;
}

console.log(isPrime ? "Prime" : "Not Prime");
