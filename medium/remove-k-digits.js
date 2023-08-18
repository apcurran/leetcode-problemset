"use strict";

/**
 * solution 1
 * time: O(n)
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
    const stackWithoutLeadingZeros = removeLeadingZeros(stack);
    const result = stackWithoutLeadingZeros.join("");

    return result || "0";
}

/**
 * @param {string[]} arr
 * @returns {string[]}
 */
function removeLeadingZeros(arr) {
    let hasFirstNonZeroNumBeenSeen = false;
    let results = [];

    for (let numStr of arr) {
        if (numStr === "0" && hasFirstNonZeroNumBeenSeen === false) {
            continue;
        }

        hasFirstNonZeroNumBeenSeen = true;
        results.push(numStr);
    }

    return results;
}

console.log(removeKdigits("1432219", 3)); // "1219"
