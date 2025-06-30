"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} batteryPercentages
//  * @return {number}
//  */
// function countTestedDevices(batteryPercentages) {
//     let testedDevicesCount = 0;

//     for (let i = 0; i < batteryPercentages.length; i++) {
//         const batteryPercentage = batteryPercentages[i];

//         if (batteryPercentage > 0) {
//             testedDevicesCount++;

//             for (let j = i + 1; j < batteryPercentages.length; j++) {
//                 // decrease batt percentage of all devices, to the right of current, by 1
//                 // batt percentage never goes below 0
//                 batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
//             }
//         }
//     }

//     return testedDevicesCount;
// }

/**
 * solution 2 -- optimized
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} batteryPercentages
 * @return {number}
 */
function countTestedDevices(batteryPercentages) {
    let testedDevicesCount = 0;

    for (let batteryPercentage of batteryPercentages) {
        if (batteryPercentage > testedDevicesCount) {
            testedDevicesCount++;
        }
    }

    return testedDevicesCount;
}

console.log(countTestedDevices([1, 1, 2, 1, 3])); // 3
console.log(countTestedDevices([0, 1, 2])); // 2
