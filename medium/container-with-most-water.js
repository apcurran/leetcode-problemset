"use strict";

/**
 * solution 1 -- two-pointer
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} heightsArr
 * @return {number}
 */
function maxArea(heightsArr) {
    let maxArea = 0;
    // start at furthest left pos
    let leftPointer = 0;
    // start at furthest right pos
    let rightPointer = heightsArr.length - 1;

    while (leftPointer < rightPointer) {
        const leftHeight = heightsArr[leftPointer];
        const rightHeight = heightsArr[rightPointer];
        const currArea = (rightPointer - leftPointer) * Math.min(leftHeight, rightHeight);

        maxArea = Math.max(maxArea, currArea);

        if (leftHeight < rightHeight) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxArea;
}

console.log( maxArea([1,8,6,2,5,4,8,3,7]) ); // 49
