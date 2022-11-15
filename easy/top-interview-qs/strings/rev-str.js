"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} str
 * @return {void}
 */
function reverseString(str) {
    let leftPtr = 0;
    let rightPtr = str.length - 1;

    while (leftPtr < rightPtr) {
        // save refs
        const leftChar = str[leftPtr];
        const rightChar = str[rightPtr];
        // swap vals
        str[leftPtr] = rightChar;
        str[rightPtr] = leftChar;
        // move pointers
        leftPtr++;
        rightPtr--;
    }
}

console.log( reverseString(["h","e","l","l","o"]) ); // ["o","l","l","e","h"]
console.log( reverseString(["H","a","n","n","a","h"]) ); // ["h","a","n","n","a","H"]
