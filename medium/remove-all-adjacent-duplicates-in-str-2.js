"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} str
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(str, k) {
    let stack = [];

    for (let char of str) {
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
        } else {
            // create new tuple pair
            stack.push([char, 1]);
        }

        if (stack[stack.length - 1][1] === k) {
            stack.pop();
        }
    }

    let result = "";

    for (let [char, count] of stack) {
        const chunk = char.repeat(count);
        result += chunk;
    }

    return result;
}

console.log(removeDuplicates("deeedbbcccbdaa", 3)); // "aa"
