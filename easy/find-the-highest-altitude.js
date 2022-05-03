"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
    let altitudesArr = [0];

    for (let i = 0; i < gain.length; i++) {
        const currGainNum = gain[i];
        const currAltNum = altitudesArr[i];

        altitudesArr.push(currAltNum + currGainNum);
    }

    return Math.max(...altitudesArr);
}

console.log( largestAltitude([-5, 1, 5, 0, -7]) ); // 1
