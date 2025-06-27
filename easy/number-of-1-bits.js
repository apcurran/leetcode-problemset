"use strict";

// /**
//  * @param {number} n - a positive int
//  * @return {number}
//  */
// function hammingWeight(n) {
//     let oneBitsCounter = 0;

//     while (n) {
//         // n % 2 gives 1 or 0 for 'last place' digit
//         oneBitsCounter += n % 2;
//         // bit shift to right one to operate on last place digit again
//         n = n >> 1;
//     }

//     return oneBitsCounter;
// }

/**
 * solution 2
 * time: O(1) - constant since 32-bits won't ever change in size
 * space: O(1)
 * 
 * @param {number} n - a positive int
 * @return {number}
 */
function hammingWeight(n) {
    let oneBitsCounter = 0;

    while (n) {
        n &= (n - 1);
        oneBitsCounter++;
    }

    return oneBitsCounter;
}
