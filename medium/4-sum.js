/**
 * solution 1 -- brute force, TLE
 * n = nums length
 * m = combos length
 * time: O(n^4)
 * space: O(n + m) -- due to sorting and hashset
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    nums.sort(function compareAsc(a, b) {
        return a - b;
    });
    let seen = new Set();
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    const a = nums[i];
                    const b = nums[j];
                    const c = nums[k];
                    const d = nums[l];
                    const sum = a + b + c + d;

                    if (sum !== target) {
                        continue; // skip rest
                    }

                    // check for uniqueness
                    const numsGroup = [nums[i], nums[j], nums[k], nums[l]];
                    const key = numsGroup.join(",");

                    if (!seen.has(key)) {
                        seen.add(key);
                        results.push(numsGroup);
                    }
                }
            }
        }
    }

    return results;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]
