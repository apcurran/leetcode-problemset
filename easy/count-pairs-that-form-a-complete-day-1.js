"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} hours
 * @return {number}
 */
function countCompleteDayPairs(hours) {
    let completeDaysCount = 0;

    for (let i = 0; i < hours.length; i++) {
        const firstElem = hours[i];
        
        for (let j = i + 1; j < hours.length; j++) {
            const secondElem = hours[j];
            const hoursSum = firstElem + secondElem;

            if (hoursSum % 24 === 0) {
                completeDaysCount++;
            }
        }
    }

    return completeDaysCount;
}

console.log(countCompleteDayPairs([12, 12, 30, 24, 24])); // 2
console.log(countCompleteDayPairs([72, 48, 24, 3])); // 3
