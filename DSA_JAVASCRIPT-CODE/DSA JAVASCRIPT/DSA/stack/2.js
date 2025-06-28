 class Stack {
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop() {
        if(this.isEmpty()) {
            return 'stack is empty'
        }
        return this.stack.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return 'stack is empty cannot perform peek'
        }
        return this.stack[this.size() - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.stack.length;
    }

    empty() {
        this.stack = [];
    }

    // New method to print the current stack
    printStack() {
        if(this.isEmpty()) {
            console.log('The stack is empty');
        } else {
            console.log('Current stack:', this.stack);
        }
    }
}

const stack = new Stack();
stack.push(100);
stack.push(10);
stack.push(101);
stack.push(1020);
console.log('Printing stack after pushing elements:');
stack.printStack();  // Should print the elements in the stack

// Emptying the stack
stack.empty();

console.log('Printing stack after emptying:');
stack.printStack();  // Should indicate that the stack is empty

// correct code for stack implementations

