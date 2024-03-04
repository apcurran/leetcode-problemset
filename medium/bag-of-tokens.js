"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n * log n) -- sort
 * space: O(n) -- sort
 * 
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
function bagOfTokensScore(tokens, power) {
    let result = 0;
    let score = 0;
    tokens.sort(function sortAsc(a, b) {
        return a - b;
    });

    let left = 0;
    let right = tokens.length - 1;

    while (left <= right) {
        const leftValue = tokens[left];
        const rightValue = tokens[right];

        if (power >= leftValue) {
            power -= leftValue;
            left++;
            score++;
            // possible update to result
            result = Math.max(result, score);
        } else if (score > 0) {
            power += rightValue;
            right--;
            score--;
        } else {
            break;
        }
    }

    return result;
}

console.log(bagOfTokensScore([200,100], 150)); // 1
console.log(bagOfTokensScore([100,200,300,400], 200)); // 2
