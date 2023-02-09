"use strict";

class StockSpanner {
    constructor() {
        this.stack = []; // tuple: [price, span]
    }

    /** 
     * solution 1 -- stack
     * time: O(n)
     * space: O(n)
     * 
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let currentSpan = 1;

        // while the stack has items, and
        // the top stack item's price is less than or equal to the current given price
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            const topStackItemSpan = this.stack[this.stack.length - 1][1];
            currentSpan += topStackItemSpan;
            // remove top stack item afterwards
            this.stack.pop();
        }

        this.stack.push([price, currentSpan]);

        return currentSpan;
    }
}
