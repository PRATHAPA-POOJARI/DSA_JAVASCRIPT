class Stack {
    constructor() {
        this.stack = []; // ✅ Each object gets its own `stack`
    }
}

const stack1 = new Stack();
const stack2 = new Stack();

stack1.stack.push(10);
stack2.stack.push(10,4,56677);
console.log(stack1.stack); // ✅ [10]
console.log(stack2.stack); // ✅ [] (Separate object, not affected)
