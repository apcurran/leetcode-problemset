"use strict";

// /**
//  * Solution 1
//  * time: O(n * m * log m)
//  * space: O(n + m)
//  *
//  * @param {string[]} strsArr
//  * @return {string[][]}
//  */
// function groupAnagrams(strsArr) {
//     // Create a map obj to store key/val pairs
//     let strsMap = new Map();
//     // Iterate through arr
//     for (let str of strsArr) {
//         // Sort each str within iteration
//         const alphaSortedStr = str
//                                 .split("")
//                                 .sort()
//                                 .join("");

//         if (strsMap.has(alphaSortedStr)) {
//             // Check if key exists in map, if so, then store original str in map as a val in an arr
//             const strArrValues = strsMap.get(alphaSortedStr);
//             strArrValues.push(str);
//         } else {
//             // Not in map obj
//             // Store sorted str as a key in a map obj
//             const strArrValues = [str];
//             strsMap.set(alphaSortedStr, strArrValues);
//         }
//     }

//     // Iterate through map obj creating an arr with map values
//     return [...strsMap.values()];
// }

/**
 * Solution 1
 * time: O(n * m * log m)
 * space: O(n + m)
 *
 * @param {string[]} strsArr
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let anagramsCache = new Map();
    let results = [];

    for (let str of strs) {
        const sortedStr = [...str].toSorted().join("");
        // default to empty array
        const strAnagrams = anagramsCache.get(sortedStr) || [];
        strAnagrams.push(str);
        // need to call Map.set()
        anagramsCache.set(sortedStr, strAnagrams);
    }

    // iterate Map cache
    // add to results
    for (let [, anagramsGroupList] of anagramsCache) {
        results.push(anagramsGroupList);
    }

    return results;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
