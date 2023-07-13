"use strict";

// /**
//  * solution 1 -- recursion top-down (TLE)
//  * time: O(2^n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function rob(nums) {
//     return getRobberyTotal(nums, nums.length - 1);    
// }

// /**
//  * @param {number[]} nums 
//  * @param {number} i
//  * @returns {number}
//  */
// function getRobberyTotal(nums, i) {
//     if (i < 0) return 0;

//     const totalOfCurrentPlusHouseBeforeLastLoot = nums[i] + getRobberyTotal(nums, i - 2);
//     const totalOfPreviousHouseLoot = getRobberyTotal(nums, i - 1);

//     return Math.max(totalOfCurrentPlusHouseBeforeLastLoot, totalOfPreviousHouseLoot); 
// }

/**
 * solution 2 -- recursion top-down with caching
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    return getRobberyTotal(nums, nums.length - 1);    
}

/**
 * @param {number[]} nums 
 * @param {number} i
 * @returns {number}
 */
function getRobberyTotal(nums, i, cache = new Map()) {
    if (i < 0) return 0;

    // check cache for pre-computed value
    if (cache.has(i)) {
        return cache.get(i);
    }

    const totalOfCurrentPlusHouseBeforeLastLoot = nums[i] + getRobberyTotal(nums, i - 2, cache);
    const totalOfPreviousHouseLoot = getRobberyTotal(nums, i - 1, cache);
    const maxOfBothRobberyOptions = Math.max(totalOfCurrentPlusHouseBeforeLastLoot, totalOfPreviousHouseLoot);
    // update cache
    cache.set(i, maxOfBothRobberyOptions);

    return maxOfBothRobberyOptions;
}

// /**
//  * solution 3 -- DP
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function rob(nums) {
//     let rob1 = 0;
//     let rob2 = 0;

//     // [rob1, rob2, n, n + 1, ...]
//     for (let num of nums) {
//         const temp = Math.max(num + rob1, rob2);
//         rob1 = rob2;
//         rob2 = temp;
//     }

//     return rob2;
// }

console.log( rob([1, 2, 3, 1]) ); // 4
