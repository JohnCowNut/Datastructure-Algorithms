"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LL_Nested_1 = require("./LL-Nested");
const myNested = new LL_Nested_1.default();
console.log(myNested.pushBackClient({ name: "Sambi", age: 24 }));
console.log(myNested.addItemPushFront("Sambi", { name: "Bim bim ", price: 24 }));
console.log(myNested.popBackItemByClient("Sambi"));
