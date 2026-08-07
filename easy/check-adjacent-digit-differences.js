/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
function isAdjacentDiffAtMostTwo(s) {
    for (let i = 0; i < s.length - 1; i++) {
        const a = Number(s[i]);
        const b = Number(s[i + 1]);
        const absDiff = Math.abs(a - b);

        // return false if one pair or more violates
        if (absDiff > 2) {
            return false;
        }
    }

    return true;
}

console.log(isAdjacentDiffAtMostTwo("132")); // true
console.log(isAdjacentDiffAtMostTwo("129")); // false
