/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
    let numsMap = new Map();
    let dupsArr = [];

    for (let num of nums) {
        if (!numsMap.has(num)) {
            numsMap.set(num, false);
        } else {
            numsMap.set(num, true);
        }
    }

    for (let [num, isDup] of numsMap) {
        if (isDup) {
            dupsArr.push(num);
        }
    }

    return dupsArr;
}

console.log( findDuplicates([4,3,2,7,8,2,3,1]) ); // [2, 3]
