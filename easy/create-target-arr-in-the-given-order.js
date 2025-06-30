"use strict";

/**
 * solution 1
 * time: O(n^2) -- due to splice possibly forcing shifting of elems' positions
 * space: O(n)
 *
 * @param {number[]} numsArr
 * @param {number[]} indexArr
 * @return {number[]}
 */
function createTargetArray(numsArr, indexArr) {
    let targetArr = [];

    for (let i = 0; i < numsArr.length; i++) {
        const currNumsVal = numsArr[i];
        const currIndexVal = indexArr[i];

        targetArr.splice(currIndexVal, 0, currNumsVal);
    }

    return targetArr;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
