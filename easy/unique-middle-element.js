/**
 * solution 1 -- hash map
 * time: O(n)
 * space: O(n) - due to Map
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function isMiddleElementUnique(nums) {
    let numsCounts = new Map();

    for (let num of nums) {
        const previousNumCount = numsCounts.get(num) || 0;
        numsCounts.set(num, previousNumCount + 1);
    }

    const middleElement = nums[Math.floor(nums.length / 2)];
    const middleElementCount = numsCounts.get(middleElement);

    return middleElementCount === 1;
}

console.log(isMiddleElementUnique([1, 2, 3])); // true
console.log(isMiddleElementUnique([1, 2, 2])); // false
