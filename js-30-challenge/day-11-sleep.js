"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} ms 
 * @returns {Promise}
 */
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log( sleep(100) ); // -> return a promise that will resolve after 100ms
