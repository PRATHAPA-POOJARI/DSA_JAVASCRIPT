// Convert to uppercase (manual)

let str = "hello World";
let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  // check if lowercase letter
  if (ch >= 'a' && ch <= 'z') {
    result += String.fromCharCode(ch.charCodeAt(0) - 32);
  } else {
    result += ch; // keep as it is (space, symbol, uppercase)
  }
}

console.log(result);