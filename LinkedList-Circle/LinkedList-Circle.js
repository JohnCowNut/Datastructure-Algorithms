class Node {
    constructor(value){ 
        this.value = value;
        this.next = null;
    }
}

class LinkedListCircle { 
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size;
    }
    createNewNode(value) {
        return new Node(value)
    }
    unShift(value) {
        const newNode = this.createNewNode(value);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.isEmpty()) {
            this.tail = newNode;
            this.tail.next = this.head;
        }
        this.tail.next = this.head;
        this.size ++;
        return this;
    }
    traverseToIndex(index) {
        let currentNode = this.head;
        let temp = 0;
        while(temp !== index) {
            
            currentNode = currentNode.next;
            temp++;
        }
        return currentNode;
    }
    push(value) {
        const newNode = this.createNewNode(value);
        const leader = this.traverseToIndex(this.size - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.tail = newNode;
        this.size ++;
        return this;
    }
      /* INSERT IMPLEMENTATION */
    insert(index,value) {
        if(index === 0) {
            return this.unShift(value)
        }else if (index > this.size) {
            return -1;
        }else if (index === this.size) {
            return this.push(value)
        }else {
            const newNode = this.createNewNode(value)
            const leader = this.traverseToIndex(index - 1);
            newNode.next = leader.next
            leader.next = newNode;
            this.size ++;
            return this;
        }
    }
    /* DELETE IMPLEMENTATION */
    pop() {
        const leader = this.traverseToIndex(this.size - 2);
        leader.next = this.head;
        this.tail = leader;
        this.size --;
        return this;
        
    }
    delete(index) {
        
        if( index === 0) {
            this.tail = this.head = null;
            this.size --;
            return this;
        }else if (index === this.size ) {
            return this.pop();
        }else {
            let leader = this.traverseToIndex(index - 2);
            leader = leader.next.next;
            this.size --;
            return this;
        }
    }
    printList() {
        let currentNode = this.head;
        let array = [];
        let temp = 0;
        while(temp !== this.size) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
            temp++;
        }
        return array;
    }
    search(index) {
        return this.traverseToIndex(index - 1)
    }
    
}
module.exports = LinkedListCircle;