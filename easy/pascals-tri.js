"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    // init arr with 1 as first row in tri
    let resArr = [[1]];

    for (let i = 1; i < numRows; i++) {
        let newRow = [1]; // add one to beginning

        for (let j = 1; j < i; j++) {
            const firstNum = resArr[i - 1][j - 1];
            const secondNum = resArr[i - 1][j];
            const sum = firstNum + secondNum;
            newRow.push(sum);
        }

        newRow.push(1); // add one to end
        resArr.push(newRow);
    }

    return resArr;
}

console.log( generate(5) );
// [
//     [1],
//     [1,1],
//     [1,2,1],
//     [1,3,3,1],
//     [1,4,6,4,1]
// ]
