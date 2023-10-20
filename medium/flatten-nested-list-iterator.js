"use strict";

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 */
class NestedIterator {
    /**
     * @param {NestedInteger[]} nestedList
     */
    constructor(nestedList) {
        this.stack = [];
        this.dfs(nestedList);
        this.stack.reverse();
    }
    
    /**
     * @returns {number}
     */
    next() {
        return this.stack.pop();
    }

    /**
     * @returns {boolean}
     */
    hasNext() {
        return this.stack.length > 0;
    }

    /**
     * @param {array} nestedList 
     */
    dfs(nestedList) {
        for (let value of nestedList) {
            if (value.isInteger()) {
                this.stack.push(value.getInteger());
            } else {
                this.dfs(value.getList());
            }
        }
    }
}
