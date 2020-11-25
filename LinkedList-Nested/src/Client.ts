import Item from './Item';
export default class Client  {
    name : string;
    age: number;
    sizeItem: number;
    next : Client;
    item : Item;

    constructor(name:string , age : number) {
        this.name = name;
        this.age = age;
        this.item = null;
        this.sizeItem = 0;
        this.next  = null;
    }
    
}