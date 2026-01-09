// Step 1: Define the Node Class

class Node {
    constructor(data) {
        this.data = data; // Value of the node
        this.next = null; // Pointer to the next node
    }
}

// Step 2: Define the LinkedList Class
class LinkedList {
    constructor() {
        this.head = null; // The head of the list (initially empty)
    }
    // Add a node at the end of the list
    append(data) {
        let newNode = new Node(data); // Create a new node
        if (this.head === null) {
            this.head = newNode; // If the list is empty, make the new node the head
            return;
        }

        let current = this.head;
        while (current.next !== null) { // Traverse to the end of the list
            current = current.next; 
        }

        current.next = newNode; // Add the new node at the end
    }

   // Print the list
    printList() {
        let current = this.head;
        while (current !== null) { // Traverse the list
            console.log(current.data); // Print the data of the current node
            current = current.next; // Move to the next node
        }
    }
}
// Step 3: Use the LinkedList Class
let myList = new LinkedList(); // Create a new linked list
// Add nodes to the list
myList.append(10);
myList.append(20);
myList.append(30);
// Print the list
myList.printList(); // Output: 10, 20, 30
