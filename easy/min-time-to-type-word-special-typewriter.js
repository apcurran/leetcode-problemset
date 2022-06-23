"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * @param {string} word
 * @return {number}
 */
function minTimeToType(word) {
    const ALPHA_END_NUM = 26;
    const ALPHA_HALF_NUM = 13;
    const TIME_TO_TYPE_LETTER = 1;
    let minTotalTime = 0;
    let currLetterPointer = "a";

    for (let letter of word) {
        const diffSeconds = Math.abs(currLetterPointer.charCodeAt(0) - letter.charCodeAt(0));

        if (diffSeconds > ALPHA_HALF_NUM) {
            minTotalTime += ALPHA_END_NUM - diffSeconds + TIME_TO_TYPE_LETTER;
        } else {
            minTotalTime += diffSeconds + TIME_TO_TYPE_LETTER;
        }

        // move curr pointer
        currLetterPointer = letter;
    }

    return minTotalTime;
}

console.log( minTimeToType("abc") ); // 5
console.log( minTimeToType("bza") ); // 7
