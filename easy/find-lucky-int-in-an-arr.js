"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
    let luckyIntsArr = [];
    // Cache each num and count in a map
    let numCache = new Map();

    for (let num of arr) {
        if (!numCache.has(num)) {
            // Add new num
            numCache.set(num, 1);
        } else {
            // Incr num count
            const prevNumCount = numCache.get(num);
            numCache.set(num, prevNumCount + 1);
        }
    }

    // Iterate through map and push each num === numCount into an arr
    for (let [num, numCount] of numCache) {
        if (num === numCount) {
            luckyIntsArr.push(num);
        }
    }
    // Take max num from arr and return it
    if (luckyIntsArr.length > 0) {
        return Math.max(...luckyIntsArr);
    }

    // If there are no lucky ints
    return -1;
}

console.log(findLucky([2, 2, 3, 4])); // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 2, 3, 3])); // -1
