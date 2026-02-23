/**
 * solution 1
 * x = range amount from left to right
 * time: O(x * n)
 * space: O(n)
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function countPrimeSetBits(left, right) {
    const PRIME_SET_BITS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let counter = 0;

    for (let i = left; i <= right; i++) {
        const binaryStr = i.toString(2);
        const setBitsCount = getSetBitsCount(binaryStr);

        if (PRIME_SET_BITS.includes(setBitsCount)) {
            counter++;
        }
    }

    return counter;
}

console.log(countPrimeSetBits(6, 10)); // 4

/**
 * @param {string} binStr
 * @returns {number}
 */
function getSetBitsCount(binStr) {
    let setBitsCounter = 0;

    for (let bitStr of binStr) {
        if (bitStr === "1") setBitsCounter++;
    }

    return setBitsCounter;
}
