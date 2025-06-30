"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
function numberOfEmployeesWhoMetTarget(hours, target) {
    let goodEmployeesCount = 0;

    for (let hour of hours) {
        if (hour >= target) goodEmployeesCount++;
    }

    return goodEmployeesCount;
}

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)); // 3
