class Stack {
constructor(){
    this.stack =[]
}


push(element){
    this.stack.push(element)
}

pop()
 {
if(this.isEmpty()) {
    return 'stack is empty'
}
return this.stack.pop();
 }

 peek() {
    if(this.isEmpty()){
        return 'stack is empty could not do operation'
    }
    return this.stack[this.stack.length-1]
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
stack.push(20)
stack.push(20)
stack.push(20)
stack.push(45)
stack.peek();
console.log(stack.printList())
console.log('the peek of the element is',stack.peek())
