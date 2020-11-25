const LLDummy = require('./LinkedListDummy');
const myDummy = new LLDummy();
myDummy.pushFront(12)
myDummy.pushFront(10)
myDummy.pushFront(15)
myDummy.pushBack(24)
console.log(myDummy.insert(2,100))