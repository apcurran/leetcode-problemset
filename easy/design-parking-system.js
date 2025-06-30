"use strict";

// solution 1
// time: O(1)
// space: O(1)
class ParkingSystem {
    /**
     * @param {number} big
     * @param {number} medium
     * @param {number} small
     */
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    /**
     * @param {number} carType
     * @return {boolean}
     */
    addCar(carType) {
        switch (carType) {
            case 1:
                if (this.big > 0) {
                    this.big--;
                    return true;
                } else {
                    return false;
                }
            case 2:
                if (this.medium > 0) {
                    this.medium--;
                    return true;
                } else {
                    return false;
                }
            case 3:
                if (this.small > 0) {
                    this.small--;
                    return true;
                } else {
                    return false;
                }
            default:
                return false;
        }
    }
}

var obj = new ParkingSystem(1, 1, 0);
console.log(obj.addCar(1)); // true
console.log(obj.addCar(2)); // true
console.log(obj.addCar(3)); // false
console.log(obj.addCar(1)); // false
