/**
 * solution 1 - brute force
 * time: O(n^3)
 * space: O(n) - str slice
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function shortestBeautifulSubstring(s, k) {
    for (let m = k; m <= s.length; m++) {
        let result = "";

        for (let j = m; j <= s.length; j++) {
            const potentialSubstr = s.slice(j - m, j);
            const isSubstrCandidate = !result || potentialSubstr < result;
            const isSubstrValidOnesAmt = strValidOnesCount(potentialSubstr) === k;

            if (isSubstrCandidate && isSubstrValidOnesAmt) {
                result = potentialSubstr;
            }
        }

        if (result) {
            return result;
        }
    }

    return ""; // default empty str, no b matches
}

console.log(shortestBeautifulSubstring("100011001", 3)); // "11001"
console.log(shortestBeautifulSubstring("1011", 2)); // "11"

/**
 * @param {string} str
 * @returns {number}
 */
function strValidOnesCount(str) {
    let onesCount = 0;

    for (let numStr of str) {
        if (numStr === "1") {
            onesCount++;
        }
    }

    return onesCount;
}
