"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
    // Count nums first
    let numCountMap = new Map();
    let goodPairsCount = 0;

    for (let num of nums) {
        if (!numCountMap.has(num)) {
            // Store new num
            numCountMap.set(num, 1);
        } else {
            // Inc prev num count
            const prevNumCount = numCountMap.get(num);
            numCountMap.set(num, prevNumCount + 1);
        }
    }

    // If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.
    for (let numCount of numCountMap.values()) {
        const currNumGoodPairs = (numCount * (numCount - 1)) / 2;
        goodPairsCount += currNumGoodPairs;        
    }
    
    return goodPairsCount;
}

console.log( numIdenticalPairs([1, 2, 3, 1, 1, 3]) ); // 4
console.log( numIdenticalPairs([1, 1, 1, 1]) ); // 6
