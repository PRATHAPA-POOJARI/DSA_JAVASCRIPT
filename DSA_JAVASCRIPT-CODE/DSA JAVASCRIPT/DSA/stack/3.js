// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     // Push an element onto the stack
//     push(element) {
//         this.stack.push(element);
//     }

//     // Pop an element from the stack
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty, man";
//         }
//         else {
//         return this.stack.pop();
//         }
//     }

//     // Check if the stack is empty
//     isEmpty() {
//         return this.stack.length === 0; // Added `return`
//     }

//     // Peek the top element of the stack
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.stack[this.stack.length - 1]; // Added `return`
//     }

//     // Get the size of the stack
//     size() {
//         return this.stack.length; // Added `return`
//     }

//     // Print all elements in the stack
//     printList() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.stack; // Added `return`
//     }
// }

// // Create an instance of the Stack class
// const stack = new Stack();

// // Push elements onto the stack
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(45);

// // Peek the top element
// console.log("Top Element (peek):", stack.peek());

// // Print the entire stack
// console.log("Stack Elements:", stack.printList());

// // Get the size of the stack
// console.log("Stack Size:", stack.size());

// // Pop an element
// console.log("Popped Element:", stack.pop());

// // Print the stack after popping
// console.log("Stack After Pop:", stack.printList());

class Stack {
    constructor(){
        this.stack= []
    }

push(element){
 this.stack.push(element)
}

pop(){
    if(this.isEmpty()){
        return ' stack is empty man'
    }
    else {
        return this.stack.pop()
    }
}

isEmpty(){

 return   this.stack.length ===0

    ''
}


peek(){
    if(this.isEmpty()){
        return 'Stack is Empty'
    }

    else {
        this.stack[this.stack.length-1]
    }
}
size(){
    return this.stack.length
}


printList(){

    if(this.isEmpty()){
        return " stack is empty"
    }

    else {
        return this.stack
    }
}

}

const  object = new Stack()
const  object2 = new Stack()
object.push(20,3,4,5,543,3)
object.push(2)
object.push(220)

console.log(object.stack)
