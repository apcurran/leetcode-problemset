/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number[]}
 */
function getNoZeroIntegers(n) {
    for (let i = 1; i <= n; i++) {
        const a = i;
        const b = n - i;

        if (checkNoZeros(a) && checkNoZeros(b)) {
            return [a, b];
        }
    }

    return [-1, -1];
}

/**
 * @param {number} n
 * @returns {boolean}
 */
function checkNoZeros(n) {
    while (n > 0) {
        const digit = n % 10;

        if (digit === 0) return false;

        n = Math.floor(n / 10);
    }

    return true;
}

console.log(getNoZeroIntegers(11)); // [2, 9]
