"use strict";

/**
 * solution 1
 * time: O(n * (k * log k))
 * space: O(n * k)
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let anagramsMap = new Map();

    for (let str of strs) {
        // key for map val
        const sortedStr = str.split("").toSorted().join("");
        // map val
        const anagramGroup = anagramsMap.get(sortedStr) || [];
        // add curr anagram to str anagram list
        anagramGroup.push(str);
        // set new val
        anagramsMap.set(sortedStr, anagramGroup);
    }

    return [...anagramsMap.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
