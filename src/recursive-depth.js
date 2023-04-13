const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

    calculateDepth(arr) {
        return Array.isArray(arr) ? arr.reduce((acc, item) => {
            const next = this.calculateDepth(item)
            return acc > next ? acc : next
        }, 0) + 1 : 0
        // fails recursion test
        // let maxDeep = 0
        // let deep = 0
        // JSON.stringify(arr).split('').filter(el => el === '[' || el === ']')
        //     .forEach(el => {
        //         if (el === '[') {
        //             deep += 1
        //             if (deep > maxDeep) {
        //                 maxDeep = deep
        //             }
        //         } else {
        //             deep -= 1
        //         }
        //     })
        // return maxDeep
    }
}

module.exports = {
    DepthCalculator
};
