/**
 * solution 1 -- brute force - nested loops
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
function maximumEnergy(energy, k) {
    let maxPossibleTotal = -Infinity;

    for (let i = 0; i < energy.length; i++) {
        let currentSum = 0;

        for (let j = i; j < energy.length; j += k) {
            // add energy[i] and skip forwards k steps
            currentSum += energy[j];
        }

        maxPossibleTotal = Math.max(maxPossibleTotal, currentSum);
    }

    return maxPossibleTotal;
}

console.log(maximumEnergy([5, 2, -10, -5, 1], 3)); // 3
console.log(maximumEnergy([-2, -3, -1], 2)); // -1
