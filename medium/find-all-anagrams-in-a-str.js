"use strict";

/**
 * solution 1 -- map cache (correct, but TLE)
 * time: O(s * p)
 * space: O(s * p)
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
    let anagramIndices = [];
    let pMap = new Map();

    for (let char of p) {
        const prevFreq = pMap.get(char) || 0;
        pMap.set(char, prevFreq + 1);
    }

    sLoop: for (let i = 0; i < s.length - p.length + 1; i++) {
        // for each char in s string
        const sSlice = s.slice(i, i + p.length);
        // check if sSlice is an anagram of p str
        let sSliceMap = new Map();

        for (let char of sSlice) {
            const prevFreq = sSliceMap.get(char) || 0;
            sSliceMap.set(char, prevFreq + 1);
        }

        for (let [sChar, sCharFreq] of sSliceMap) {
            // not the same letter
            if (!pMap.has(sChar)) continue sLoop;

            const pCharFreq = pMap.get(sChar);
            // not the same letter frequency counts
            if (sCharFreq !== pCharFreq) continue sLoop;
        }
        // if we make it here, this is an anagram slice
        anagramIndices.push(i);
    }

    return anagramIndices;
}

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
