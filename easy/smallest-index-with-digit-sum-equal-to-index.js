/**
 * solution 1
 * n = nums length
 * m = num length
 * time: O(n * m)
 * space: O(m)
 *
 * @param {number[]} nums
 * @return {number}
 */
function smallestIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const strNum = String(num);
        let sum = 0;

        for (let strDigit of strNum) {
            sum += Number(strDigit);
        }

        if (sum === i) {
            return i;
        }
    }

    return -1;
}

console.log(smallestIndex([1, 3, 2])); // 2
console.log(smallestIndex([1, 10, 11])); // 1
