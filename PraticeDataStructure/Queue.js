const Node = require('./Node');


class Queue {
    constructor() {
        this.last = null;
        this.first = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enQueue(value) {
        const newNode = new Node(value);
        if(!this.length) {
           this.first = this.last = newNode
        }else {
            this.last.next = newNode;
            this.last  = newNode;
        }
        this.length ++;
        return this;

    }
    deQueue() {
        if(!this.first) {
            return null;
        } 
        if(this.last === this.first) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length --; 
        return this;
    }
}

module.exports = Queue;