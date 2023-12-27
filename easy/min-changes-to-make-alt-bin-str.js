"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function minOperations(str) {
    let opsStartingWithZero = 0;
    let opsStartingWithOne = 0;

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            // even index
            if (str[i] === "0") {
                opsStartingWithOne++;
            } else {
                opsStartingWithZero++;
            }
        } else {
            // odd index
            if (str[i] === "1") {
                opsStartingWithOne++;
            } else {
                opsStartingWithZero++;
            }
        }
    }

    return Math.min(opsStartingWithOne, opsStartingWithZero);
}

console.log(minOperations("0100")); // 1
console.log(minOperations("1111")); // 2
