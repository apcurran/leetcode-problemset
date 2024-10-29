"use strict";

/**
 * solution 1 -- built-in sort method
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
    return arr.sort(function bitSort(numA, numB) {
        // convert num to binary form and count 1s bits
        const numA1sBitsCount = get1sBitsCount(numA);
        const numB1sBitsCount = get1sBitsCount(numB);
        // sort asc order by 1s bits total
        if (numA1sBitsCount < numB1sBitsCount) {
            return -1;
        } else if (numA1sBitsCount > numB1sBitsCount) {
            return 1;
        } else {
            // if num of 1s bits between two nums is the same, sort asc
            return numA - numB;
        }
    });
}

/**
 * @param {number} num 
 * @returns {number}
 */
function get1sBitsCount(num) {
    const numBinStr = num.toString(2);
    let count = 0;

    for (let bitStr of numBinStr) {
        if (bitStr === "1") count++;
    }

    return count;
}

console.log(sortByBits([0,1,2,3,4,5,6,7,8])); // [0,1,2,4,8,3,5,6,7]
