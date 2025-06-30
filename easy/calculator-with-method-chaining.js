"use strict";

class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.current = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.current += value;

        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.current -= value;

        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.current *= value;

        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }

        this.current /= value;

        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        const updatedCurrent = this.current ** value;
        this.current = updatedCurrent;

        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.current;
    }
}

new Calculator(10).power(5).getResult(); // 10 + 5 - 7 = 8
