"use strict";

/**
 * solution 1 -- backtracking
 * time: O(n * 2^n)
 * space: O(n^2)
 * 
 * @param {string} str
 * @return {string[][]}
 */
function partition(str) {
    let results = [];
    let currentPath = [];

    /**
     * @param {number} start 
     * @returns {void}
     */
    function backtrack(start) {
        if (start === str.length) {
            // add to results
            results.push([...currentPath]);

            return;
        }

        for (let end = start + 1; end <= str.length; end++) {
            const subStr = str.slice(start, end);

            if (isPalindrome(subStr)) {
                currentPath.push(subStr);
                backtrack(end);
                currentPath.pop();
            }
        }
    }

    backtrack(0);

    return results;
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        const leftChar = str[left];
        const rightChar = str[right];

        if (leftChar !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(partition("aab")); // [["a","a","b"], ["aa","b"]] 
