// Count words in a string


// method 1 
let str = "Hello world, how are you?";
let mk = str.trim().split(" ");

console.log(mk.length);


// trim() → removes extra spaces from start & end
// split(" ") → converts string into array