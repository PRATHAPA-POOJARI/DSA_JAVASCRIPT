
//simple queue
class Queue {
    constructor(){
        this.items =[]
    }

    enqueue(element){
   return this.items.push(element)
    }

dequeue(){

    if(this.isEmpty()){
        return 'queue is empty '
    }
    return this.items.shift()
}

isEmpty(){

    return this.items.length===0;
}

peek(){

    if(this.isEmpty){
        return 'queue is empty'
    }
    return this.items[0]
}

size(){
    return this.items.length
}

printQueue() {
    if (this.isEmpty()) {
        return 'Queue is empty man';
    }
    return this.items.join(' -> '); // Format queue elements
}
}

const pk = new Queue();
pk.enqueue(20);
pk.enqueue(10);
pk.enqueue(40);
pk.enqueue(1000);
pk.dequeue(); // Removes the first element (20)

console.log('The size of the queue is', pk.size()); // Output: 3
console.log('The available queue is', pk.printQueue())