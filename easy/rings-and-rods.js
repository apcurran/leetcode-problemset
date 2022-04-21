"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} rings
 * @return {number}
 */
function countPoints(rings) {
    const splitRingsTuplesArr = rings.match(/.{1,2}/g);
    let rodsMap = new Map();

    for (let ring of splitRingsTuplesArr) {
        const [ringColorLetter, rodNum] = ring;
        
        if (!rodsMap.has(rodNum)) {
            // init Set obj to hold colors
            rodsMap.set(rodNum, new Set());
        }

        rodsMap
            .get(rodNum)
            .add(ringColorLetter);
    }

    let resCount = 0;

    for (let ringColorSet of rodsMap.values()) {
        if (ringColorSet.size === 3) resCount++;
    }

    return resCount;
}

console.log( countPoints("B0B6G0R6R0R6G9") ); // 1
console.log( countPoints("B0R0G0R9R0B0G0") ); // 1
