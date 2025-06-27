"use strict";

// /**
//  * solution 1
//  * time: O(n * m)
//  * space: O(1)
//  * 
//  * @param {string[]} strs
//  * @return {number}
//  */
// function maximumValue(strs) {
//     const allStrDigits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
//     let maxVal = -Infinity;

//     strsLoop: for (let str of strs) {
//         // check if string has any character that is not in str digits Set,
//         for (let char of str) {
//             if (!allStrDigits.has(char)) {
//                 // if so, get the length of the string
//                 maxVal = Math.max(maxVal, str.length);

//                 continue strsLoop;
//             }
//         }

//         // otherwise, get the numberic val of the string
//         const numericValue = Number(str);
//         // reset maxVal to Max(maxVal, currentString)
//         maxVal = Math.max(maxVal, numericValue);
//     }

//     return maxVal;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} strs
 * @return {number}
 */
function maximumValue(strs) {
    let maxVal = -Infinity;

    for (let str of strs) {
        const strConvertedToNumber = Number(str);
        const isConvertedNumberInvalid = Number.isNaN(strConvertedToNumber);

        if (isConvertedNumberInvalid) {
            maxVal = Math.max(maxVal, str.length);
        } else {
            maxVal = Math.max(maxVal, strConvertedToNumber);
        }
    }

    return maxVal;
}

console.log( maximumValue(["alic3", "bob", "3", "4", "00000"]) ); // 5
console.log( maximumValue(["1", "01", "001", "0001"]) ); // 1
