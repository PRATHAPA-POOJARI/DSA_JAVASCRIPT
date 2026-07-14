


for(var i =0;i<3;i++){

}

console.log(i)

// output : 3

// Why?

// var is function-scoped, not block-scoped.

// The for loop does not create a new scope for var.

// JavaScript treats it roughly like this:


If you use let
for (let i = 0; i < 3; i++) {

}

console.log(i);

Output:

ReferenceError: i is not defined


because let is block-scoped, and the i exists only inside the for loop block.

Remember
var → Function scope → Accessible outside the for block.
let / const → Block scope → Not accessible outside the for block.

