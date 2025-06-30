"use strict";

/**
 * solution 1 -- sort and two-pointers
 * time: O(n * log n)
 * space: O(n) -- array.sort() built-in space
 *
 * @param {number[]} skill
 * @return {number}
 */
function dividePlayers(skill) {
    const groups = skill.length / 2;
    const skillTotal = skill.reduce((sum, current) => sum + current, 0);
    const skillPerGroup = skillTotal / groups;
    skill.sort(function sortAsc(a, b) {
        return a - b;
    });

    let left = 0;
    let right = skill.length - 1;
    let totalChemistry = 0;

    while (left < right) {
        const leftSkill = skill[left];
        const rightSkill = skill[right];
        const currentTeamSkill = leftSkill + rightSkill;

        if (currentTeamSkill !== skillPerGroup) {
            return -1;
        }

        const skillProduct = leftSkill * rightSkill;
        totalChemistry += skillProduct;

        // move pointers
        left++;
        right--;
    }

    return totalChemistry;
}

console.log(dividePlayers([3, 2, 5, 1, 3, 4])); // 22
