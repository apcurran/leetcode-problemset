"use strict";

/**
 * solution 1
 * time: O(n!) -- permutations
 * space: O(n)
 * 
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities(tiles) {
    let count = new Map();

    for (let tile of tiles) {
        const previousLetterCount = count.get(tile) || 0;
        count.set(tile, previousLetterCount + 1);
    }

    /**
     * @returns {number} 
     */
    function backtrack() {
        let result = 0;

        for (let [tileLetter, tileLetterCount] of count) {
            if (tileLetterCount <= 0) {
                continue;
            }

            // otherwise
            // update letter count
            count.set(tileLetter, tileLetterCount - 1);
            result++;
            // do recursive call
            result += backtrack();
            // undo letter count update
            count.set(tileLetter, count.get(tileLetter) + 1);
        }

        return result;
    }

    return backtrack();
}

console.log(numTilePossibilities("AAB")); // 8
console.log(numTilePossibilities("AAABBC")); // 188
