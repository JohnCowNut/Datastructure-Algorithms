"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LL_Doubly_1 = require("./LL-Doubly");
class LLStack {
    constructor() {
        this.items = new LL_Doubly_1.default();
    }
    push(element) {
        return this.items.pushFront(element);
    }
    pop() {
        if (!this.items.isEmpty()) {
            return -1;
        }
        return this.items.popFront();
    }
    peek() {
        if (!this.items.isEmpty()) {
            return -1;
        }
        return this.items.lookup(0);
    }
}
exports.default = LLStack;
