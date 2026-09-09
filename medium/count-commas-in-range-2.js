/**
 * solution 1 -- math
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function countCommas(n) {
    if (n <= 999) {
        return 0;
    }

    let totalCommas = 0n;
    let target = BigInt(n);
    let threshold = 1_000n;

    while (target >= threshold) {
        totalCommas += target - threshold + 1n;
        threshold *= 1_000n; // move to next 1_000 place higher
    }

    return Number(totalCommas);
}

console.log(countCommas(1002)); // 3
