"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        if (value === void 0) { value = null; }
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    LinkedList.prototype.pushFront = function (value) {
        if (this.isEmpty()) {
            this.head = new node_1.Node(value);
        }
        else {
            var tempNode = this.head;
            this.head = new node_1.Node(value);
            this.head.next = tempNode;
        }
        this.length++;
        return this;
    };
    return LinkedList;
}());
