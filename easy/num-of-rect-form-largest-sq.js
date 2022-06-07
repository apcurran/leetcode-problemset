"use strict";

/**
 * solution 1 -- iterative with Math.max() and Math.min() methods
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[][]} rectangles
 * @return {number}
 */
function countGoodRectangles(rectangles) {
    const maxLensArr = rectangles.map((innerArr) => Math.min(...innerArr));
    const maxLenNum = Math.max(...maxLensArr);
    let maxLenAmt = 0;

    for (let num of maxLensArr) {
        if (num === maxLenNum) maxLenAmt++;
    }

    return maxLenAmt;
}

console.log( countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]) ); // [5, 3, 5, 5] -> 3
console.log( countGoodRectangles([[2, 3] ,[3, 7], [4, 3], [3, 7]]) ); // 3
