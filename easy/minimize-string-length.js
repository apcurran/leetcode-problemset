"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function minimizedStringLength(str) {
    return new Set(str).size;
}

console.log( minimizedStringLength("aaabc") ); // 3
console.log( minimizedStringLength("cbbd") ); // 3
console.log( minimizedStringLength("dddaaa") ); // 2
console.log( minimizedStringLength("ipi") ); // 2
