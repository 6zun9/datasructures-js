class Queue {
  constructor() {
    this.queue = [];
  }

  // add the items in a queue
  enqueue(item) {
    this.queue.push(item);
  }

  //remove the items that was inserted first
  dequeue() {
    this.queue.shift();
  }

  printQueue() {
    var str = '';
    for (var i = 0; i < this.queue.length; i++)
      str += this.queue[i] + ' ';

    return str;
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

//console queue
console.log(myQueue.printQueue());

//dequeue queue
console.log(myQueue.dequeue())