"use strict";

/**
 * Solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number[][]} img
 * @return {number[][]}
 */
function flipAndInvertImage(img) {
    let resArr = [];

    for (let subArr of img) {
        // Reverse each sub-arr
        subArr.reverse();
        // Flip each num -- 0 -> 1 and 1 -> 0
        const flippedNums = subArr.map((num) => num === 1 ? 0 : 1);
        resArr.push(flippedNums);
    }

    return resArr;
}

console.log( flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]) ); // [[1,0,0],[0,1,0],[1,1,1]]
