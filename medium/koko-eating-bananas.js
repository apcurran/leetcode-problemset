"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let res = right; // init to known possible answer

    while (left <= right) {
        // mid point
        const k = Math.floor((left + right) / 2);
        let hours = 0;

        for (let pile of piles) {
            // hours required to eat this curr pile of bananas
            const numOfHours = Math.ceil(pile / k);
            hours += numOfHours;
        }

        if (hours <= h) {
            // set res
            res = Math.min(res, k);
            // look for an even smaller k (if possible) -> search left portion
            right = k - 1;
        } else {
            // search right portion
            left = k + 1;
        }
    }

    return res;
}

console.log( minEatingSpeed([3,6,7,11], 8) ); // 4
