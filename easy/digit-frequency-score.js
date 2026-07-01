/**
 * solution 1 -- hash map
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function digitFrequencyScore(n) {
    const nStr = String(n);
    let digitsFrequencies = new Map();

    for (let digitStr of nStr) {
        const digit = Number(digitStr);
        const previousCount = digitsFrequencies.get(digit) || 0;
        digitsFrequencies.set(Number(digit), previousCount + 1);
    }

    let sum = 0;

    for (let [digit, digitCount] of digitsFrequencies) {
        const digitProduct = digit * digitCount;
        sum += digitProduct;
    }

    return sum;
}

console.log(digitFrequencyScore(122)); // 5
console.log(digitFrequencyScore(101)); // 2
