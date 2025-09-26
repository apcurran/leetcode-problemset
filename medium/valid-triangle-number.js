// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(n^3)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function triangleNumber(nums) {
//     let counter = 0;

//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 // triangle inequality theorem:
//                 // the sum of the lengths of any two sides of a triangle must be greater than the length of the third side
//                 if (
//                     nums[i] + nums[j] > nums[k] &&
//                     nums[i] + nums[k] > nums[j] &&
//                     nums[j] + nums[k] > nums[i]
//                 ) {
//                     counter++;
//                 }
//             }
//         }
//     }

//     return counter;
// }

/**
 * solution 2 -- binary search
 * time: O(n^2 * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
    let counter = 0;
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });

    for (let i = 0; i < nums.length - 2; i++) {
        let k = i + 2;

        for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
            k = binarySearch(nums, k, nums.length - 1, nums[i] + nums[j]);
            counter += k - j - 1;
        }
    }

    return counter;
}

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @param {number} x
 * @returns {number}
 */
function binarySearch(nums, l, r, x) {
    while (l <= r && r < nums.length) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] >= x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return l;
}

console.log(triangleNumber([2, 2, 3, 4])); // 3
console.log(triangleNumber([4, 2, 3, 4])); // 4
