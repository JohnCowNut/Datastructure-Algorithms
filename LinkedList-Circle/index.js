const LinkedListCircle = require('./LinkedList-Circle');
const myLLCircle = new LinkedListCircle();

myLLCircle.insert(0,1)
// console.log("====================")
myLLCircle.insert(0,10)
myLLCircle.insert(0,100)
myLLCircle.insert(0,0)
myLLCircle.push(1000)
myLLCircle.insert(1,33)
myLLCircle.delete(6)
console.log(myLLCircle.delete(3))
console.log(myLLCircle.printList())  
// console.log("====================")
// console.log(myLLCircle.tail) 
// console.log(myLLCircle.push(100));