"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
    if (n === 1) return 0;

    let value = BigInt(1);

    for (let i = BigInt(2); i <=n; i++) {
        value *= i;
    }

    // check value for trailing zeros
    const valueStr = String(value);
    let trailingZerosCount = 0;
    // reverse iteration
    for (let i = valueStr.length - 1; i >= 0; i--) {
        const digitStr = valueStr[i];

        if (digitStr === "0") {
            trailingZerosCount++;
        } else {
            break;
        }
    }

    return trailingZerosCount;
}

console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(7)); // 1
console.log(trailingZeroes(30)); // 7
