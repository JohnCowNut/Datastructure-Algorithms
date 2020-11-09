const Client = require('./Client')
const Item = require('./Item');

class LLNested {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    pushFrontClient({name, age}){
        const newClient = new Client(name,age);
        if(!this.length) {
            this.head = newClient;
            this.length ++;
            return this;
        }
        newClient.next = this.head;
        this.head = newClient;
        this.length ++;
        return this;        
    }
    findClientByName(nameClient) {
        let currentClient = this.head;
        while(currentClient) {
            if(currentClient.name  === nameClient) {
                return currentClient;
            }
            currentClient = currentClient.next;
        }
        return currentClient
    }
    addItemPushBack(exitsClient,{name,price}) {
        const newItem = new Item(name,price);
        let currentItem = this.traverseIndex(
            exitsClient.item
            ,exitsClient.sizeItem - 1);
        currentItem.next = newItem;
        exitsClient.sizeItem ++;
        return this;
    }
    addItemToClient(index,nameClient,{name,price}) {
        const exitsClient = this.findClientByName(nameClient);
        if(!exitsClient) {
            return "Client Wrong Please Check Client Name !"
        }
        const newItem = new Item(name,price);
        
        if(!exitsClient.item) {
            exitsClient.item = newItem;
            exitsClient.sizeItem ++;
            return this;
        }else if(index === 0) {
            newItem.next = exitsClient.item;
            exitsClient.item = newItem
            exitsClient.sizeItem++;
            return this;
        }else if(index < 0 || index > exitsClient.sizeItem) {
            return "Index Invalid" 
        }else if(index === exitsClient.sizeItem) {
            return this.addItemPushBack(exitsClient,{name,price})
        }else {
            let currentItem = this.traverseIndex(exitsClient.item,index - 1);
            newItem.next = currentItem.next;
            currentItem.next = newItem;
            exitsClient.sizeItem ++;
            return this;
        }

    }
    traverseIndex(Item,index) {
        let temp = 0;
        let pointer = Item;
        while(temp !== index ) {
            pointer = pointer.next;
            temp ++;
        }
        return pointer;
    }
    pushBackClient({name,age}) {
        const newClient = new Client(name,age);
        let currentClient = this.traverseIndex(this.head,this.length - 1)
        currentClient.next = newClient;
        this.length ++;
        return this;
    }
    addClient(index, {name, age}) {
        if(index === 0) {
            return this.pushFrontClient({name, age});
        }else if(index === this.length) {
            return this.pushBackClient({name,age})
        }else if(index < 0 || index > this.length) {
            return "Index make Insert Invalid"
        }else {
            const newClient = new Client(name,age);
            let currentClient = this.traverseIndex(this.head, index - 1);
            newClient.next = currentClient.next;
            currentClient.next = newClient;
            this.length ++;
            return this;
        }
    }
    popFrontClient() {
        if(!this.length) {
            return "Empty the Client"
        }
        this.head = this.head.next;
        this.length -- ;
        return this;
    }
    popBackClient() {
        if(!this.length) {
            return "Empty the Client"
        }
        let currentClient = this.traverseIndex(this.head,this.length - 1)
        currentClient.next = null;
        this.length --;
        return this;
    }
    removeClient(index) { 
        if(!this.length) {
            return "Empty the Client"
        }
        if(index === 0) {
            return this.popFrontClient()
        }else if(index === this.length - 1) {
            return this.pushBackClient()
        }else if(index < 0 || index >= this.length) {
            return "Index is not invalid"
        }else {
            let currentClient = this.traverseIndex(this.head,index - 1);
            currentClient.next = currentClient.next.next;
            this.length --;
            return this;
        }
    
    }
    popBackItemByClient(nameClient) {
        let currentClient = this.findClientByName(nameClient) 
        if(!currentClient) {
            return "Name Client Invalid"
        }
        if(!currentClient.sizeItem) {
            return "Client is Empty Item"
        }
        if(currentClient.sizeItem === 1) {
            currentClient.item = null;
            currentClient.sizeItem --;
            return this;
        }
        let currentItemByClient = this.traverseIndex(currentClient.item
                                , currentClient.sizeItem - 2 )
        currentItemByClient.next = null;
        currentClient.sizeItem --;
        return this;
    }
    popFrontItemByClient(nameClient) {
        let currentClient = this.findClientByName(nameClient) 
      
        if(!currentClient) {
            return "Name Client Invalid"
        }
        if(!currentClient.sizeItem) {
            return "Client is Empty Item"
        }
        currentClient.item = currentClient.item.next;
        currentClient.sizeItem--;
        return this;
    }
    removeItemByClient(nameClient, indexItem) {
        let currentClient = this.findClientByName(nameClient);
        if(!currentClient) {
            return "Name Client Invalid"
        }
        if(indexItem === 0) {
            return this.popFrontItemByClient(nameClient);
        }else if(indexItem === currentClient.sizeItem - 1) {
            return this.popBackItemByClient(nameClient)
        }else if (indexItem < 0 || indexItem >= currentClient.sizeItem) {
            return "Index is invalid"
        }else {
            let currentItemByClient = this
                                        .traverseIndex(currentClient.item
                                        , indexItem - 1);
            currentItemByClient.next = currentItemByClient.next.next;
            currentClient.sizeItem --;
            return this;
        }
    }
}


module.exports = LLNested;