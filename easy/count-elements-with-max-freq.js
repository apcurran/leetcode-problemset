/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
function maxFrequencyElements(nums) {
    let numsFrequencies = new Map();

    for (let num of nums) {
        const previousCount = numsFrequencies.get(num) || 0;
        numsFrequencies.set(num, previousCount + 1);
    }

    const maxFequency = Math.max(...numsFrequencies.values());
    let sum = 0;
    
    for (let [, numFreq] of numsFrequencies) {
        if (numFreq === maxFequency) {
            sum += numFreq;
        }
    }
    
    return sum;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // 4
