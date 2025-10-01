/**
 * solution 1 -- bit manipulation
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
    while (b !== 0) {
        const carryDigit = (a & b) << 1;
        a ^= b;
        b = carryDigit;
    }

    return a;
}

console.log(getSum(1, 2)); // 3
console.log(getSum(2, 3)); // 5
