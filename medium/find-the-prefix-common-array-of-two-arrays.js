"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} A
//  * @param {number[]} B
//  * @return {number[]}
//  */
// function findThePrefixCommonArray(A, B) {
//     let results = new Array(A.length);

//     for (let i = 0; i < A.length; i++) {
//         // from 0 to i, count how many nums are present in both A & B
//         const aNums = A.slice(0, i + 1);
//         const bNums = B.slice(0, i + 1);
//         let similarNumsCount = 0;

//         for (let aValue of aNums) {
//             const isNumPresentInB = bNums.includes(aValue);

//             if (isNumPresentInB) {
//                 similarNumsCount++;
//             }
//         }
//         // update results at current index
//         results[i] = similarNumsCount;
//     }

//     return results;
// }

/**
 * solution 2 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(A, B) {
    let seenNums = new Set();
    let similarNumsCount = 0;
    let results = [];

    for (let i = 0; i < A.length; i++) {
        const aNum = A[i];
        const bNum = B[i];

        if (seenNums.has(aNum)) {
            similarNumsCount++;
        }

        if (seenNums.has(bNum)) {
            similarNumsCount++;
        }

        if (aNum === bNum) {
            similarNumsCount++;
        }

        seenNums.add(aNum).add(bNum);

        results.push(similarNumsCount);
    }

    return results;
}

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])); // [0,2,3,4]
