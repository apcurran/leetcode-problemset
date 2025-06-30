"use strict";

/**
 * Solution 1 -- Two-pointer approach
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {string}
 */
function reverseOnlyLetters(str) {
    const letterRegex = /[a-zA-Z]/;
    let lettersArr = str.split("");
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        const isICharALetter = letterRegex.test(str[i]);
        const isJCharALetter = letterRegex.test(str[j]);

        if (!isICharALetter) {
            // Move i to the right
            i++;
            continue;
        }

        if (!isJCharALetter) {
            // Move j to the left
            j--;
            continue;
        }

        if (isICharALetter && isJCharALetter) {
            swapLetters(lettersArr, i, j);
            // Move i to the right
            i++;
            // Move j to the left
            j--;
        }
    }

    return lettersArr.join("");
}

function swapLetters(strArr, i, j) {
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
}

console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
