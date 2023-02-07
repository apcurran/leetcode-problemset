"use strict";

/**
 * solution 1 -- summation formula
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function pivotInteger(n) {
    for (let pivot = 1; pivot <= n; pivot++) {
        const sequenceSumUpToPivot = getSequenceSum(1, pivot);
        const sequenceSumAfterPivot = getSequenceSum(pivot, n);

        if (sequenceSumUpToPivot === sequenceSumAfterPivot) return pivot;
    }

    // if none work
    return -1;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function getSequenceSum(a, b) {
    return ((a + b) * (b - a + 1)) / 2;
}

console.log( pivotInteger(8) ); // 6
