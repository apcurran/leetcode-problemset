/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} timer
 * @return {"Green"|"Orange"|"Red"|"Invalid"}
 */
function trafficSignal(timer) {
    if (timer > 30 && timer <= 90) {
        return "Red";
    } else if (timer === 30) {
        return "Orange";
    } else if (timer === 0) {
        return "Green";
    } else {
        return "Invalid";
    }
}

console.log(trafficSignal(60)); // "Red"
console.log(trafficSignal(5)); // "Invalid"
