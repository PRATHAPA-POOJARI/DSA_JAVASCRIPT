console.log(true && false); // false



Explanation

The && operator is the logical AND operator.

It returns true only if both operands are true.


&& = AND = All conditions must be true.
|| = OR = At least one condition must be true.



console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false




let hasID = true;
let age = 20;

console.log(hasID && age >= 18); // true