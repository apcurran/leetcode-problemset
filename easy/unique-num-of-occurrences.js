"use strict";

/**
 * solution 1 -- Map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    let numsMap = new Map();

    for (let num of arr) {
        const previousNumFreq = numsMap.get(num) || 0;
        numsMap.set(num, previousNumFreq + 1);
    }

    // generate a unique Set from occurrences list
    const uniqueValsSet = new Set(numsMap.values());

    // test if they are the same
    return uniqueValsSet.size === numsMap.size;
}

console.log( uniqueOccurrences([1, 2, 2, 1, 1, 3]) ); // true
console.log( uniqueOccurrences([1, 2]) ); // false
console.log( uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) ); // true
