
// Count words in a string
let str = "Hello world, how are you?";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
    count++;
  }
}

console.log(count);