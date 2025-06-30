"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) args array-like obj
 *
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    const func = this;

    return func.apply(context, args);
};

function increment() {
    this.count++;
    return this.count;
}
console.log(increment.callPolyfill({ count: 1 })); // 2
