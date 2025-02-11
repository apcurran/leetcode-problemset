"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {string} s
//  * @return {string}
//  */
// function clearDigits(s) {
//     let result = s;

//     // as long as there are still digits
//     while (/\d/g.test(result)) {
//         // remove the first digit encountered and the char to the left
//         result = result.replace(/.\d/, "");
//     }

//     return result;
// }

/**
 * solution 2 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function clearDigits(str) {
    let stack = [];

    for (let char of str) {
        if (char >= "0" && char <= "9") {
            // digit found
                // delete previous stack top item
                // skip adding this current char
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}

console.log(clearDigits("abc")); // "abc"
console.log(clearDigits("cb34")); // ""

