"use strict";

/**
 * solution 1
 * time: O(n * log n) -- array.sort() call
 * space: O(n) -- map and built-in sort use linear space
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
    // count freq of each num
    let numberFrequencies = new Map();

    for (let num of nums) {
        const previousNumFreq = numberFrequencies.get(num) || 0;
        numberFrequencies.set(num, previousNumFreq + 1);
    }

    // sort func with comparison callback checking num freq from map,
    return nums.sort(function sortByIncreasingFreq(numA, numB) {
        const numAFreq = numberFrequencies.get(numA);
        const numBFreq = numberFrequencies.get(numB);
        const frequenciesDiff = numAFreq - numBFreq;

        if (numAFreq === numBFreq) {
            return numB - numA;
        } else {
            return frequenciesDiff;
        }
    });
}

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
