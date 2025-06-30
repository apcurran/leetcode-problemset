"use strict";

class StockSpanner {
    constructor() {
        this.stack = []; // tuple: [price, span]
    }

    /**
     * solution 1 -- stack
     * time: O(n) -- amortized over all runs of .next()
     * space: O(n)
     *
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let currentSpan = 1;

        // while the stack has items, and
        // the top stack item's price is less than or equal to the current given price
        while (
            this.stack.length > 0 &&
            this.stack[this.stack.length - 1][0] <= price
        ) {
            const topStackItem = this.stack.pop();
            const topStackItemSpan = topStackItem[1];
            currentSpan += topStackItemSpan;
        }

        this.stack.push([price, currentSpan]);

        return currentSpan;
    }
}
