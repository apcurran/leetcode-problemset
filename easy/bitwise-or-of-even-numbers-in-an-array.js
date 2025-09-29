/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
// oxlint-disable-next-line no-unused-vars
// oxlint-disable-next-line no-unused-vars
function evenNumberBitwiseORs(nums) {
    let result = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            result |= num;
        }
    }
    return result;
}

console.log(evenNumberBitwiseORs([1, 2, 3, 4, 5, 6])); // 6
console.log(evenNumberBitwiseORs([7, 9, 11])); // 0
console.log(evenNumberBitwiseORs([1, 8, 16])); // 24
