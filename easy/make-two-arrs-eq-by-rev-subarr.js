"use strict";

/**
 * solution 1 -- map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} targetArr
 * @param {number[]} arr
 * @return {boolean}
 */
function canBeEqual(targetArr, arr) {
    let targetMap = new Map();

    for (let num of targetArr) {
        const prevCount = targetMap.get(num) || 0;
        targetMap.set(num, prevCount + 1);
    }

    let arrMap = new Map();

    for (let num of arr) {
        const prevCount = arrMap.get(num) || 0;
        arrMap.set(num, prevCount + 1);
    }

    // iterate and check
    for (let [targetNum, targetNumCount] of targetMap) {
        if (!arrMap.has(targetNum)) return false;
        
        const arrMapNumCount = arrMap.get(targetNum);

        if (targetNumCount !== arrMapNumCount) return false;
    }

    return true;
}

console.log( canBeEqual([1,2,3,4], [2,4,1,3]) ); // true
console.log( canBeEqual([7], [7]) ); // true
console.log( canBeEqual([3,7,9], [3,7,11]) ); // false
