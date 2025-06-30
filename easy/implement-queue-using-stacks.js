"use strict";

class MyQueue {
    constructor() {
        this.stack = [];
    }

    /**
     * time: O(1)
     * space: O(1)
     *
     * @param {number} x
     * @returns {void}
     */
    push(x) {
        this.stack.push(x);
    }

    /**
     * time: O(n) - shifting removes from front of stack, which causes all other elems to move over by one
     * space: O(1)
     *
     * @returns {number}
     */
    pop() {
        const poppedElem = this.stack.shift();

        return poppedElem;
    }

    /**
     * time: O(1)
     * space: O(1)
     *
     * @returns {number}
     */
    peek() {
        return this.stack[0];
    }

    /**
     * time: O(1)
     * space: O(1)
     *
     * @returns {boolean}
     */
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
