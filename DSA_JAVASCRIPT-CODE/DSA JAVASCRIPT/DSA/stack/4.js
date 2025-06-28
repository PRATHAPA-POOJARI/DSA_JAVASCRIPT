class Stack {
    constructor() {
        this.stack =[];
    }

    push(element ){
     this.stack.push(element)

    }
pop(){
    if(this.isEmpty()){
     return 'stack is empty could not do pop '

    }

    return this.stack.pop()
}
peek(){
    if(this.isEmpty()){
        return ' stack is empty man could not perform  peek man'
    }
    return this.stack[this.stack.length-1];

}

isEmpty () {
    return this.stack.length === 0;
}

printList(){
    if(this.isEmpty()){
        return 'stack is empty'
    }
    return this.stack
}

}


const stack = new Stack();
stack.push(100);
stack.push(10);
stack.push(101);
stack.push(1020);
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log(stack.printList())