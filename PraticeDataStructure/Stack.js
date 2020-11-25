const Node = require('./Node');

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value)
        if(!this.length) {
            this.top = this.bottom = newNode
        }else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length ++;
        return this;
    }
    pop() { 
        if (!this.top) {
            return null;
        }
        if(this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length --;
        return this;
    }
}
module.exports =Stack;