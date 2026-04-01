/**
 * solution 1 -- regex
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function trimTrailingVowels(s) {
    const vowelRegex = /[aeiou]$/;

    // while trailing vowel...
    while (vowelRegex.test(s)) {
        const updatedS = s.slice(0, s.length - 1);
        s = updatedS;
    }

    return s;
}

console.log(trimTrailingVowels("idea")); // "id"
console.log(trimTrailingVowels("day")); // "day"
console.log(trimTrailingVowels("aeiou")); // ""
