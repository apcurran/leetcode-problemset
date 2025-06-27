"use strict";

// /**
//  * solution 1 -- brute-force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} heightsArr
//  * @return {number}
//  */
// function maxArea(heightsArr) {
//     let largestArea = 0;

//     for (let left = 0; left < heightsArr.length; left++) {
//         for (let right = left + 1; right < heightsArr.length; right++) {
//             const width = right - left;
//             const height = Math.min(heightsArr[left], heightsArr[right]);
//             const currentArea = width * height;
//             largestArea = Math.max(largestArea, currentArea);
//         }
//     }

//     return largestArea;
// }

/**
 * solution 2 -- two-pointer
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} heightsArr
 * @return {number}
 */
function maxArea(heightsArr) {
    let leftPointer = 0;
    let rightPointer = heightsArr.length - 1;
    let maxArea = 0;

    while (leftPointer < rightPointer) {
        const leftHeight = heightsArr[leftPointer];
        const rightHeight = heightsArr[rightPointer];
        const height = Math.min(leftHeight, rightHeight);
        const width = rightPointer - leftPointer;
        const currentArea = width * height;
        maxArea = Math.max(maxArea, currentArea);

        // move pointer on smaller value
        if (leftHeight < rightHeight) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxArea;
}

console.log( maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) ); // 49
