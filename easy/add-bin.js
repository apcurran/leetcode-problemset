"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    // 0b string prefix turns number string into a binary string
    // we cannot use parseInt(str, 2) as this will not work for all binary strings
    const aNumber = BigInt(`0b${a}`);
    const bNumber = BigInt(`0b${b}`);
    const aBSum = aNumber + bNumber;
    
    return (aBSum).toString(2);
}

console.log( addBinary("1010", "1011") ); // "10101"
