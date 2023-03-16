"use strict";

// /**
//  * solution 1 -- TLE
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[][]} rectangles
//  * @return {number}
//  */
// function interchangeableRectangles(rectangles) {
//     let interchangeableRectanglesCount = 0;

//     for (let i = 0; i < rectangles.length; i++) {
//         // each tuple represents [rectWidth, rectHeight]
//         const [firstRectangleWidth, firstRectangleHeight] = rectangles[i];
//         // get width / height ratio of current rect
//         const firstRectangleRatio = firstRectangleWidth / firstRectangleHeight;
//         // iterate rects array again
//         for (let j = i + 1; j < rectangles.length; j++) {
//             const [secondRectangleWidth, secondRectangleHeight] = rectangles[j];
//             const secondRectangleRatio = secondRectangleWidth / secondRectangleHeight;

//             // compare with next rect's width / height ratio
//             if (firstRectangleRatio === secondRectangleRatio) {
//                 interchangeableRectanglesCount++;
//             }
//         }
//     }

//     return interchangeableRectanglesCount;
// }

/**
 * solution 2 -- Map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[][]} rectangles
 * @return {number}
 */
function interchangeableRectangles(rectangles) {
    let interchangeableRectanglesCount = 0;
    let rectangleRatios = new Map();

    for (let i = 0; i < rectangles.length; i++) {
        const [rectangleWidth, rectangleHeight] = rectangles[i];
        const currentRectangleRatio = rectangleWidth / rectangleHeight;
        const preExistingRatioCount = rectangleRatios.get(currentRectangleRatio) || 0;
        interchangeableRectanglesCount += preExistingRatioCount;
        rectangleRatios.set(currentRectangleRatio, preExistingRatioCount + 1);
    }

    return interchangeableRectanglesCount;
}

console.log( interchangeableRectangles(
    [
        [4,8],
        [3,6],
        [10,20],
        [15,30]
    ]
) ); // 6
