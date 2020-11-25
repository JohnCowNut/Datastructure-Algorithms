import LLDoubly from './LL-Doubly';

export default class LLStack <T> {
    items : LLDoubly<T>
    constructor() {
        this.items = new LLDoubly()
    }
    push(element) {
        return this.items.pushFront(element)
    }
    pop() {
        if(!this.items.isEmpty()) {
            return -1;
        }
        return this.items.popFront()
    }
    peek() {
        if(!this.items.isEmpty()) {
            return -1;
        }
        return this.items.lookup(0)
    }
}
