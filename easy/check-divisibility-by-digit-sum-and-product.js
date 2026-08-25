/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {boolean}
 */
function checkDivisibility(n) {
    const nDigitStrs = String(n).split("");
    const nSum = nDigitStrs.reduce((sum, currDigitStr) => sum + Number(currDigitStr), 0);
    const nProduct = nDigitStrs.reduce(
        (product, currDigitStr) => product * Number(currDigitStr),
        1,
    );

    return n % (nSum + nProduct) === 0;
}

console.log(checkDivisibility(99)); // true
console.log(checkDivisibility(23)); // false
