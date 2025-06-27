"use strict";

/**
 * solution 1 -- prefix sum
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr
 * @return {number}
 */
function maxChunksToSorted(arr) {
    let currentMax = -1;
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        currentMax = Math.max(currentMax, num);

        if (currentMax === i) result++; 
    }

    return result;
}

console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // 4
