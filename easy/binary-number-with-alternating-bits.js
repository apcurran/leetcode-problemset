/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
    const binaryN = n.toString(2);

    for (let i = 0; i < binaryN.length - 1; i++) {
        const currentBit = binaryN[i];
        const nextBit = binaryN[i + 1];

        if (currentBit === nextBit) {
            return false;
        }
    }

    return true;
}

console.log(hasAlternatingBits(5)); // true
console.log(hasAlternatingBits(7)); // false
console.log(hasAlternatingBits(11)); // false
