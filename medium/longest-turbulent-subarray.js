"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr
 * @return {number}
 */
function maxTurbulenceSize(arr) {
    let left = 0;
    let right = 1;
    let result = 1;
    let previousSign = "";

    while (right < arr.length) {
        if (arr[right - 1] > arr[right] && previousSign !== ">") {
            // isTurbulent
            const currentSubarrayLength = right - left + 1;
            result = Math.max(result, currentSubarrayLength);
            right++;
            previousSign = ">";
        } else if (arr[right - 1] < arr[right] && previousSign !== "<") {
            // isTurbulent
            const currentSubarrayLength = right - left + 1;
            result = Math.max(result, currentSubarrayLength);
            right++;
            previousSign = "<";
        } else {
            // condition => either consecutive signs the same or equals sign
            // logic => skip equals signs
            const updatedRightPointer = arr[right] === arr[right - 1] ? right + 1 : right;
            right = updatedRightPointer;
            left = right - 1;
            previousSign = "";
        }
    }

    return result;
}

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])); // 5
