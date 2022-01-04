"use strict";

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
};

/** 
 * Time: O(1)
 * Space: O(1)
 * 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    // Don't add any num to stack if it has reached its maxSize
    if (this.stack.length >= this.maxSize) return;

    // All good to add to stack
    this.stack.push(x);
};

/**
 * Time: O(1)
 * Space: O(1)
 * 
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    // If the stack is empty, return -1
    if (this.stack.length === 0) return -1;

    // Otherwise, pop and return the top of the stack
    return this.stack.pop();
};

/** 
 * Time: O(k)
 * Space: O(1)
 * 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    // Step 1: Iterate through stack elems checking if the index has exceeded the last k elem index of the stack
    for (let i = 0; i < k && i < this.stack.length; i++) {
        const currStackElem = this.stack[i];
        // Step 3: Increment the current elem in the stack by val
        const newStackElemValue = currStackElem + val;
        // Step 4: Re-assign current elem to new incremented val
        this.stack[i] = newStackElemValue;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */