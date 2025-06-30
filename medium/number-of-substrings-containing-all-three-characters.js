"use strict";

// /**
//  * solution 1 -- brute force (correct, but TLE)
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {string} s
//  * @return {number}
//  */
// function numberOfSubstrings(s) {
//     let result = 0;

//     for (let i = 0; i < s.length; i++) {
//         let aCount = 0;
//         let bCount = 0;
//         let cCount = 0;

//         for (let j = i; j < s.length; j++) {
//             const currentChar = s[j];

//             if (currentChar === "a") {
//                 aCount++;
//             } else if (currentChar === "b") {
//                 bCount++;
//             } else {
//                 cCount++;
//             }

//             // at least 1 of each "a", "b", and "c"?
//             // add to results counter
//             if (aCount !== 0 && bCount !== 0 && cCount !== 0) {
//                 // optimization -- skip recounting a match we already know will work
//                 // add how ever many new characters occur after current match left in string

//                 // almost passes judgement (53/54 tests pass)
//                 result += s.length - j;

//                 break;
//             }
//         }
//     }

//     return result;
// }

/**
 * solution 2 -- sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
    let left = 0;
    let charCount = {
        a: 0,
        b: 0,
        c: 0,
    };
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        charCount[s[right]]++;

        while (charCount["a"] > 0 && charCount["b"] > 0 && charCount["c"] > 0) {
            result += s.length - right;
            charCount[s[left]]--;
            left++;
        }
    }

    return result;
}

console.log(numberOfSubstrings("abcabc")); // 10
