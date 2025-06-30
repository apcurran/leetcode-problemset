"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} actualNums
 * @return {number[]}
 */
function findErrorNums(actualNums) {
    let numsMap = new Map();

    for (let i = 1; i <= actualNums.length; i++) {
        numsMap.set(i, 1);
    }

    for (let num of actualNums) {
        const previousNumCount = numsMap.get(num);
        numsMap.set(num, previousNumCount - 1);
    }

    let duplicateNum = 0;
    let missingNum = 0;

    for (let [num, numCount] of numsMap) {
        if (numCount === -1) {
            duplicateNum = num;
        }

        if (numCount === 1) {
            missingNum = num;
        }
    }

    return [duplicateNum, missingNum];
}

console.log(findErrorNums([1, 2, 2, 4])); // [2, 3]
