"use strict";

class MyQueue {
    constructor() {
        this.stack = [];
    }

    push(x) {
        this.stack.push(x);
    }

    pop() {
        const poppedElem = this.stack.shift();

        return poppedElem;
    }

    peek() {
        return this.stack[0];
    }

    empty() {
        return this.stack.length === 0;
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */