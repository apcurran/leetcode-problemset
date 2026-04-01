// /**
//  * solution 1 -- regex
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @return {string}
//  */
// function trimTrailingVowels(s) {
//     const vowelRegex = /[aeiou]$/;

//     // while trailing vowel...
//     while (vowelRegex.test(s)) {
//         const updatedS = s.slice(0, s.length - 1);
//         s = updatedS;
//     }

//     return s;
// }

// /**
//  * solution 2 -- regex (optimized time)
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @return {string}
//  */
// function trimTrailingVowels(s) {
//     const vowelRegex = /[aeiou]+$/;

//     return s.replace(vowelRegex, "");
// }

/**
 * solution 3 -- single pointer
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function trimTrailingVowels(s) {
    const VOWELS = ["a", "e", "i", "o", "u"];
    let pointer = s.length - 1;

    while (pointer >= 0 && VOWELS.includes(s[pointer])) {
        // move pointer
        pointer--;
    }

    return s.slice(0, pointer + 1);
}

console.log(trimTrailingVowels("idea")); // "id"
console.log(trimTrailingVowels("day")); // "day"
console.log(trimTrailingVowels("aeiou")); // ""
