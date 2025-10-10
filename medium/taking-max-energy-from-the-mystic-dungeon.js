/**
 * solution 1 -- reverse traversal
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
function maximumEnergy(energy, k) {
    const n = energy.length;
    let maxPossibleTotal = -Infinity;

    for (let i = n - k; i < n; i++) {
        let currentSum = 0;

        for (let j = i; j >= 0; j -= k) {
            currentSum += energy[j];
            maxPossibleTotal = Math.max(maxPossibleTotal, currentSum);
        }
    }

    return maxPossibleTotal;
}

console.log(maximumEnergy([5, 2, -10, -5, 1], 3)); // 3
console.log(maximumEnergy([-2, -3, -1], 2)); // -1
