"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} ms
 * @returns {void}
 */
async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */