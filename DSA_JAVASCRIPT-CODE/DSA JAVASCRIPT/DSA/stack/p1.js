class Stack {
    constructor(){
        this.stack = [];
    }

    push(element) {
 this.stack.push(element)

    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }

        return this.stack[this.stack.length-1]
    }
pop(){
    if(this.isEmpty()){
        return 'stack is empty '
    }
    else {
       return this.stack.pop()
    }
    }

    isEmpty(){
        return this.stack.length===0;
    
     }

     printList(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.stack
     }
    
}

const stack = new Stack()
stack.push(23)
stack.push(3)
stack.push(83)
stack.push(28)
stack.push(29)
stack.push(55)
console.log(stack.printList())
console.log('the top of the stack is ',stack.peek())