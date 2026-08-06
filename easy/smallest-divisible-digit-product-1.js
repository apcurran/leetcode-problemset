/**
 * solution 1 -- enumeration
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
function smallestNumber(n, t) {
    let nDigitsProduct = digitsProduct(n);

    while (nDigitsProduct % t !== 0) {
        n++;
        nDigitsProduct = digitsProduct(n);
    }

    return n;
}

/**
 * @param {number} num
 * @returns {number}
 */
function digitsProduct(num) {
    let product = 1;

    while (num > 0) {
        // get last digit
        const digit = num % 10;
        product *= digit;
        // move to next place digit
        num = Math.floor(num / 10);
    }

    return product;
}

console.log(smallestNumber(10, 2)); // 10
console.log(smallestNumber(15, 3)); // 16
