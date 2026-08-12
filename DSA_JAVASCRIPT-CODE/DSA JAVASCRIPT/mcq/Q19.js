Explanation

The ! operator is called the logical NOT operator.

It reverses (negates) a boolean value:

true → false
false → true
Examples
console.log(!true);  // false
console.log(!false); // true
More Examples
let isLoggedIn = true;

console.log(!isLoggedIn); // false
let isLoggedIn = false;

console.log(!isLoggedIn); // true
! with Non-Boolean Values
 
The ! operator first converts the value to a boolean, then negates it.

console.log(!0);        
console.log(!1);        
console.log(!"");       // true
console.log(!"Hello");  // false
console.log(!null);     // true
console.log(!undefined);// true
Double NOT (!!)

!! is commonly used to convert any value into its boolean equivalent.

console.log(!!0);        // false
console.log(!!1);        // true
console.log(!!"Hello");  // true
console.log(!!"");       // false
console.log(!!null);     // false


