"use strict";

// /**
//  * solution 1
//  * time: O(sqrt(n))
//  * space: O(1)
//  *
//  * @param {number} x
//  * @return {number}
//  */
// function mySqrt(x) {
//     for (let i = 0; i <= x / 2 + 1; i++) {
//         const squaredValue = i * i;

//         if (squaredValue > x) return i - 1;
//     }

//     return 1;
// }

/**
 * solution 2
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    let left = 1;
    let right = Math.ceil(x / 2);

    while (left <= right) {
        const middle = left + Math.floor(right - left / 2);
        const squaredMiddle = middle * middle;

        if (squaredMiddle > x) {
            right = middle - 1;
        } else if (squaredMiddle < x) {
            left = middle + 1;
        } else {
            return middle;
        }
    }

    return right;
}

console.log(mySqrt(1)); // 1
console.log(mySqrt(4)); // 2
