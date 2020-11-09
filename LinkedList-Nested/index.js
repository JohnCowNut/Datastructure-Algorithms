const LLNested = require('./LinkedListNested');

const myNested = new LLNested()
const fakeClient = {
    name: "John",
    age: 19
}
const fakeItem1 = {
    name: "Bánh Mỳ",
    price: 20
}
const fakeItem = {
    name: "Phở",
    price: 20
}
myNested.pushFrontClient(fakeClient)
myNested.addItemToClient(1,"John",fakeItem1)
myNested.addItemToClient(0,"John",fakeItem)
// console.log("========================================")
//myNested.addItemToClient(1,"John",fakeItem)
// myNested.addClient(1,{name: "Hien",age:20})
// myNested.addClient(1,{name: "Byte",age:20})
// myNested.addClient(1,{name: "Bit",age:20})
// myNested.addClient(1,{name: "Mommy",age:20})
// myNested.addClient(1,{name: "Daddy",age:20})
//console.log(myNested.popBackItemByClient("John"))
myNested.popBackItemByClient('John');
console.log(myNested.popBackItemByClient('John'))
console.log(myNested.popFrontItemByClient('John'));