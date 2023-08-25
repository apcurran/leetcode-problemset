"use strict";

/**
 * solution 1 -- no bitwise ops
 * time: O(x + y)
 * space: O(x + y)
 * 
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
    let xBits = x.toString(2);
    let yBits = y.toString(2);
    let bitsDiff = 0;

    if (xBits.length > yBits.length) {
        yBits = yBits.padStart(xBits.length, "0");
    } else {
        xBits = xBits.padStart(yBits.length, "0");
    }

    for (let i = 0; i < xBits.length; i++) {
        const currentXBit = xBits[i];
        const currentYBit = yBits[i];

        if (currentXBit !== currentYBit) bitsDiff++;
    }

    return bitsDiff;
}

console.log(hammingDistance(1, 4)); // 2
