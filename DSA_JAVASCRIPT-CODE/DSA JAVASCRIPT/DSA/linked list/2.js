
class  Node {
    constructor(data) {
        this.data=data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head =null;
    }
}

append(data) {
    const newNode = new Node;
    if(!this.head) {
        this.head =newNode;
        return;
    }
   
    let  current = this.head;
    while(current.next) {
        current= current.next;

    }
    current.next = newNode;
}