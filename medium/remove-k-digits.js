"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
    let stack = [];
    let removedDigitsCount = 0;

    for (let digit of num) {
        while (stack.length > 0 && digit < stack.at(-1) && removedDigitsCount < k) {
            stack.pop();
            removedDigitsCount++;
        }

        stack.push(digit);
    }

    // remove remaining large digits
    while (removedDigitsCount < k) {
        stack.pop();
        removedDigitsCount++;
    }

    // remove leading zeros
    while (stack.length > 0 && stack[0] === "0") {
        stack.shift();
    }

    const result = stack.join("");

    return result || "0";
}

console.log(removeKdigits("1432219", 3)); // "1219"
