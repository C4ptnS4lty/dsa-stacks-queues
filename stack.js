/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let item = new Node(val);

    if (!this.last) {
      this.last = item;
      this.first = item;
    } else {
      item.next = this.first;
      this.first = item;
    }

    this.size += 1;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if (!this.first) {
      throw new Error(`Nothing is in the Stack`);
      
    }

    let val = this.first.val;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      this.size = 0;
    } else {
      let top = this.first.next;

      this.first = top;
      this.size -= 1;
    }

    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

    if(this.first) {
      return this.first.val;
    }

    return null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size == 0 && this.first === null);
  }
}

module.exports = Stack;
