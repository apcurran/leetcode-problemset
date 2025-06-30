"use strict";

/**
 * solution 1
 * time: O(n * log n) -- due to sorting arr
 * space: O(n)
 *
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
    let diffsArr = [];

    for (let [costA, costB] of costs) {
        const costsDiff = costB - costA;

        diffsArr.push([costsDiff, costA, costB]);
    }

    diffsArr.sort((arr1, arr2) => arr1[0] - arr2[0]);

    let res = 0;

    for (let i = 0; i < diffsArr.length; i++) {
        const halfOfArrLen = Math.floor(diffsArr.length / 2);

        if (i < halfOfArrLen) {
            // get costB for first half of arr
            res += diffsArr[i][2];
        } else {
            // get costA for last half of arr
            res += diffsArr[i][1];
        }
    }

    return res;
}

console.log(
    twoCitySchedCost([
        [10, 20],
        [30, 200],
        [400, 50],
        [30, 20],
    ]),
); // 110
