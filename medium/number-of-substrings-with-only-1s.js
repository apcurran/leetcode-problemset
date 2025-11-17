/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function numSub(s) {
    const MOD = 10 ** 9 + 7;
    let result = 0;
    let consecutiveOnes = 0;

    for (let char of s) {
        if (char === "1") {
            consecutiveOnes++;
            result = (result + consecutiveOnes) % MOD;
        } else {
            consecutiveOnes = 0;
        }
    }

    return result;
}

console.log(numSub("0110111")); // 9
