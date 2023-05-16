"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {Function} fn
 * @param {number} timeMs
 * @return {Function}
 */
const timeLimit = function(fn, timeMs) {
	return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, timeMs);

            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timeout));
        });
    };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
