"use strict";

// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
// function reverseBits(n) {
//     let binaryStr = "";

//     for (let i = 0; i < 32; i++) {
//         if (n & (1 << i)) {
//             binaryStr += "1";
//         } else {
//             binaryStr += "0";
//         }
//     }

//     let result = 0;

//     for (let i = 0; i < 32; i++) {
//         if (binaryStr[31 - i] === "1") {
//             result |= (1 << i);
//         }
//     }

//     return result >>> 0;
// }

/**
 * solution 2 -- bitwise operators only
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        const bit = (n >>> i) & 1; // must use unsigned right shift in JS
        result = result | (bit << (31 - i));
    }

    return result >>> 0; // convert result value to unsigned 32-bit int
}

console.log(reverseBits(00000010100101000001111010011100)); // 
