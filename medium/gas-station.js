"use strict";

/**
 * solution 1 -- greedy
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
    const gasSum = gas.reduce((sum, curr) => sum + curr, 0);
    const costSum = cost.reduce((sum, curr) => sum + curr, 0);

    if (gasSum < costSum) {
        return -1;
    }

    let total = 0;
    let result = 0;

    for (let i = 0; i < gas.length; i++) {
        const leftOver = gas[i] - cost[i];
        total += leftOver;

        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }

    return result;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
