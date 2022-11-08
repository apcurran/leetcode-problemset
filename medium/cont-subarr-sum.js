/**
 * solution 1 -- map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
    let remainders = new Map([
        [0, -1] // remainder -> end index
    ]);
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        total += val;

        const localRemainder = total % k;

        if (!remainders.has(localRemainder)) {
            remainders.set(localRemainder, i);

            continue;
        }

        if (i - remainders.get(localRemainder) > 1) {
            // solution
            return true;
        }
    }

    return false;
}

console.log( checkSubarraySum([23,2,4,6,7], 6) ); // true (2, 4)
console.log( checkSubarraySum([23,2,6,4,7], 13) ); // false
