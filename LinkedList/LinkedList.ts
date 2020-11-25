import {Node} from './node';

class LinkedList <T> { 
    head: Node <T>;
    length: number;
    constructor(value: T = null) {
        this.head = null;
        this.length = 0;
    }
    isEmpty(): boolean {
        return this.length === 0;
    } 
    pushFront(value: T):this {
        if(this.isEmpty()) {
            this.head = new Node(value);
        }else {
            let tempNode = this.head;
            this.head = new Node(value);
            this.head.next = tempNode;
        }
        this.length ++;
        return this;
    }
}