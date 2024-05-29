"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} binaryStr
 * @return {number}
 */
function numSteps(binaryStr) {
    let stepsCount = 0;

    // binary str of 1 is equal to 1 in base ten
    while (binaryStr !== "1") {
        const lastDigit = binaryStr[binaryStr.length - 1];

        if (lastDigit === "0") {
            // even num
            const binaryNumStrDividedByTwo = binaryStr.slice(0, -1);
            binaryStr = binaryNumStrDividedByTwo;
        } else {
            const binaryNumStrPlusOne = binaryAddOne(binaryStr);
            binaryStr = binaryNumStrPlusOne;
        }

        // increment counter
        stepsCount++;
    }

    // return counter
    return stepsCount;
}

/**
 * @param {string} str 
 * @returns {string}
 */
function binaryAddOne(str) {
    let i = str.length - 1;
    let strList = str.split("");

    while (i >= 0 && strList[i] === "1") {
        strList[i] = "0";
        i--;
    }

    // went out of bounds
    if (i === -1) {
        strList.unshift("1");
    } else {
        strList[i] = "1";
    }

    return strList.join("");
}

console.log(numSteps("1101")); // 6
console.log(numSteps("10")); // 1
console.log(numSteps("1")); // 0
console.log(numSteps("1111011110000011100000110001011011110010111001010111110001")); // 85
