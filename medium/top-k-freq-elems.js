"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    if (k === nums.length) return nums;

    let numFreqMap = new Map();

    for (let num of nums) {
        if (numFreqMap.has(num)) {
            const prevVal = numFreqMap.get(num);
            numFreqMap.set(num, prevVal + 1);
        } else {
            numFreqMap.set(num, 1);
        }
    }

    // bucket sort
    let bucketArr = [];
    
    for (let [num, freq] of numFreqMap) {
        const mySet = bucketArr[freq] || new Set();
        bucketArr[freq] = mySet.add(num);
    }
    
    let resultArr = [];
    // iterate backwards (highest freq first...)
    for (let i = bucketArr.length - 1; i >= 0; i--) {
        const currNumSet = bucketArr[i];

        if (currNumSet) {
            resultArr.push(...currNumSet);
        }

        if (resultArr.length === k) break;
    }
    
    return resultArr;
}

console.log( topKFrequent([1,1,1,2,2,3], 2) ); // [1, 2]
console.log( topKFrequent([1], 1) ); // [1]
