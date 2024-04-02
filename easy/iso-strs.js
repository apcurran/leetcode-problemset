"use strict";

// /**
//  * solution 1 -- map cache
//  * time: O(n * m)
//  * space: O(n * m)
//  * 
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// function isIsomorphic(s, t) {
//     // if str lens do not match -> return false
//     if (s.length !== t.length) return false;

//     // iterate and cache letters/indices of s chars
//     let sCache = new Map();
//     let tCache = new Map();

//     for (let i = 0; i < s.length; i++) {
//         const sChar = s[i]; 
//         const tChar = t[i];

//         // add s and t chars/indices to maps
//         const sCharIndicesArr = sCache.get(sChar) || [];
//         sCharIndicesArr.push(i);
//         sCache.set(sChar, sCharIndicesArr);

//         const tCharIndicesArr = tCache.get(tChar) || [];
//         tCharIndicesArr.push(i);
//         tCache.set(tChar, tCharIndicesArr);
//     }

//     const sIndicesArr = [...sCache.values()];
//     const tIndicesArr = [...tCache.values()];

//     if (sIndicesArr.length !== tIndicesArr.length) return false;

//     // iterate s cache and check letter indices to be the SAME as t char indices
//     for (let i = 0; i < sIndicesArr.length; i++) {
//         const sIndices = sIndicesArr[i];
//         const tIndices = tIndicesArr[i];
//         // check same arr indices
//         for (let j = 0; j < sIndices.length; j++) {
//             const sInnerArrIndex = sIndices[j];
//             const tInnerArrIndex = tIndices[j];

//             // otherwise return false if they do not match
//             if (sInnerArrIndex !== tInnerArrIndex) return false;
//         }
//     }

//     return true;
// }

/**
 * solution 2 -- map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    // if str lens do not match -> return false
    if (s.length !== t.length) return false;

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        // chars in s -> t have to map in both directions (t -> s)
        // otherwise, they are not isomorphic strings
        if (sMap.has(sChar) && sMap.get(sChar) !== tChar ||
            tMap.has(tChar) && tMap.get(tChar) !== sChar) {
            return false;
        }

        // create mapping between s and t characters
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
    }

    return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
