Compare var vs let

var

if (true) {
    var x = 10;
}

console.log(x);

Output: 10


let

if (true) {
    let x = 10;
}

console.log(x);

Output:ReferenceError: x is not defined 



Because let is block-scoped.

One big example

var a = 1;

function demo() {

    console.log(a);    // ?

    if (true) {
        var a = 5;
        var b = 10;
    }

    console.log(a);    // ?
    console.log(b);    // ?
}

demo();

console.log(a);        // ?
JavaScript rewrites it as
var a = 1;

function demo() {

    var a;
    var b;

    console.log(a);

    if (true) {
        a = 5;
        b = 10;
    }

    console.log(a);
    console.log(b);
}

demo();

console.log(a);
Step-by-step execution

Global

a = 1

Function starts

Local a = undefined
Local b = undefined

First console.log(a)

undefined

Inside if

a = 5
b = 10

Second console.log(a)

5

Third console.log(b)

10

Back to global

Global a is still 1

Final output

undefined
5
10
1