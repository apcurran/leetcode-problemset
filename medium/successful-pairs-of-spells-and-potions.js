"use strict";

// /**
//  * solution 1 -- correct, but TLE
//  * n = spells length
//  * m = potions length
//  * time: O(n * m)
//  * space: O(n)
//  *
//  * @param {number[]} spells
//  * @param {number[]} potions
//  * @param {number} success
//  * @return {number[]}
//  */
// function successfulPairs(spells, potions, success) {
//     let successfulPairs = [];

//     for (let i = 0; i < spells.length; i++) {
//         const currentSpell = spells[i];
//         let successfulLocalPairsCount = 0;

//         for (let j = 0; j < potions.length; j++) {
//             const currentPotion = potions[j];
//             const spellPotionProduct = currentSpell * currentPotion;

//             if (spellPotionProduct >= success) successfulLocalPairsCount++;
//         }

//         successfulPairs.push(successfulLocalPairsCount);
//     }

//     return successfulPairs;
// }

// /**
//  * solution 2 -- slight optimization (passes, but slow)
//  * n = spells length
//  * m = potions length
//  * time: O((n * m) + (m * log m))
//  * space: O(n)
//  *
//  * @param {number[]} spells
//  * @param {number[]} potions
//  * @param {number} success
//  * @return {number[]}
//  */
// function successfulPairs(spells, potions, success) {
//     potions.sort((a, b) => a - b);

//     let successfulPairs = [];

//     spellsLoop: for (let i = 0; i < spells.length; i++) {
//         const currentSpell = spells[i];

//         for (let j = 0; j < potions.length; j++) {
//             const currentPotion = potions[j];
//             const product = currentSpell * currentPotion;

//             if (product >= success) {
//                 // calc diff and skip iteration of subsequent potions
//                 const diff = potions.length - j;
//                 successfulPairs.push(diff);

//                 continue spellsLoop;
//             }
//         }

//         // fallback
//         successfulPairs.push(0);
//     }

//     return successfulPairs;
// }

/**
 * solution 3 -- bin search (should be fast enough, but TLE on my submission)
 * n = spells length
 * m = potions length
 * time: O((n * log m) + (m * log m))
 * space: O(n)
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs(spells, potions, success) {
    potions.sort((a, b) => a - b);
    let results = [];

    for (let spell of spells) {
        // bin search algo
        let left = 0;
        let right = potions.length - 1;
        let index = potions.length; // furthest left potion that works

        while (left <= right) {
            const middle = left + Math.floor(right - left / 2);

            if (spell * potions[middle] >= success) {
                right = middle - 1;
                index = middle;
            } else {
                left = middle + 1;
            }
        }

        const diff = potions.length - index;
        results.push(diff);
    }

    return results;
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // [4,0,3]
