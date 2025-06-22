// what is the output  

let pk = '10'+ 10;
console.log(pk)

console.log(typeof(pk))



// o/p : 1010




Why?

In JavaScript, the + operator is overloaded:

    If both operands are numbers → it performs addition

    If one operand is a string, it performs string concatenation