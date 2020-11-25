"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.next = null;
    }
}
exports.default = Item;
