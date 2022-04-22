"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
    let resSum = 0;
    // iterate arr
    for (let i = 0; i < arr.length; i++) {
        // create temp arr
        let subArr = [];

        // iterate arr again inside
        for (let j = i; j < arr.length; j++) {
            // add elem to temp arr
            const currNum = arr[j];

            subArr.push(currNum);

            if (subArr.length % 2 !== 0) {
                // odd
                // add to resAnswerSum var
                const subArrSum = subArr.reduce((sum, currNum) => sum + currNum, 0);
                resSum += subArrSum;
            }
        }
    }

    return resSum;
}

console.log( sumOddLengthSubarrays([1, 4, 2, 5, 3]) ); // 58
