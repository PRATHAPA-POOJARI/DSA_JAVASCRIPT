

//simple queue
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element
    dequeue() {
      if (this.isEmpty()) {
        return 'Queue is empty';
      }
      return this.items.shift();
    }
  
    // View the front element
    peek() {
      if (this.isEmpty()) {
        return 'Queue is empty';
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // View the queue
    printQueue() {
      return this.items.join(' -> ');
    }
  }
  
// Example usage
  const queue = new Queue();
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(520);
  console.log(queue.printQueue()); // A -> B -> C
  console.log(queue.dequeue());    // A
  console.log(queue.peek());       // B
  console.log(queue.printQueue()); // B -> C
  
  