"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} initialValue
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(initialValue) {
    let value = initialValue;

    /**
     * @returns {number} value
     */
    function increment() {
        value++;

        return value;
    }

    /**
     * @returns {number} value
     */
    function decrement() {
        value--;

        return value;
    }

    /**
     * @returns {number} value after restart to initial amount
     */
    function reset() {
        value = initialValue;

        return value;
    }

    return {
        increment,
        decrement,
        reset,
    };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
