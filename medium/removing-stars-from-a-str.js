"use strict";

// /**
//  * solution 1 -- recursion (stack overflow on large inputs)
//  * time: O(n^2)
//  * space: O(n^2)
//  * 
//  * @param {string} str
//  * @return {string}
//  */
// function removeStars(str) {
//     const starIndex = str.indexOf("*");

//     // base case
//     if (starIndex === -1) {
//         return str;
//     }

//     // cut parts up to, but not including the letter to the left of star, then
//     // ADD this substring to the characters to the right of string
//     const updatedText = str.slice(0, starIndex - 1) + str.slice(starIndex + 1);

//     // recusive case
//     return removeStars(updatedText);
// }

/**
 * solution 2
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function removeStars(str) {
    let updatedText = str;

    while (true) {
        const starIndex = updatedText.indexOf("*");

        if (starIndex === -1) break;

        updatedText = updatedText.slice(0, starIndex - 1) + updatedText.slice(starIndex + 1);
    }

    return updatedText;
}

console.log( removeStars("leet**cod*e") ); // "lecoe"
console.log( removeStars("erase*****") ); // ""
