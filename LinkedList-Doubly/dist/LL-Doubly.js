"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class LLDoubly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0;
    }
    pushWhenIsEmpty(value) {
        const newNode = new node_1.default(value);
        this.head = this.tail = newNode;
        this.length++;
        return this;
    }
    pushFront(value) {
        if (this.isEmpty()) {
            return this.pushWhenIsEmpty(value);
        }
        const newNode = new node_1.default(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    pushBack(value) {
        if (this.isEmpty()) {
            return this.pushWhenIsEmpty(value);
        }
        const newNode = new node_1.default(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index === 0) {
            return this.pushFront(value);
        }
        else if (index === this.length) {
            return this.pushBack(value);
        }
        else if (index < 0 || index > this.length) {
            return "Index invalid";
        }
        else {
            const newNode = new node_1.default(value);
            let currentNode = this.traverseByIndex(index - 1);
            const follower = currentNode.next;
            currentNode.next = newNode;
            newNode.next = follower;
            newNode.prev = currentNode;
            follower.prev = newNode;
            this.length++;
            return this;
        }
    }
    popWhenItemLastOne() {
        this.head = this.tail = null;
        this.length--;
        return this;
    }
    popFront() {
        if (this.isEmpty()) {
            return "No Item Make Delete";
        }
        if (this.length === 1) {
            return this.popWhenItemLastOne();
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return this;
    }
    popBack() {
        if (this.isEmpty()) {
            return "No Item Make Delete";
        }
        if (this.length === 1) {
            return this.popWhenItemLastOne();
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return this;
    }
    traverseByIndex(index) {
        let temp = 0;
        let pointer = this.head;
        while (index !== temp) {
            pointer = pointer.next;
            temp++;
        }
        return pointer;
    }
    printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    delete(index) {
        if (this.isEmpty()) {
            return "No Item Make Delete";
        }
        if (this.length === 1) {
            return this.popWhenItemLastOne();
        }
        if (index === 0) {
            return this.popFront();
        }
        else if (index === this.length - 1) {
            return this.popBack();
        }
        else if (index < 0 || index >= this.length) {
            return "Index invalid";
        }
        else {
            let wannaDelete = this.traverseByIndex(index);
            const after = wannaDelete.next;
            const before = wannaDelete.prev;
            wannaDelete.next = null;
            wannaDelete.prev = null;
            before.next = after;
            after.prev = before;
            this.length--;
            return this;
        }
    }
    lookup(index) {
        return this.traverseByIndex(index);
    }
}
exports.default = LLDoubly;
