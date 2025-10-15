/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n) -- hashmap
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function sumDivisibleByK(nums, k) {
    let numFrequencies = new Map();

    for (let num of nums) {
        const numFrequencyPrevious = numFrequencies.get(num) || 0;
        numFrequencies.set(num, numFrequencyPrevious + 1);
    }

    let sum = 0;

    for (let num of nums) {
        const numFreq = numFrequencies.get(num);

        // check if current num frequency is divisible by k
        if (numFreq % k === 0) {
            sum += num;
        }
    }

    return sum;
}

console.log(sumDivisibleByK([1, 2, 2, 3, 3, 3, 3, 4], 2)); // 16
console.log(sumDivisibleByK([1, 2, 3, 4, 5], 2)); // 0
console.log(sumDivisibleByK([4, 4, 4, 1, 2, 3], 3)); // 12
