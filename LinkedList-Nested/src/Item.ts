export default class Item {
    name : string ; 
    price : number;
    next : Item;
    constructor(name,price) {
        this.name = name;
        this.price= price;
        this.next = null;
    }
}