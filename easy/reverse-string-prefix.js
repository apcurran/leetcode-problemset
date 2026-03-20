/**
 * solution 1 -- string methods
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reversePrefix(s, k) {
    const reversedChunk = s.slice(0, k).split("").reverse("").join("");
    const remainingChunk = s.slice(k);

    return reversedChunk + remainingChunk;
}

console.log(reversePrefix("abcd", 2)); // "bacd"
