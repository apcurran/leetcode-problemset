"use strict";

/**
 * solution 1
 * time: O(1) -- sort will always be constant since only 3 variables guaranteed
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {"equilateral"|"isosceles"|"scalene"|"none"}
 */
function triangleType(nums) {
    const [a, b, c] = nums.sort((val1, val2) => val1 - val2);
    const isValidTriangle = a + b > c;

    if (!isValidTriangle) {
        return "none";
    } else if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

console.log(triangleType([3, 3, 3])); // "equilateral"
console.log(triangleType([3, 4, 5])); // "scalene"
console.log(triangleType([2, 3, 6])); // "none"
