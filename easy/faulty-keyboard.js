"use strict";


// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {string}
//  */
// function finalString(str) {
//     let result = "";

//     for (let char of str) {
//         if (char === "i") {
//             // reverse current string
//             const reversedStr = reverseString(result);
//             result = reversedStr;
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }

// /**
//  * @param {string} str 
//  * @returns {string}
//  */
// function reverseString(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

/**
 * solution 2 -- simplified
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function finalString(str) {
    let result = [];

    for (let char of str) {
        if (char === "i") {
            // reverse current string
            result = result.reverse();
        } else {
            result.push(char);
        }
    }

    return result.join("");
}

console.log(finalString("string")); // "rtsng"
console.log(finalString("poiinter")); // "ponter"
