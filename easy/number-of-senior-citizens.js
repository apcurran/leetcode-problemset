"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} details
 * @return {number}
 */
function countSeniors(details) {
    const SENIOR_AGE = 60;
    let seniorsCount = 0;

    for (let person of details) {
        const personAge = Number(person.slice(11, 13));

        if (personAge > SENIOR_AGE) {
            seniorsCount++;
        }
    }

    return seniorsCount;
}

console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]));
// 2
