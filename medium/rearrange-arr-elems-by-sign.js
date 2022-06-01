"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function rearrangeArray(nums) {
    const posElems = nums.filter((num) => num > 0);
    const negElems = nums.filter((num) => num <= 0);
    let resArr = [];

    for (let i = 0; i < posElems.length; i++) {
        const posElem = posElems[i];
        const negElem = negElems[i];
        resArr.push(posElem, negElem);
    }

    return resArr;
}

console.log( rearrangeArray([3, 1, -2, -5, 2, -4]) ); // [3, -2, 1, -5, 2, -4]
console.log( rearrangeArray([-1, 1]) ); // [1, -1]
