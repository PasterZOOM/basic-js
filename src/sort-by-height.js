const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const res = {}
    arr.forEach((el, index) => {
        if (el === -1) {
            res[index] = el
        }
    })
    arr.filter(el => el !== -1)
        .sort((a, b) => a > b ? 1 : -1)
        .forEach((el, index) => {
            const add = (i) => {
                res[i] ? add(i + 1) : res[i] = el
            }
            add(index)
        })
    return Object.values(res)
}

module.exports = {
    sortByHeight
};
