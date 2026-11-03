/**
 * solution 1 -- bitwise AND
 * time: O(log a + log b)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateScore(a, b) {
    const s1 = countBits(a);
    const s2 = countBits(b);

    if (s1 >= s2) {
        return s1 * s2;
    } else {
        // Otherwise, the score is s2 / s1 using integer division.
        return Math.floor(s2 / s1);
    }
}

console.log(calculateScore(14, 6)); // 6
console.log(calculateScore(5, 15)); // 2

/**
 * @param {number} n
 * @returns {number}
 */
function countBits(n) {
    let oneBitsCount = 0;

    while (n > 0) {
        // is set bit (1 bit)?
        // use AND bitwise operator to check lowest bit is set or not
        if ((n & 1) === 1) {
            oneBitsCount++;
        }

        n >>= 1; // move over n bit
    }

    return oneBitsCount;
}
