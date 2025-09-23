/**
 * solution 1
 * time: O(n + log m)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function gcdOfOddEvenSums(n) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 === 1) {
            // if odd
            oddSum += i;
        } else {
            // if even
            evenSum += i;
        }
    }

    return getGCD(oddSum, evenSum);
}

console.log(gcdOfOddEvenSums(4)); // 4
console.log(gcdOfOddEvenSums(5)); // 5

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return Math.abs(a);
}
