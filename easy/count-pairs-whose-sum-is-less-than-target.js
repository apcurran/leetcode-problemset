/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countPairs(nums, target) {
    let sumsLessThanTargetCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            const currentSum = num1 + num2;

            // check if num1 and num2 sum is less than target
            if (currentSum < target) {
                sumsLessThanTargetCount++;
            }
        }
    }

    return sumsLessThanTargetCount;
}

console.log(countPairs([-1,1,2,3,1], 2)); // 3
