"use strict";

/**
 * solution 1
 * time: O(n * log n) -- due to sorting first
 * space: O(1)
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
    // sort by highest box type units -> Desc order
    // Sort is correct
    boxTypes.sort((boxTuple1, boxTuple2) => {
        const box1UnitsPerBox = boxTuple1[1];
        const box2UnitsPerBox = boxTuple2[1];

        return box2UnitsPerBox - box1UnitsPerBox;
    });

    let maxUnits = 0;
    // take the most you can from the largest units per box first
    for (let boxTuple of boxTypes) {
        const [numOfBoxes, numOfUnitsPerBox] = boxTuple;

        if (truckSize <= 0) break;

        if (truckSize > numOfBoxes) {
            const localTotal = numOfBoxes * numOfUnitsPerBox;
            maxUnits += localTotal;
            // decr truckSize by numOfBoxes
            truckSize -= numOfBoxes;

            continue;
        }

        const localTotal = truckSize * numOfUnitsPerBox;
        maxUnits += localTotal;
        // decr truckSize
        truckSize -= numOfBoxes;
    }

    return maxUnits;
}

console.log( maximumUnits([[1,3],[2,2],[3,1]], 4) ); // 8
console.log( maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10) ); // 91
