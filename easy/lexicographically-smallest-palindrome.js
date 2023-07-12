"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function makeSmallestPalindrome(str) {
    const middle = Math.floor(str.length / 2);
    let palindromeLettersLeft = [];
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        const leftChar = str[left];
        const rightChar = str[right];

        if (leftChar !== rightChar) {
            // get smallest letter
            const leftCharCode = leftChar.charCodeAt(0);
            const rightCharCode = rightChar.charCodeAt(0);
            const smallerChar = leftCharCode < rightCharCode ? leftChar : rightChar;
            palindromeLettersLeft.push(smallerChar);
        } else {
            palindromeLettersLeft.push(leftChar);
        }

        left++;
        right--;
    }

    const leftHalf = palindromeLettersLeft.join("");
    const middleLetter = str[middle];
    const rightHalf = palindromeLettersLeft.reverse().join("");

    if (str.length % 2 === 0) {
        return leftHalf + rightHalf;
    } else {
        return leftHalf + middleLetter + rightHalf;
    }
}

console.log( makeSmallestPalindrome("egcfe") ); // "efcfe"

