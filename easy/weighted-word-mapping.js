/**
 * solution 1
 * n = words length
 * m = word length
 * time: O(n * m)
 * time: O(1) -- not including result string
 *
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
function mapWordWeights(words, weights) {
    let result = "";

    for (let word of words) {
        let wordTotal = 0;

        for (let char of word) {
            // convert char to charCode and sub 97 (to map to weights arr)
            const charCode = char.charCodeAt(0);
            const weightIndex = charCode - 97;
            const weight = weights[weightIndex];
            wordTotal += weight;
        }

        const modded = wordTotal % 26;
        const mapped = mapNumberToChar(modded);
        result += mapped;
    }

    return result;
}

console.log(
    mapWordWeights(
        ["abcd", "def", "xyz"],
        [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2],
    ),
); // "rij"

/**
 * @param {number} num
 * @returns {string|null} char
 */
function mapNumberToChar(num) {
    if (num < 0 || num > 26) {
        return null;
    }

    // "a" -> 97 and "z" -> 122,
    // sub 122 and num to reverse order
    return String.fromCharCode(122 - num);
}
