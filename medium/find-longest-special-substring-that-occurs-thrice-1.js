"use strict";

/**
 * @param {string} str
 * @return {number}
 */
function maximumLength(str) {
    let substringsCount = new Map();

    for (let start = 0; start < str.length; start++) {
        let currString = "";

        for (let end = start; end < str.length; end++) {
            if (currString.length === 0 ||
                currString[currString.length - 1] == str[end]
            ) {
                currString += str[end];
                const previousCurrStrCount = substringsCount.get(currString) || 0;
                substringsCount.set(currString, previousCurrStrCount + 1);
            } else {
                break;
            }
        }
    }

    let result = 0;

    for (let [keyStr, strCount] of substringsCount) {
        if (strCount >= 3 && str.length > result) {
            // set a new longest substring
            result = str.length;
        }
    }

    if (result === 0) {
        return -1;
    } else {
        return result;
    }
}
