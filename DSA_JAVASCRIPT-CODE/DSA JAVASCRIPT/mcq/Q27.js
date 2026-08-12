if (0)
     { console.log('a') } 
else
     { console.log('b') }

output: 'b'

Why?

In JavaScript, the value inside if() is converted to a Boolean.

Boolean(0); // false

Since the condition is false, the else block runs.

Output:

b