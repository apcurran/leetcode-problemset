"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} num
 * @return {string} max good integer (substr int of len === 3)
 */
function largestGoodInteger(num) {
    let maxGoodInt = "";

    for (let i = 0; i < num.length; i++) {
        if (num[i - 1] === num[i] && num[i] === num[i + 1]) {
            // three consecutive digits
            maxGoodInt = Math.max(maxGoodInt, Number(num[i]));
        }
    }

    return `${maxGoodInt}${maxGoodInt}${maxGoodInt}`;
}

console.log(largestGoodInteger("6777133339")); // "777"
console.log(largestGoodInteger("2300019")); // "000"
console.log(largestGoodInteger("42352338")); // ""
