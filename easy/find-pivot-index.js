"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        const leftArr = nums.slice(0, i);
        const leftArrSum = sumArr(leftArr);
        const rightArr = nums.slice(i + 1);
        const rightArrSum = sumArr(rightArr);

        if (leftArrSum === rightArrSum) return i;
    }

    return -1;
}

/**
 * 
 * @param {number[]} numsArr 
 * @returns {number}
 */
function sumArr(numsArr) {
    let sum = 0;

    for (let num of numsArr) {
        sum += num;
    }

    return sum;
}

console.log( pivotIndex([1, 7, 3, 6, 5, 6]) ); // 3
console.log( pivotIndex([1, 2, 3]) ); // -1
console.log( pivotIndex([2, 1, -1]) ); // 0
