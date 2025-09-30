/**
 * solution 1
 * n = hexadecimal str length
 * m = hexatrigesimal str length
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {number} n
 * @return {string}
 */
function concatHex36(n) {
    const hexadecimal = (n ** 2).toString(16);
    const hexatrigesimal = (n ** 3).toString(36);
    const result = hexadecimal + hexatrigesimal;

    return result.toUpperCase();
}

console.log(concatHex36(13)); // "A91P1"
