const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let count = 0
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
            const isTopNotZero = matrix
                .filter((_, index) => index < i)
                .every(arr => arr[j] !== 0)

            if (isTopNotZero) {
                count += matrix[i][j]
            }
        }
    }
    return count
}

module.exports = {
    getMatrixElementsSum
};
