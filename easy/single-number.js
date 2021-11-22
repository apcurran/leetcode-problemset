"use strict";

// /** Solution 1
//  * @param {number[]} nums
//  * @return {number}
//  */
// function singleNumber(nums) {
//     const numsCache = {};

//     for (let num of nums) {
//         numsCache[num] = (numsCache[num] || 0) + 1;
//     }

//     for (let num in numsCache) {
//         if (numsCache[num] === 1) return +num;
//     }
// }

/** Solution 2
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    const numsCache = new Map();

    for (let num of nums) {
        const numValToSave = (numsCache.get(num) || 0) + 1;
        numsCache.set(num, numValToSave);
    }

    for (let [key, val] of numsCache) {
        if (val === 1) return key;
    }
}

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4