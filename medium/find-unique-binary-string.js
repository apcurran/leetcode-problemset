/**
 * solution 1 -- hashset
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string[]} nums
 * @return {string}
 */
function findDifferentBinaryString(nums) {
    let set = new Set();

    for (let num of nums) {
        const binNum = parseInt(num, 2);
        set.add(binNum);
    }

    const n = nums.length;

    for (let i = 0; i <= n; i++) {
        if (set.has(i)) {
            continue;
        }

        let result = i.toString(2);

        return result.padStart(n, "0");
    }

    return ""; // just in case
}

console.log(findDifferentBinaryString(["01", "10"])); // "11"
