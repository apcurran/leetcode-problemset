/**
 * solution 1 -- string methods
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function mirrorDistance(n) {
    const nReversed = Number(String(n).split("").reverse().join(""));

    return Math.abs(n - nReversed);
}

console.log(mirrorDistance(25)); // 27
console.log(mirrorDistance(10)); // 9
