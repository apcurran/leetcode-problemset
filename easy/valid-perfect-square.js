"use strict";

// /**
//  * solution 1 -- using built-in sqrt func (not meeting problem constraints)
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {number} num
//  * @return {boolean}
//  */
// function isPerfectSquare(num) {
//     const sqrtNum = Math.sqrt(num);
    
//     return Number.isInteger(sqrtNum);
// }

// /**
//  * solution 2 -- valid math solution
//  * time: O(sqrt(n))
//  * space: O(1)
//  * 
//  * @param {number} num
//  * @return {boolean}
//  */
// function isPerfectSquare(num) {
//     let i = 1;

//     while (num > 0) {
//         num -= i;
//         i += 2;
//     }

//     return num === 0;
// }

/**
 * solution 3 -- squaring solution
 * time: O(sqrt(n))
 * space: O(1)
 * 
 * @param {number} num
 * @return {boolean}
 */
 function isPerfectSquare(num) {
    for (let i = 1; i <= num; i++) {
        const squaredNum = i * i;

        if (squaredNum === num) {
            return true;
        }

        if (squaredNum > num) {
            return false;
        }
    }
}


console.log( isPerfectSquare(16) ); // true
console.log( isPerfectSquare(14) ); // false