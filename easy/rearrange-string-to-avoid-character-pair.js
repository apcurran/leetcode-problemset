/**
 * solution 1 -- sort
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
function rearrangeString(s, x, y) {
    return s
        .split("")
        .sort(function avoidCharacterPair(a, b) {
            if (a === y) {
                return -1;
            } else {
                return 1;
            }
        })
        .join("");
}

console.log(rearrangeString("aabc", "a", "c")); // "caab"
