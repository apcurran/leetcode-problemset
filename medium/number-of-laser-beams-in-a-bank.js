"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {string[]} bank
 * @return {number}
 */
function numberOfBeams(bank) {
    let previous = 0;
    let result = 0;

    for (let row of bank) {
        let devicesCounter = 0;

        for (let char of row) {
            if (char === "1") devicesCounter++;
        }

        if (devicesCounter > 0) {
            result += previous * devicesCounter;
            previous = devicesCounter;
        }
    }

    return result;
}

console.log(numberOfBeams(["011001", "000000", "010100", "001000"])); // 8
