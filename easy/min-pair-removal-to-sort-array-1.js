/**
 * solution 1 -- direct simulation
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function minimumPairRemoval(nums) {
    let counter = 0;

    while (!isNonDecreasingArray(nums)) {
        let minSum = Infinity;
        let minSumStartIndex = -1;

        // adjacent pairs
        for (let i = 0; i < nums.length - 1; i++) {
            // get sums
            const a = nums[i];
            const b = nums[i + 1];
            const sum = a + b;

            if (sum < minSum) {
                // replace old sum and indices with new ones
                minSum = sum;
                minSumStartIndex = i;
            }
        }
        // replace the pair with min of sums (if same value, get leftmost one)
        const newArr = createNewArr(nums, minSum, minSumStartIndex);
        nums = newArr;
        // increment operations counter
        counter++;
    }

    return counter;
}

console.log(minimumPairRemoval([5, 2, 3, 1])); // 2

/**
 * @param {number[]} arr
 * @returns {boolean}
 */
function isNonDecreasingArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {number[]} nums
 * @param {number} sum
 * @param {number} sumStartIndex
 * @param {number} indexB
 * @returns {number[]}
 */
function createNewArr(nums, sum, sumStartIndex) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === sumStartIndex) {
            result.push(sum);
            i++;
        } else {
            result.push(nums[i]);
        }
    }

    return result;
}
