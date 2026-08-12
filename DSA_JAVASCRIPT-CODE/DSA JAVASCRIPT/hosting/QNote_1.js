1. Global var declarations are hoisted to the top of the global scope.
console.log(a);

var a = 10;

What JavaScript sees
var a;          // hoisted

console.log(a);

a = 10;

Step 1:
a = undefined

Step 2:
console.log(a)   // undefined

Step 3:
a = 10






2. Function var declarations are hoisted to the top of that function only.

var a = 10;

function outer() {
    console.log(a);

    var a = 20;

    console.log(a);
}

outer();


What JavaScript sees

var a = 10;

function outer() {

    var a;

    console.log(a);

    a = 20;

    console.log(a);
}

outer();




3. Block var declarations (if, for, etc.) are hoisted to the enclosing function, not the block.
Example 1 (if block)

function test() {

    if (true) {
        var x = 100;
    }

    console.log(x);
}

test();

What JavaScript sees
function test() {

    var x;      // hoisted to function

    if (true) {
        x = 100;
    }

    console.log(x);
}
Output
100

Even though x was declared inside if, it is available throughout the function.

Example 2 (for loop)
function demo() {

    for (var i = 0; i < 3; i++) {

    }

    console.log(i);
}

demo();
What JavaScript sees
function demo() {

    var i;

    for (i = 0; i < 3; i++) {

    }

    console.log(i);
}
Execution
i = 0
i = 1
i = 2
i = 3

Output

3