"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class LLCircle {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0;
    }
    pushFront(value) {
        const newNode = new node_1.Node(value);
        if (this.isEmpty()) {
            return this.pushWhenIsEmpty(value);
        }
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    traverseByIndex(index) {
        let temp = 0;
        let pointer = this.head;
        while (temp !== index) {
            pointer = pointer.next;
            temp++;
        }
        return pointer;
    }
    pushWhenIsEmpty(value) {
        const newNode = new node_1.Node(value);
        this.head = this.tail = newNode;
        this.tail.next = this.head;
        this.length++;
        return this;
    }
    pushBack(value) {
        if (this.isEmpty()) {
            return this.pushWhenIsEmpty(value);
        }
        const newNode = new node_1.Node(value);
        newNode.next = this.tail.next;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index === 0) {
            return this.pushFront(value);
        }
        else if (index < 0 || index > this.length) {
            return "Index invalid";
        }
        else if (index === this.length) {
            return this.pushBack(value);
        }
        else {
            const newNode = new node_1.Node(value);
            const leader = this.traverseByIndex(index - 1);
            newNode.next = leader.next;
            leader.next = newNode;
            this.length++;
            return this;
        }
    }
    popWhenItemLastOne() {
        this.tail = this.head = null;
        this.length--;
        return this;
    }
    popFront() {
        if (this.isEmpty()) {
            return "No Data Make Delete";
        }
        if (this.length === 1) {
            return this.popWhenItemLastOne();
        }
        this.head = this.head.next;
        this.tail.next = this.head;
        this.length--;
        return this;
    }
    popBack() {
        if (this.isEmpty()) {
            return "No Data Make Delete";
        }
        if (this.length === 1) {
            return this.popWhenItemLastOne();
        }
        let leader = this.traverseByIndex(this.length - 2);
        leader.next = leader.next.next;
        this.tail = leader;
        this.length--;
        return this;
    }
    delete(index) {
        if (this.isEmpty()) {
            return "No Data Make Delete";
        }
        if (index === 0) {
            return this.popFront();
        }
        else if (index < 0 || index >= this.length) {
            return "Index invalid";
        }
        else if (index === this.length - 1) {
            return this.popBack();
        }
        else {
            const leader = this.traverseByIndex(index - 1);
            leader.next = leader.next.next;
            this.length--;
            return this;
        }
    }
    lookUp(index) {
        return this.traverseByIndex(index);
    }
    printList() {
        let leader = this.head;
        let temp = 0;
        let array = [];
        while (temp !== this.length) {
            array.push(leader.value);
            leader = leader.next;
            temp++;
        }
        return array;
    }
}
exports.default = LLCircle;
