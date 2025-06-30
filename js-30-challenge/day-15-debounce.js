"use strict";

/**
 * solution 1
 * a = args
 * time: O(a)
 * space: O(a)
 *
 * @param {Function} fn
 * @param {number} duration milliseconds
 * @return {Function}
 */
const debounce = function (fn, duration) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn(...args);
        }, duration);
    };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
