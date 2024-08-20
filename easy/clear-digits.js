"use strict";

/**
 * solution 1 -- regex
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
    let result = s;

    // as long as there are still digits
    while (/\d/g.test(result)) {
        // remove the first digit encountered and the char to the left
        result = result.replace(/.\d/, "");
    }

    return result;
}

console.log(clearDigits("abc")); // "abc"
console.log(clearDigits("cb34")); // ""

