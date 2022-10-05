"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} str
 * @return {boolean}
 */
function validPalindrome(str) {
    // two pointers
    let leftPointer = 0;
    let rightPointer = str.length - 1;

    while (leftPointer < rightPointer) {
        // check opposite ends chars
        const leftChar = str[leftPointer];
        const rightChar = str[rightPointer];

        if (leftChar !== rightChar) {
            const skipLeft = str.slice(leftPointer + 1, rightPointer + 1);
            const reversedLeft = revStr(skipLeft);
            // console.log("skip left", skipLeft);
            
            const skipRight = str.slice(leftPointer, rightPointer);
            const reversedRight = revStr(skipRight);
            // console.log("skip right", skipRight);

            return skipLeft === reversedLeft || skipRight === reversedRight;
        }

        leftPointer++;
        rightPointer--;
    }

    return true;
}

function revStr(s) {
    let resStr = "";

    for (let i = s.length - 1; i >= 0; i--) {
        resStr += s[i];
    }

    return resStr;
}

console.log( validPalindrome("abca") ); // true -> "aba" (deleting "c")
console.log( validPalindrome("abc") ); // false
