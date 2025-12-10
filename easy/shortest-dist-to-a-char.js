"use strict";

// /**
//  * solution 1
//  * time: O(n * m)
//  * space: O(n + m)
//  *
//  * @param {string} str
//  * @param {string} char
//  * @return {number[]}
//  */
// function shortestToChar(str, char) {
//     let charPositionsInStr = [];
//     let shortestDistancesToChar = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) charPositionsInStr.push(i);
//     }

//     for (let i = 0; i < str.length; i++) {
//         let minDistanceToChar = Infinity;

//         for (let j = 0; j < charPositionsInStr.length; j++) {
//             const currentCharPosition = charPositionsInStr[j];
//             const positionsDifference = Math.abs(i - currentCharPosition);
//             minDistanceToChar = Math.min(minDistanceToChar, positionsDifference);
//         }

//         shortestDistancesToChar.push(minDistanceToChar);
//     }

//     return shortestDistancesToChar;
// }

/**
 * solution 2 -- two-pass technique
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @param {string} targetChar
 * @return {number[]}
 */
function shortestToChar(str, targetChar) {
    let shortestDistancesToChar = [];
    let previousPosition = Infinity;

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i];

        if (currentLetter === targetChar) previousPosition = i;

        const positionsDifference = Math.abs(i - previousPosition);
        shortestDistancesToChar[i] = positionsDifference;
    }

    for (let i = str.length - 1; i >= 0; i--) {
        const currentLetter = str[i];
        const positionsDifference = Math.abs(i - previousPosition);

        if (currentLetter === targetChar) previousPosition = i;

        const smallestPositionDistance = Math.min(shortestDistancesToChar[i], positionsDifference);
        shortestDistancesToChar[i] = smallestPositionDistance;
    }

    return shortestDistancesToChar;
}

console.log(shortestToChar("loveleetcode", "e")); // [3,2,1,0,1,0,0,1,2,2,1,0]
