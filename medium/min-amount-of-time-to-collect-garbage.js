"use strict";

/**
 * solution 1 -- simulation
 * n = garbagePickups length
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} garbagePickups
 * @param {number[]} travelTimes
 * @return {number} minutes of total time for all trucks
 */
function garbageCollection(garbagePickups, travelTimes) {
    let maxMetalTime = 0;
    let maxPaperTime = 0;
    let maxGlassTime = 0;

    let metalPickupsCount = 0;
    let paperPickupsCount = 0;
    let glassPickupsCount = 0;
    travelTimes.push(0);
    let time = 0;

    for (let i = 0; i < garbagePickups.length; i++) {
        const currentGarbage = garbagePickups[i];

        for (let char of currentGarbage) {
            if (char === "M") {
                metalPickupsCount++;
                maxMetalTime = time;
            } else if (char === "P") {
                paperPickupsCount++;
                maxPaperTime = time;
            } else {
                glassPickupsCount++;
                maxGlassTime = time;
            }
        }

        time += travelTimes[i];
    }

    return (
        maxMetalTime +
        maxPaperTime +
        maxGlassTime +
        metalPickupsCount +
        paperPickupsCount +
        glassPickupsCount
    );
}

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3])); // 21 (minutes)
