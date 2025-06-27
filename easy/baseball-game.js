"use strict";

/**
 * An integer x - Record a new score of x.
 * "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
 * "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
 * "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
 * 
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string[]} opsArr
 * @return {number}
 */
function calPoints(opsArr) {
    let numArr = [];

    for (let op of opsArr) {
        if (op === "+") {
            const sumOfPrevs = addOp(numArr);
            numArr.push(sumOfPrevs);
        } else if (op === "D") {
            const doubledNum = doubleOp(numArr);
            numArr.push(doubledNum);
        } else if (op === "C") {
            removeOp(numArr);
        } else {
            // Address integer x
            const num = +op;
            numArr.push(num);
        }
    }

    return numArr.reduce((total, curr) => total + curr, 0);
}

/**
 * @param {number[]} numArr
 * @returns {number}
 */
function addOp(numArr) {
    const lastScore = +numArr[numArr.length - 1];
    const secondToLastScore = +numArr[numArr.length - 2];

    return lastScore + secondToLastScore;
}

/**
 * @param {number[]} numArr
 * @returns {number}
 */
function doubleOp(numArr) {
    const lastScore = +numArr[numArr.length - 1];

    return lastScore * 2;
}

/**
 * @param {number[]} numArr
 * @returns {void}
 */
function removeOp(numArr) {
    numArr.pop();
}

console.log( calPoints(["5", "2", "C", "D", "+"]) ); // 30
console.log( calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]) ); // 27
