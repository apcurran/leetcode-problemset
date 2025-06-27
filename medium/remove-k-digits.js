"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} num
//  * @param {number} k
//  * @return {string}
//  */
// function removeKdigits(num, k) {
//     let stack = [];
//     let removedDigitsCount = 0;

//     for (let digit of num) {
//         while (stack.length > 0 && digit < stack.at(-1) && removedDigitsCount < k) {
//             stack.pop();
//             removedDigitsCount++;
//         }

//         stack.push(digit);
//     }

//     // remove remaining large digits
//     while (removedDigitsCount < k) {
//         stack.pop();
//         removedDigitsCount++;
//     }

//     // remove leading zeros
//     const stackWithoutLeadingZeros = removeLeadingZeros(stack);
//     const result = stackWithoutLeadingZeros.join("");

//     return result || "0";
// }

// /**
//  * @param {string[]} arr
//  * @returns {string[]}
//  */
// function removeLeadingZeros(arr) {
//     let hasFirstNonZeroNumBeenSeen = false;
//     let results = [];

//     for (let numStr of arr) {
//         if (numStr === "0" && hasFirstNonZeroNumBeenSeen === false) {
//             continue;
//         }

//         hasFirstNonZeroNumBeenSeen = true;
//         results.push(numStr);
//     }

//     return results;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
    let stack = [];

    for (let currentDigit of num) {
        // while k is greater than 0, AND
        // stack is not empty AND
        // top of stack is greater than current digit
        while (k > 0 && stack.length > 0 && stack.at(-1) > currentDigit) {
            stack.pop();
            k--;
        }

        if (stack.length === 0 && currentDigit === "0") {
            // skip adding leading zeros
            continue;
        }

        stack.push(currentDigit);
    }

    // remove the last k digits from stack
    const result = stack
        .slice(0, stack.length - k)
        .join("");
    // return digits, unless result is an empty string,
    // then return "0"
    return result === "" ? "0" : result;
}

console.log(removeKdigits("1432219", 3)); // "1219"
console.log(removeKdigits("10200", 1)); // "200"
