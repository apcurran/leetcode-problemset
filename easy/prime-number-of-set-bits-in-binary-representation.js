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
    let counter = 0;

    for (let i = left; i <= right; i++) {
        const binaryStr = i.toString(2);
        const setBitsCount = getSetBitsCount(binaryStr);

        if (isPrime(setBitsCount)) {
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

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            // if evenly divisible by current i, not prime
            return false;
        }
    }

    return true;
}
