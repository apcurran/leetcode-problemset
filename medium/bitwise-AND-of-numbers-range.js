/**
 * solution 1 -- brute force (AND operator)
 * time: O(n)
 * space: O(1)
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeBitwiseAnd(left, right) {
    let result = left;

    for (let i = left + 1; i <= right; i++) {
        result &= i;
    }

    return result;
}

console.log(rangeBitwiseAnd(5, 7)); // 4
console.log(rangeBitwiseAnd(0, 0)); // 0
console.log(rangeBitwiseAnd(1, 2147483647)); // 0
