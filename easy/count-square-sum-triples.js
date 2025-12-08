"use strict";

// /**
//  * solution 1
//  * time: O(n^3)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function countTriples(n) {
//     let triplesCount = 0;

//     for (let a = 1; a <= n; a++) {
//         for (let b = 2; b <= n; b++) {
//             for (let c = 3; c <= n; c++) {
//                 if ((a * a) + (b * b) === (c * c)) {
//                     triplesCount++;
//                 }
//             }
//         }
//     }

//     return triplesCount;
// }

// /**
//  * solution 2
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function countTriples(n) {
//     let triplesCount = 0;

//     for (let a = 1; a <= n; a++) {
//         for (let b = 2; b <= n; b++) {
//             const aSquared = a * a;
//             const bSquared = b * b;
//             const c = Math.trunc(Math.sqrt(aSquared + bSquared));
//             const cSquared = c * c;

//             if (aSquared + bSquared === cSquared && c <= n) {
//                 triplesCount++;
//             }
//         }
//     }

//     return triplesCount;
// }

/**
 * solution 3 -- sqrt calculation approach
 * time: O(n * sqrt(n))
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function countTriples(n) {
    let triplesCount = 0;

    for (let a = 1; a <= n; a++) {
        const aSquared = a * a;
        // c^2 = a^2 + b^2 and c <= n, therefore:
        // b^2 = c^2 - a^2 <= n^2 - a^2
        const maxBSquared = n * n - aSquared;
        const maxB = Math.trunc(Math.sqrt(maxBSquared));

        for (let b = 1; b <= maxB; b++) {
            const bSquared = b * b;
            const cSquared = aSquared + bSquared;
            const c = Math.sqrt(cSquared);

            if (Number.isInteger(c)) {
                triplesCount++;
            }
        }
    }

    return triplesCount;
}

console.log(countTriples(5)); // 2
console.log(countTriples(10)); // 4
