"use strict";

class MyStack {
    constructor() {
        this.q = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.q.push(val);
    }
    
    /**
     * time: O(n)
     * space: O(1)
     * 
     * @return {number}
     */
    pop() {
        // iterate all elems but the last one
        for (let i = 0; i < this.q.length - 1; i++) {
            const frontOfQueueElem = this.q.shift();
            // shift out elems from front of queue
            // add these elems to the back of the queue -> cycle
            this.q.push(frontOfQueueElem);
        }

        return this.q.shift();
    }

    /**
     * last elem peek
     * 
     * @return {number}
     */
    top() {
        return this.q[this.q.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q.length === 0;
    }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
