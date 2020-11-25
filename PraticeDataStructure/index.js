const Stack = require('./Stack');
const Queue = require('./Queue');

const myStack = new Stack();
const myQueue = new Queue();
// myStack.push(25)
// myStack.push(15)
// myStack.push(10);
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())


// =========================

myQueue.enQueue(2)
console.log(myQueue.enQueue(3))
console.log("=========")
console.log(myQueue.deQueue())