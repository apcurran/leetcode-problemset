"use strict";

/**
 * solution 1 -- DP
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    const house1 = nums[0];
    const totalSkippingFirstHouse = calcRobberyTotal(nums.slice(1));
    const totalSkippingLastHouse = calcRobberyTotal(nums.slice(0, -1));

    return Math.max(house1, totalSkippingFirstHouse, totalSkippingLastHouse);
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function calcRobberyTotal(nums) {
    let rob1 = 0;
    let rob2 = 0;

    for (let num of nums) {
        const temp = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2;
}

console.log( rob([1,2,3,1]) ); // 4
