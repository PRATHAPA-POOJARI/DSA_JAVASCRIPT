
class Stack {
    constructor() {
        this.stack = []
    }
    push(element) {
    this.stack.push(element)
    } 
    pop(){
        if(this.isEmpty()){
            return ' stack is empty we cannot do pop operation'
        }
        return this.stack.pop()
    }

    peek(){
    if(this.isEmpty()){
        return ' could not perform  peek because there is no  values man '
    }
    return this.stack[this.stack.length-1];
    }

    isEmpty(){
        this.stack.length===0;
    }
    printStack() {
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.stack
    }
}

const  stack = new Stack() ;

stack.push(30);
stack.peek(30);
console.log(stack.printStack());
console.log(stack.peek());