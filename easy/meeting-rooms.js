class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

class Solution {
    /**
     * solution 1 -- sort
     * time: O(n * log n)
     * space: O(n)
     *
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort(function orderByStartTimeAsc(meetingA, meetingB) {
            return meetingA.start - meetingB.start;
        });

        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const previous = intervals[i - 1];

            if (current.start < previous.end) {
                return false;
            }
        }

        return true;
    }
}

const sol = new Solution();
console.log(
    sol.canAttendMeetings([new Interval(0, 30), new Interval(5, 10), new Interval(15, 20)]),
); // false
console.log(sol.canAttendMeetings([new Interval(5, 8), new Interval(9, 15)])); // true
