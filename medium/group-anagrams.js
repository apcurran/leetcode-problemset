"use strict";

/**
 * Solution 1
 * Time: O(n^2 log n)
 * Space: O(n)
 * 
 * @param {string[]} strsArr
 * @return {string[][]}
 */
function groupAnagrams(strsArr) {
    // Create a map obj to store key/val pairs
    let strsMap = new Map();
    // Iterate through arr
    for (let str of strsArr) {
        // Sort each str within iteration
        const alphaSortedStr = str
                                .split("")
                                .sort((a, b) => a > b ? 1 : -1)
                                .join("");
        
        if (strsMap.has(alphaSortedStr)) {
            // Check if key exists in map, if so, then store original str in map as a val in an arr
            const strArrValue = strsMap.get(alphaSortedStr);
            const updatedStrArrValue = [...strArrValue, str];
            strsMap.set(alphaSortedStr, updatedStrArrValue);
        } else {
            // Not in map obj
            // Store sorted str as a key in a map obj
            const strArrValue = [str];
            strsMap.set(alphaSortedStr, strArrValue);
        }
    }

    // Iterate through map obj creating an arr with map values
    return [...strsMap.values()];
}

console.log( groupAnagrams(["eat","tea","tan","ate","nat","bat"]) ); // [["bat"],["nat","tan"],["ate","eat","tea"]]
