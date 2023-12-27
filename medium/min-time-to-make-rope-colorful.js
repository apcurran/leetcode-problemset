"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
function minCost(colors, neededTime) {
    let left = 0;
    let totalTime = 0;

    for (let right = 1; right < colors.length; right++) {
        // is the current right color equal to the left color
        if (colors[left] === colors[right]) {
            // now add smaller necessary time
            if (neededTime[left] < neededTime[right]) {
                totalTime += neededTime[left];
                // move pointer
                left = right;
            } else {
                totalTime += neededTime[right];
                // do not move left pointer, since its value was not added
            }
        } else {
            // otherwise, move left pointer forwards
            // to match right
            left = right;
        }
    }

    return totalTime;
}

console.log(minCost("abaac", [1,2,3,4,5])); // 3
