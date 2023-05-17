"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode(encoded, first) {
    let results = [first];

    for (let i = 0; i < encoded.length; i++) {
        const currentValue = results[i];
        const nextValue = encoded[i];
        const XORedValue = currentValue ^ nextValue;
        results.push(XORedValue);
    }

    return results;
}

console.log( decode([1,2,3], 1) ); // [1,0,2,1]
