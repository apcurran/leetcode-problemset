"use strict";

/**
 * solution 1 -- modulo and RIGHT SHIFT bitwise operator
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n - a positive int
 * @return {number}
 */
function hammingWeight(n) {
    let oneBitsCounter = 0;

    while (n > 0) {
        // n % 2 gives 1 or 0 for 'last place' digit
        oneBitsCounter += n % 2;
        // bit shift to right one to operate on last place digit again
        n = n >> 1;
    }

    return oneBitsCounter;
}

console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30

// /**
//  * solution 2
//  * time: O(1) - constant since 32-bits won't ever change in size
//  * space: O(1)
//  *
//  * @param {number} n - a positive int
//  * @return {number}
//  */
// function hammingWeight(n) {
//     let oneBitsCounter = 0;

//     while (n !== 0) {
//         n &= n - 1;
//         oneBitsCounter++;
//     }

//     return oneBitsCounter;
// }

// /**
//  * solution 3 -- brute force
//  * time: O(n) stringify n
//  * space: O(n) stringify n
//  *
//  * @param {number} n - a positive int
//  * @return {number}
//  */
// function hammingWeight(n) {
//     const nBinStr = n.toString(2);
//     let oneBitsCounter = 0;

//     for (let bitStr of nBinStr) {
//         if (bitStr === "1") {
//             oneBitsCounter++;
//         }
//     }

//     return oneBitsCounter;
// }
