/**
 * solution 1 -- direct simulation
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function resultArray(nums) {
    let nums1 = [nums[0]];
    let nums2 = [nums[1]];

    for (let i = 2; i < nums.length; i++) {
        if (nums1.at(-1) > nums2.at(-1)) {
            nums1.push(nums[i]);
        } else {
            nums2.push(nums[i]);
        }
    }

    return [...nums1, ...nums2];
}

console.log(resultArray([5, 4, 3, 8])); // [5, 3, 4, 8]
