"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(A, B) {
    let results = new Array(A.length);

    for (let i = 0; i < A.length; i++) {
        // from 0 to i, count how many nums are present in both A & B
        const aNums = A.slice(0, i + 1);
        const bNums = B.slice(0, i + 1);
        let similarNumsCount = 0;

        for (let aValue of aNums) {
            const isNumPresentInB = bNums.includes(aValue);

            if (isNumPresentInB) {
                similarNumsCount++;
            }
        }
        // update results at current index
        results[i] = similarNumsCount;
    }

    return results;
}

console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4])); // [0,2,3,4]
