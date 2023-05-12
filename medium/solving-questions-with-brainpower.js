"use strict";

/**
 * solution 1 -- dynamic programming (top down)
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[][]} questions
 * @return {number}
 */
function mostPoints(questions, i = 0, cache = new Map()) {
    if (i >= questions.length) return 0;

    if (cache.has(i)) {
        return cache.get(i);
    }

    const [pointsEarned, questionsToSkip] = questions[i];
    const path1 = mostPoints(questions, i + 1, cache); // skip current question
    const path2 = pointsEarned + mostPoints(questions, i + 1 + questionsToSkip, cache); // solve current question and take score
    const mostPossiblePoints = Math.max(path1, path2);
    cache.set(i, mostPossiblePoints);

    return mostPossiblePoints;
}

console.log( mostPoints([[3,2],[4,3],[4,4],[2,5]]) ); // 5
