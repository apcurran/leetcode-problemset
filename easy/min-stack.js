"use strict";


var MinStack = function() {
    this.stack = [];
};

/**
 * Time: O(1)
 * Space: O(1)
 * 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * Time: O(1)
 * Space: O(1)
 * 
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * Time: O(n)
 * Space: O(n)
 * 
 * @return {number}
 */
MinStack.prototype.top = function() {
    const stackCopy = [...this.stack];

    return stackCopy.pop();
};

/**
 * Time: O(n)
 * Space: O(n)
 * 
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};