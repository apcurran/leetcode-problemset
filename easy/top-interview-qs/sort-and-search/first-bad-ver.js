/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
    /**
     * FUNC HERE...
     * solution 1 -- bin search
     * time: O(log n)
     * space: O(1)
     *
     * @param {number} n Total versions
     * @return {number} The first bad version
     */
    return function (n) {
        let left = 1; // first version
        let right = n; // last version

        while (left < right) {
            // calc mid
            const mid = left + Math.floor((right - left) / 2);
            const isMidBad = isBadVersion(mid);

            // check
            if (isMidBad) {
                // check left half
                // curr and all versions after mid are bad
                right = mid;
            } else {
                // check right half
                // all versions to left are good
                left = mid + 1;
            }
        }

        // return either left or right since they both point to the same version
        return left;
    };
}
