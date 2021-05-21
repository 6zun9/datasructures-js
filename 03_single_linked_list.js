//define a function that returns a new node
function Node(data) {
  this.data = data;
  this.next = null;
}

//define a singly link list 

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //add a function to add new noes
  addNode(data) {
    const node = new Node(data);
    //check if the list is empty or not
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    //find the tail node and point the next to new node
    // assign the tail to new node
    else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  findNode(data) {
    //set the current to the head
    let current = this.head;
    //check if current exist or not
    if (current) {
      //loop over list until the last node
      while (current !== null) {
        //check if the data found or not
        if (current.data === data) {
          console.log('node found', current)
          return data;
        } else {
          current = current.next; //set the current to next node
        }
      }
      console.log('Your data is not found on the list'); // if the value is not  found on the list
      return null;

    } else {
      console.log('You have an empty list'); // for empty list
      return null;
    }
  }

  addNodeAfter(data, toNodeData) {
    let current = this.head; // set the current to head
    //if current is not null i.e list is not not null
    while (current) {
      if (current.data === toNodeData) { // check if the current node contains the data after which the new node to be inserted
        const node = new Node(data);
        if (current === this.tail) { // check if the node is tail or not
          this.tail.next = node;
          this.tail = node;
        }
        else { // insert the new node & point the current  to new node;
          node.next = current.next;
          current.next = node;
          break;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
    console.log('con not remove item from an empty list');
  }


}

const myLinkedList = new SinglyLinkedList();
myLinkedList.addNode(1);
myLinkedList.addNode(5);

console.log(myLinkedList, 'myLinkedList before inserting');

console.log(myLinkedList.findNode(5))

myLinkedList.addNodeAfter(12, 5);
console.log(myLinkedList, 'myLinkedList after inserting');

myLinkedList.removeNode(12);
console.log(myLinkedList, 'myLinkedList after removing');