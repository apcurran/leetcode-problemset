"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
function findDelayedArrivalTime(arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
}