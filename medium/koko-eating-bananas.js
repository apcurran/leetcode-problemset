"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(max(n) * n)
//  * space: O(1)
//  * 
//  * @param {number[]} piles
//  * @param {number} hoursLeft
//  * @return {number} k bananas per pile
//  */
// function minEatingSpeed(piles, hoursLeft) {
//     const maxPile = getMaxElementInList(piles);
//     // from 1 to max(piles)
//     outerLoop: for (let k = 1; k <= maxPile; k++) {
//         let totalHoursToEatAllPiles = 0;
//         // check piles in inner loop
//         for (let pile of piles) {
//             const hoursToEatCurrentPile = Math.ceil(pile / k);
//             totalHoursToEatAllPiles += hoursToEatCurrentPile;

//             if (totalHoursToEatAllPiles > hoursLeft) {
//                 continue outerLoop;
//             }
//         }

//         return k;
//     }
// }

// /**
//  * @param {number[]} arr 
//  * @returns {number}
//  */
// function getMaxElementInList(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         max = Math.max(max, arr[i]);
//     }

//     return max;
// }

/**
 * solution 2 -- binary search
 * time: O(log(max(n)) * n)
 * space: O(1)
 * 
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = getMax(piles);
    let result = right; // init to known possible answer

    while (left <= right) {
        // mid point
        const bananasPerHourRate = Math.floor((left + right) / 2);
        let hours = 0;

        for (let pile of piles) {
            // hours required to eat this curr pile of bananas
            const numOfHours = Math.ceil(pile / bananasPerHourRate);
            hours += numOfHours;
        }

        if (hours <= h) {
            // set res
            result = Math.min(result, bananasPerHourRate);
            // look for an even smaller k (if possible) -> search left portion
            right = bananasPerHourRate - 1;
        } else {
            // search right portion
            // need larger rate to allow us to eat all bananas within h hours
            left = bananasPerHourRate + 1;
        }
    }

    return result;
}

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    return max;
}

console.log( minEatingSpeed([3,6,7,11], 8) ); // 4
