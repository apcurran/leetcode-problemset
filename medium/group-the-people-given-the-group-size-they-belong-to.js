"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople(groupSizes) {
    let results = [];
    let sizeToGroup = new Map();

    for (let i = 0; i < groupSizes.length; i++) {
        const groupSize = groupSizes[i];

        if (!sizeToGroup.has(groupSize)) {
            sizeToGroup.set(groupSize, []);
        }

        const group = sizeToGroup.get(groupSize);
        // add person
        group.push(i);

        if (group.length === groupSize) {
            results.push(group);
            sizeToGroup.delete(groupSize);
        }
    }

    return results;
}

console.log(groupThePeople([3,3,3,3,3,1,3])); // [[5], [0,1,2], [3,4,6]]
