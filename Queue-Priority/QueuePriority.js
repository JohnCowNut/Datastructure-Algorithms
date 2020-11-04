class Task {
    constructor(value,priority) {
        this.value = value;
        this.priority = priority;
    }
} 

class QueuePriority {
    constructor() {
        this.data = [],
        this.length = 0;
    } 
    enQueue(value,priority) {
        const newTask = new Task(value,priority);
        if(this.length === 0) {
            this.data.push(newTask);
            this.length ++;
        }else { 
            // find index 
            let isExits = false;
            for(let i = 0 ; i < this.length ; i ++ ) {
                if(this.data[i].priority > newTask.priority) {
                    this.data.splice(i,0,newTask);
                    isExits = true;
                    break;
                }
            }
            if(!isExits) {
                this.data.push(newTask)
            }
            this.length ++;
        }
        return this.data;
    }
    deQueue(value,priority) {
        if(!this.length) {
            return "Queue Empty"
        }
        return this.data.shift();
    }
}

module.exports = QueuePriority;