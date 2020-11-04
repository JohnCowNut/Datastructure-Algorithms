const  LinkedListDoubly  = require('./LinkedList-Doubly');
class LinkedListStacks { 
    constructor() {
        this.items = new LinkedListDoubly()
    }

    push(element) {
        return this.items.insertHead(element)
    }
    pop() {
        if(!this.items.isEmpty()) {
            return -1;
        }
        return this.items.deleteAtHead()
    }
    peek() {
        if(!this.items.isEmpty()) {
            return -1;
        }
        return this.items.search(0)
    }
}

module.exports = LinkedListStacks;