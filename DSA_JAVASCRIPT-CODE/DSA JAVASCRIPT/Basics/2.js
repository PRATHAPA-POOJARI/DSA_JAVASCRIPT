// Fibonacci Series Up to n Terms
let number  = 10;
let n1 = 0;
let n2 = 1;
let nextTerm;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 +  n2;
    n1 = n2
    n2 = nextTerm;
}

