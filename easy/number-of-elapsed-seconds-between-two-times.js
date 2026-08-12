/**
 * solution 1 -- organize on a common value of seconds
 * time: O(1) -- split operation is bounded
 * space: O(1)
 *
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
function secondsBetweenTimes(startTime, endTime) {
    const [startHours, startMinutes, startSeconds] = startTime.split(":");
    const [endHours, endMinutes, endSeconds] = endTime.split(":");
    const startSecondsTotal =
        Number(startHours) * 60 * 60 + Number(startMinutes) * 60 + Number(startSeconds);
    const endSecondsTotal =
        Number(endHours) * 60 * 60 + Number(endMinutes) * 60 + Number(endSeconds);

    return endSecondsTotal - startSecondsTotal;
}

console.log(secondsBetweenTimes("12:34:56", "13:00:00")); // 1504
