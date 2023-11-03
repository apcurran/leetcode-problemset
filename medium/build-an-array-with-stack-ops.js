"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
function buildArray(target, n) {
    let stack = [];
    let i = 0;

    for (let num of target) {
        while (i < num - 1) {
            stack.push("Push");
            stack.push("Pop");
            i++;
        }

        stack.push("Push");
        i++;
    }

    return stack;
}

console.log(buildArray([1, 3], 3)); // ["Push","Push","Pop","Push"]
