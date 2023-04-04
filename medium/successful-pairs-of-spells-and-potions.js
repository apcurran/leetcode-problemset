"use strict";

/**
 * solution 1 -- correct, but TLE
 * n = spells length
 * m = potions length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs(spells, potions, success) {
    let successfulPairs = [];

    for (let i = 0; i < spells.length; i++) {
        const currentSpell = spells[i];
        let successfulLocalPairsCount = 0;

        for (let j = 0; j < potions.length; j++) {
            const currentPotion = potions[j];
            const spellPotionProduct = currentSpell * currentPotion;

            if (spellPotionProduct >= success) successfulLocalPairsCount++;
        }

        successfulPairs.push(successfulLocalPairsCount);
    }

    return successfulPairs;
}

console.log( successfulPairs([5,1,3], [1,2,3,4,5], 7) ); // [4,0,3]
