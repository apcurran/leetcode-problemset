"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} mountain
 * @return {number[]}
 */
function findPeaks(mountain) {
    let peaks = [];
    // skip first and last elems
    for (let i = 1; i < mountain.length - 1; i++) {
        // peak is larger than previousNum and nextNum
        const currentNum = mountain[i];
        const previousNum = mountain[i - 1];
        const nextNum = mountain[i + 1];

        if (currentNum > previousNum && currentNum > nextNum) {
            peaks.push(i);
        }
    }

    return peaks;
}

console.log(findPeaks([2, 4, 4])); // []
console.log(findPeaks([1, 4, 3, 8, 5])); // [1,3]
