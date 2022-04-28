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
    // create a map
    let numsMap = new Map();
    // iterate list
    for (let num of arr) {
        // record num and occurrences in map
        if (!numsMap.has(num)) {
            numsMap.set(num, 1);
        } else {
            const prevVal = numsMap.get(num);
            numsMap.set(num, prevVal + 1);
        }
    }

    // generate a unique Set from occurrences list
    const uniqueValsSet = new Set(numsMap.values());

    // test if they are the same and return the bool val
    return uniqueValsSet.size === numsMap.size;
}

console.log( uniqueOccurrences([1,2,2,1,1,3]) ); // true
console.log( uniqueOccurrences([1,2]) ); // false
console.log( uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) ); // true
