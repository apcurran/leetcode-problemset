"use strict";

// /**
//  * solution 1 -- sort first
//  * time: O(n * log n)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxProductDifference(nums) {
//     // sort nums largest to smallest
//     nums.sort((a, b) => b - a);

//     // two largest are the first prod pair
//     const largeProd = nums[0] * nums[1];
//     // two smallest are the small prod pair
//     const smallProd = nums[nums.length - 1] * nums[nums.length - 2];
    
//     // sub both prods for max diff
//     return largeProd - smallProd;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums) {
    let firstMaxNum = -Infinity;
    let secondMaxNum = -Infinity;
    let firstMinNum = Infinity;
    let secondMinNum = Infinity;

    for (let num of nums) {
        if (num > firstMaxNum) {
            secondMaxNum = firstMaxNum;
            firstMaxNum = num;
        } else if (num > secondMaxNum) {
            secondMaxNum = num;
        }

        if (num < firstMinNum) {
            secondMinNum = firstMinNum;
            firstMinNum = num;
        } else if (num < secondMinNum) {
            secondMinNum = num;
        }
    }

    const maxProd = firstMaxNum * secondMaxNum;
    const minProd = firstMinNum * secondMinNum;

    return maxProd - minProd; 
}

console.log( maxProductDifference([5, 6, 2, 7, 4]) ); // 34
