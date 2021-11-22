"use strict";

/**
 * Definition for isBadVersion()
 * 
 * @param {number} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 const solution = function(isBadVersion) {
    /**
     * @param {number} n Total versions
     * @return {number} The first bad version
     */
    return function(n) {
        
    };
};

/**
 * 
 * @param {number} n
 * @returns {number}
 */
function firstBadVersion(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        const middle = left + (right - left) / 2;

        if (isBadVersion(middle)) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return left;
}