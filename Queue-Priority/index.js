const QueuePriority = require('./QueuePriority');
const myQueuePriority = new QueuePriority();

console.log(myQueuePriority.enQueue("Fetching Bigger data",5));
console.log(myQueuePriority.enQueue("Easy Task ",1))
console.log(myQueuePriority.enQueue("Medium Task ",3))