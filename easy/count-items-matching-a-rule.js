"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
    let itemCount = 0;
    let ruleIndex;

    switch (ruleKey) {
        case "type":
            ruleIndex = 0;
            break;
        case "color":
            ruleIndex = 1;
            break;
        case "name":
            ruleIndex = 2;
            break;
    }
    // Iterate through arr calc ruleKey and rulevalue to check
    for (let item of items) {
        const itemVal = item[ruleIndex];

        if (itemVal === ruleValue) {
            // If a match is found, incr the resVal
            itemCount++;
        }
    }
    // Return the resVal for number of matching items based upon the given rule
    return itemCount;
}

console.log( countMatches(
    [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "lenovo"],
        ["phone", "gold", "iphone"],
    ],
    "color",
    "silver",
) ); // 1

console.log( countMatches(
    [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "phone"],
        ["phone", "gold", "iphone"],
    ],
    "type",
    "phone",
) ); // 2
