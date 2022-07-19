"use strict";

/**
 * solution 1
 * time: O(n^2) -- due to array.shift() calls inside of for loop
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function sortEvenOdd(nums) {
    let oddIndicesArr = [];
    let evenIndicesArr = [];
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (i % 2 === 0) {
            evenIndicesArr.push(num);
        } else {
            oddIndicesArr.push(num);
        }
    }

    // sort decr
    oddIndicesArr.sort((num1, num2) => num2 - num1);
    // sort incr
    evenIndicesArr.sort((num1, num2) => num1 - num2);

    for (let i = 0; i < nums.length; i++) {
        if (i % 2) {
            const oddVal = oddIndicesArr.shift();
            resArr.push(oddVal);
        } else {
            const evenVal = evenIndicesArr.shift();
            resArr.push(evenVal);
        }
    }

    return resArr;
}

console.log( sortEvenOdd([4, 1, 2, 3]) ); // [2, 3, 4, 1]
