const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const str = String(n)

    return +String(n).split('').reduce((acc, str, index, array) => {
        const temp = array.slice(0, index).join('') + array.slice(index + 1).join('')
        return acc > temp ? acc : temp
    }, str.slice(1))
}

module.exports = {
    deleteDigit
};
