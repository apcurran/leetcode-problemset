"use strict";

// /**
//  * solution 1 -- slow, but correct Set solution
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {number}
//  */
// function lengthOfLongestSubstring(str) {
//     let seenChars = new Set();
//     let longestNonRepeatingSubstringLength = 0;

//     outerLoop: for (let i = 0; i < str.length; i++) {

//         for (let j = i; j < str.length; j++) {
//             const char = str[j];

//             if (seenChars.has(char)) {
//                 // record current longest length
//                 longestNonRepeatingSubstringLength = Math.max(longestNonRepeatingSubstringLength, seenChars.size);
//                 seenChars.clear();

//                 continue outerLoop;
//             } else {
//                 seenChars.add(char);
//             }
//         }
//     }

//     longestNonRepeatingSubstringLength = Math.max(longestNonRepeatingSubstringLength, seenChars.size);

//     return longestNonRepeatingSubstringLength;
// }

// /**
//  * solution 2
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {number}
//  */
// function lengthOfLongestSubstring(str) {
//     if (str.length === 0) return 0;

//     let globalLargestCharCount = 0;
//     let leftPointer = 0;
//     let rightPointer = 0;
//     let charSet = new Set();

//     while (rightPointer < str.length) {
//         const currRightChar = str[rightPointer];
//         const currLeftChar = str[leftPointer];

//         if (!charSet.has(currRightChar)) {
//             charSet.add(currRightChar);
//             rightPointer++;
//         } else {
//             charSet.delete(currLeftChar);
//             leftPointer++;
//         }

//         globalLargestCharCount = Math.max(globalLargestCharCount, rightPointer - leftPointer);
//     }

//     return globalLargestCharCount;
// }

/**
 * solution 3 -- sliding window variation
 * time: O(n) 
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
    let seenChars = new Set();
    let leftPointer = 0;
    let maxSubstrLength = 0;
    
    for (let rightPointer = 0; rightPointer < str.length; rightPointer++) {
        // duplicate char
        while (seenChars.has(str[rightPointer])) {
            // remove duplicates
            seenChars.delete(str[leftPointer]);
            leftPointer++;
        }

        seenChars.add(str[rightPointer]);
        maxSubstrLength = Math.max(maxSubstrLength, seenChars.size);
    }

    return maxSubstrLength;
}

console.log( lengthOfLongestSubstring("abcabcbb") ); // 3
console.log( lengthOfLongestSubstring("bbbbb") ); // 1
console.log( lengthOfLongestSubstring("pwwkew") ); // 3
