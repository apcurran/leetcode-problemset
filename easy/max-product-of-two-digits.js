/**
 * solution 1
 * time: O(n^2)
 * space: O(n) -- string conversion of n
 *
 * @param {number} n
 * @return {number}
 */
function maxProduct(n) {
    const strN = String(n);
    let largestProduct = -Infinity;

    for (let i = 0; i < strN.length; i++) {
        const currentDigit = Number(strN[i]);

        for (let j = i + 1; j < strN.length; j++) {
            const nextDigit = Number(strN[j]);
            const currentProduct = currentDigit * nextDigit;
            largestProduct = Math.max(largestProduct, currentProduct);
        }
    }

    return largestProduct;
}

console.log(maxProduct(31)); // 3
console.log(maxProduct(22)); // 4
console.log(maxProduct(124)); // 8
