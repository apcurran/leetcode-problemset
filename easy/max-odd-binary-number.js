"use strict";

/**
 * solution 1 -- counting 1 bits
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function maximumOddBinaryNumber(s) {
    let onesCount = 0;

    for (let bit of s) {
        if (bit === "1") onesCount++;
    }

    const onesBits = "1".repeat(onesCount - 1);
    const zerosBits = "0".repeat(s.length - onesCount);
    const finalOneBit = "1"; // this ensures an odd binary number

    return onesBits + zerosBits + finalOneBit;
}

console.log(maximumOddBinaryNumber("0101")); // "1001"
