/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function countCommas(n) {
    if (n <= 999) {
        return 0;
    }

    // number between 1_000 to 100_000 (1 comma per num)
    const valuesCount = n + 1 - 1_000;

    return valuesCount;
}

console.log(countCommas(1002)); // 3
console.log(countCommas(998)); // 0
