/**
 * solution 1 -- brute force hash map
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} s
 * @return {number}
 */
function maximumLengthSubstring(s) {
    let maxWindowLength = 0;

    for (let i = 0; i < s.length; i++) {
        let charsCounts = new Map();

        for (let j = i; j < s.length; j++) {
            const char = s[j];
            const previousCharCount = charsCounts.get(char) || 0;

            // If adding this character would make its count 3,
            // stop expanding from this starting point
            if (previousCharCount === 2) {
                break;
            }

            charsCounts.set(char, previousCharCount + 1);
            const currentWindowLength = j - i + 1;
            maxWindowLength = Math.max(maxWindowLength, currentWindowLength);
        }

        charsCounts.clear();
    }

    return maxWindowLength;
}

console.log(maximumLengthSubstring("bcbbbcba")); // 4
console.log(maximumLengthSubstring("acedc")); // 5
