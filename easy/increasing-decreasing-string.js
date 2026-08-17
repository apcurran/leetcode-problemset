/**
 * solution 1 -- hash map
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
    let charFrequencies = new Map();

    for (let char of s) {
        charFrequencies.set(char, (charFrequencies.get(char) || 0) + 1);
    }

    let sortedChars = [...charFrequencies.keys()].sort();
    let result = [];

    while (result.length < s.length) {
        // steps 1 - 3: increasing order
        for (let currentChar of sortedChars) {
            const currentCharCount = charFrequencies.get(currentChar);

            if (currentCharCount > 0) {
                // add to results
                result.push(currentChar);
                // decrement count
                charFrequencies.set(currentChar, currentCharCount - 1);
            }
        }
        // steps 4 - 6: decreasing order
        for (let i = sortedChars.length - 1; i >= 0; i--) {
            const currentChar = sortedChars[i];
            const currentCharCount = charFrequencies.get(currentChar);

            if (currentCharCount > 0) {
                result.push(currentChar);
                charFrequencies.set(currentChar, currentCharCount - 1);
            }
        }
    }

    return result.join("");
}

console.log(sortString("aaaabbbbcccc")); // "abccbaabccba"
console.log(sortString("rat")); // "art"
