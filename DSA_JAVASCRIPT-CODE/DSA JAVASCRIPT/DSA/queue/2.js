
//simle queue
class Queue {
    constructor() {
        this.item = []; // Initialize an empty array to store elements
    }

    // Add an element to the back of the queue
    enqueue(element) {
        this.item.push(element);
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow';
        }
        return this.item.shift(); // Remove the first element
    }

    // Return the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.item[0]; // Access the first element
    }

    // Check if the queue is empty
    isEmpty() {
        return this.item.length === 0; // Correctly return true if empty
    }

    // Return the size of the queue
    size() {
        return this.item.length; // Correctly return the size of the queue
    }

    // Print all elements of the queue
    printQueue() {
        if (this.isEmpty()) {
            return 'Queue is empty man';
        }
        return this.item.join(' -> '); // Format queue elements
    }
}

// Create a new Queue instance
const pk = new Queue();
pk.enqueue(20);
pk.enqueue(10);
pk.enqueue(40);
pk.enqueue(1000);
pk.dequeue(); // Removes the first element (20)

console.log('The size of the queue is', pk.size()); // Output: 3
console.log('The available queue is', pk.printQueue()); // Output: 10 -> 40 -> 1000
