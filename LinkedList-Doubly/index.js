const LinkedListDoubly = require('./LinkedList-Doubly');

const myLinkedListDoubly = new LinkedListDoubly();
myLinkedListDoubly.insertHead(10)
myLinkedListDoubly.insertHead(1)

myLinkedListDoubly.insertTail(100);


console.log("================================")
console.log(myLinkedListDoubly.delete(1));
//console.log(myLinkedListDoubly.search())
//console.log(myLinkedListDoubly.insert(2,1000))  