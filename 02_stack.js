class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }
  // prints the stack
  printStack() {
    var str = "";
    for (var i = 0; i < this.stack.length; i++)
      str += this.stack[i] + "\n";
    return str;
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

//print stack
console.log("Your stack is:\n" + myStack.printStack());