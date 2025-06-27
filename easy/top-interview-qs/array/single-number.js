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

// /**
//  * Solution 2
//  * Time: O(n)
//  * Space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function singleNumber(nums) {
//     const numsCache = new Map();

//     for (let num of nums) {
//         const numValToSave = (numsCache.get(num) || 0) + 1;
//         numsCache.set(num, numValToSave);
//     }

//     for (let [key, val] of numsCache) {
//         if (val === 1) return key;
//     }
// }

/**
 * Solution 3
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let numSet = new Set();

    for (let num of nums) {
        // duplicates are removed from set,
        // leaving only the single non-duplicate num
        if (numSet.has(num)) {
            numSet.delete(num);
            continue;
        }

        numSet.add(num);
    }
    
    // get first elem of Set obj
    return numSet
        .values()
        .next()
        .value;
}



// /**
//  * Solution 4 -- bit manipulation with XOR
//  * Time: O(n)
//  * Space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function singleNumber(nums) {
//     let result = 0;

//     for (let num of nums) {
//         result = result ^ num;
//     }

//     return result;
// }

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
