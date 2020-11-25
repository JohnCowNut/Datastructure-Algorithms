const Node = require('./Node')
class LinkedListDummy  {
    constructor() {
        this.head = {
            value: null,
            next: null
        }
        this.length = 1;
    }
    pushFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head.next;
        this.head.next = newNode;
        this.length ++;
        return this;
    }
    pushBack(value) {
        const newNode = new Node(value);
        const currentNode = this.traverseIndex(this.length - 1);
        currentNode.next = newNode;
        this.length ++;
        return this;
    }
    traverseIndex(index) {
        let temp = 0;
        let pointer = this.head; 
        while(  temp !== index ) {
            pointer =pointer.next;
            temp ++
        }
        return pointer
    } 
    insert(index,value) {
        if(index === 0) {
            return this.pushFront(value)
        }else if(index === this.length) {
            return this.pushBack(value)
        }else if (index <0 || index > this.length) {
            return "Index invalid"
        }else {
            const newNode = new Node(value);
            let leader = this.traverseIndex(index - 1)
            newNode.next = leader.next;
            leader.next = newNode;
            this.length ++;
            return this;
        }
    }
    // Remove 
}
module.exports = LinkedListDummy;