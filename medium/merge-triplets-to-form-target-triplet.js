"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
function mergeTriplets(triplets, target) {
    let validTriplet = new Set();

    for (let triplet of triplets) {
        if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) {
            // skip this triplet, since at least one value is greater -- not compatible
            continue;
        }

        for (let i = 0; i < triplet.length; i++) {
            const tripletValue = triplet[i];
            const targetValue = target[i];

            if (tripletValue === targetValue) {
                validTriplet.add(i);
            }
        }
    }

    return validTriplet.size === 3;
}

console.log( mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5]) ); // true
