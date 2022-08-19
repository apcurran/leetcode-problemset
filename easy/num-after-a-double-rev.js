"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number} num
//  * @return {boolean}
//  */
// function isSameAfterReversals(num) {
//     const reversedNumStr = String(num).split("").reverse().join("");
//     const numStrNoLeadingZeroes = reversedNumStr.replace(/^0+/, "");
//     const doubleReversedNumNoZeroes = Number( numStrNoLeadingZeroes.split("").reverse().join("") );

//     return doubleReversedNumNoZeroes === num;
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} num
 * @return {boolean}
 */
function isSameAfterReversals(num) {
    if (num === 0) return true;

    return num % 10 !== 0;
}

console.log( isSameAfterReversals(526) ); // true
console.log( isSameAfterReversals(1800) ); // false
console.log( isSameAfterReversals(0) ); // true
