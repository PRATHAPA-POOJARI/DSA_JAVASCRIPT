// Reverse string usein stack 

//Write a function to reverse a string using a stack.


function reverseString(str) {
    const stack = [];
    
    for (const char of str) {
      stack.push(char);
    }
  
    let reversed = ""; 
    while (stack.length > 0) {
      reversed += stack.pop();
    }
  
    return reversed;
  }
  
console.log(reverseString("love u "))