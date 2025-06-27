"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {number}
 */
function findSpecialInteger(arr) {
    // count all nums and store counts in hashmap
    let numCounts = new Map();

    for (let num of arr) {
        const previousNumCount = numCounts.get(num) || 0;
        numCounts.set(num, previousNumCount + 1);
    }
    // after iteration of arr,
    // loop through hashmap and check which digit count occurs more than .25 of the time
    for (let [num, numCount] of numCounts) {
        if (numCount / arr.length > 0.25) {
            return num;
        }
    }
}

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6
console.log(findSpecialInteger([1, 1])); // 1
console.log(findSpecialInteger([1, 2, 3, 3])); // 3
