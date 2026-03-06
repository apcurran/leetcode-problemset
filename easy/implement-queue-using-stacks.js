// class MyQueue {
//     constructor() {
//         this.stack = [];
//     }

//     /**
//      * time: O(1)
//      * space: O(1)
//      *
//      * @param {number} x
//      * @returns {void}
//      */
//     push(x) {
//         this.stack.push(x);
//     }

//     /**
//      * time: O(n) - shifting removes from front of stack, which causes all other elems to move over by one
//      * space: O(1)
//      *
//      * @returns {number}
//      */
//     pop() {
//         const poppedElem = this.stack.shift();

//         return poppedElem;
//     }

//     /**
//      * time: O(1)
//      * space: O(1)
//      *
//      * @returns {number}
//      */
//     peek() {
//         return this.stack[0];
//     }

//     /**
//      * time: O(1)
//      * space: O(1)
//      *
//      * @returns {boolean}
//      */
//     empty() {
//         return this.stack.length === 0;
//     }
// }

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * time: O(1)
     * space: O(1)
     *
     * @param {number} x
     * @returns {void}
     */
    push(x) {
        this.stack1.push(x);
    }

    _transfer() {
        if (this.stack2.length !== 0) {
            return;
        }

        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    /**
     * time: O(1) - amortized
     * space: O(1)
     *
     * @returns {number}
     */
    pop() {
        this._transfer();

        return this.stack2.pop();
    }

    /**
     * time: O(1)
     * space: O(1)
     *
     * @returns {number}
     */
    peek() {
        this._transfer();

        return this.stack2.at(-1);
    }

    /**
     * time: O(1)
     * space: O(1)
     *
     * @returns {boolean}
     */
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
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
