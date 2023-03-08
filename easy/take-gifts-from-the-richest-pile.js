"use strict";

/**
 * solution 1
 * time: O(k * n)
 * space: O(n)
 * 
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
function pickGifts(gifts, k) {
    for (let i = 0; i < k; i++) {
        const maxGiftsPile = Math.max(...gifts);
        const maxGiftsPileIndex = gifts.indexOf(maxGiftsPile);
        const leftBehindGifts = Math.floor( Math.sqrt(maxGiftsPile) );
        gifts[maxGiftsPileIndex] = leftBehindGifts;
    }

    return gifts.reduce((sum, currentGiftsPile) => sum + currentGiftsPile, 0);
}

console.log( pickGifts([25,64,9,4,100], 4) ); // 29
