class Node {
    constructor(value){ 
        this.value = value;
        this.next = null;
        this.prev = null;
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
    // insert first Node
    unShift(value) {
        const newNode = this.createNewNode(value)
        this.head = newNode;
        this.tail = this.head;
        this.size ++;
        return this;
    }
    /* INSERT IMPLEMENTATION */
    insertHead(value) {
        if(!this.isEmpty()) {
            return this.unShift(value);
        }else {
            const newNode = this.createNewNode(value);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size ++;
        } 
        return this
    }
    insertTail(value) {
        if(!this.isEmpty()) {
            return this.unShift(value)
        }else {
            const newNode = this.createNewNode(value);
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.size ++;
        }

        return this;
    }
    search(index) {
        let currentNode = this.head;
        let temp = 0;
        while(temp !== index) {
            currentNode = currentNode.next;
            temp++;
        }
        return currentNode;
    }
    insert(index, value) {
        if(index === 0) {
            return this.insertHead(value)
        }else if ( index === this.size) {
            return this.insertTail(value)
        }else if(index > this.size) {
            return -1;
        }else {
            const newNode = this.createNewNode(value);
            let leader = this.search(index - 1);
            newNode.prev = leader;
            newNode.next = leader.next.next;
            leader.next = newNode;
            this.size++;
            return this;
        }
    }
    /* DELETE IMPLEMENTATION */
    shift() {
        this.head = this.tail = null;
        this.size --;
        return this;
    }
    deleteAtHead() {
        if(this.size === 1) {
            return this.shift();
        }else if(this.size <= 0) {
            return -1;
        }else  {
            this.head = this.head.next;
            this.head.prev = null;
            this.size --;
            return this;
        }
    }
    deleteAtTail() {
        if(this.size === 1) {
            return this.shift();
        }else if (this.size <= 0) {
            return -1;
        }else {
             this.tail = this.tail.prev;
             this.tail.next = null;
             this.size --;
             return this;
        }
    }
    delete(index) {
        if(index === 0) {
            return this.deleteAtHead()
        }else if(index === this.size) {
            return this.deleteAtTail()
        }else if (index > this.size ) {
            return -1;
        } else {
            let currentNode = this.search(index - 1);
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode.next.prev;
            this.size --;
            return this;
        }
    }
    printList() {
        let array = [];
        let currentNode = this.head;
        while(currentNode) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
        }
        return array;
    }
      
    // delete 
    // getByValue
    
}

module.exports = LinkedListCircle;