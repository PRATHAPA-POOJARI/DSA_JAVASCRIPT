class Stack {
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'could not perform stack operation'
        }
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
        this.stack.length == 0;
    }


printList() {
    if(this.isEmpty()) {
        return ' stack is empty man'
}
return this.stack;
};
}
const stack = new Stack();
stack.push(20)
stack.push(21)
stack.pop()
stack.pop()
console.log(stack.printList())

