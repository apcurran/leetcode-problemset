"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 *
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
const promisePool = async function (functions, n) {
    async function evaluateNextFunc() {
        if (functions.length === 0) return;

        const func = functions.shift();
        await func();
        await evaluateNextFunc();
    }

    let nPromises = [];

    for (let i = 0; i < n; i++) {
        nPromises.push(evaluateNextFunc());
    }

    await Promise.all(nPromises);
};

const sleep = (t) => new Promise((res) => setTimeout(res, t));
console.log(
    promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log),
); // After 900ms
