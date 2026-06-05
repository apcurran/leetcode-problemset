/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
function earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration) {
    let result = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        const landFinish = landStartTime[i] + landDuration[i];

        for (let j = 0; j < waterStartTime.length; j++) {
            const waterFinish = waterStartTime[j] + waterDuration[j];

            // seq 1: land ride first, then water ride
            const startWater = Math.max(landFinish, waterStartTime[j]);
            const landWaterSeq = startWater + waterDuration[j];

            // seq 2: water ride first, then land ride
            const startLand = Math.max(waterFinish, landStartTime[i]);
            const waterLandSeq = startLand + landDuration[i];

            result = Math.min(result, landWaterSeq, waterLandSeq);
        }
    }

    return result;
}

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3])); // 9
console.log(earliestFinishTime([5], [3], [1], [10])); // 14
