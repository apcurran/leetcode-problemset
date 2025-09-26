/**
 * solution 1 -- brute force (TLE)
 * time: O(n^3)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
    let counter = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                // triangle inequality theorem:
                // the sum of the lengths of any two sides of a triangle must be greater than the length of the third side
                if (
                    nums[i] + nums[j] > nums[k] &&
                    nums[i] + nums[k] > nums[j] &&
                    nums[j] + nums[k] > nums[i]
                ) {
                    counter++;
                }
            }
        }
    }

    return counter;
}

console.log(triangleNumber([2, 2, 3, 4])); // 3
console.log(triangleNumber([4, 2, 3, 4])); // 4
