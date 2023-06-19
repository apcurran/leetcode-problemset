"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} gain
//  * @return {number}
//  */
// function largestAltitude(gain) {
//     let altitudesArr = [0];

//     for (let i = 0; i < gain.length; i++) {
//         const currGainNum = gain[i];
//         const currAltNum = altitudesArr[i];

//         altitudesArr.push(currAltNum + currGainNum);
//     }

//     return Math.max(...altitudesArr);
// }

/**
 * solution 2 -- prefix sum -- optimized space complexity
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
    let currentAltitude = 0;
    let highestPoint = 0;

    for (let altitudeGain of gain) {
        currentAltitude += altitudeGain;
        highestPoint = Math.max(highestPoint, currentAltitude);
    }

    return highestPoint;
}

console.log( largestAltitude([-5, 1, 5, 0, -7]) ); // 1
