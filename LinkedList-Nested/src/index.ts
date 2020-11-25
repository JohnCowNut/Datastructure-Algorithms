import LLNested  from './LL-Nested';

const myNested = new LLNested();

// myNested.pushFrontClient({name: "thuong",age:29})
// myNested.pushFrontClient({name: "Yen",age:14})
// myNested.pushFrontClient({name: "Sambi",age:24}) 


console.log(myNested.pushBackClient({name: "Sambi",age:24}) )
console.log(myNested.addItemPushFront("Sambi", {name:"Bim bim ", price:24}))
console.log(myNested.popBackItemByClient("Sambi"))
//myNested.addItemPushBack("Sambi", {name:"Bimbim",price:20})