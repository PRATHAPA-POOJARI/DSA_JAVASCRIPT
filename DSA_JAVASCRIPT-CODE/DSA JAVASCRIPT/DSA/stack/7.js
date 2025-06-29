class Stack {
    constructor() {
        this.stack = [];
    }
push(element)
{
this.stack.push(element)
}

pop() {
    if(this.isEmpty()){
    return 'cannot perform stack bcz stack is already empty'
    }
    return this.stack.pop();
}

peek(){
    if(this.isEmpty()){
        return ' could not perform  peek because there is no  values man '
    }
    return this.stack[this.stack.length-1];
    }

isEmpty (){
    return this.stack.length ===0;
}
    printList(){
        if(this.isEmpty()){
            return ' stack is empty man'
        }
        return this.stack;
    }

}


const stack = new Stack();

console.log(stack.printList());
