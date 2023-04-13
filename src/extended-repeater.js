const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    return !options.additionRepeatTimes ? Array(options.repeatTimes)
            .fill(`${str}${options.addition === undefined ? '' : options.addition}`)
            .join(options.separator || '+') :
        [...Array(options.repeatTimes)]
            .map(() => `${str}${Array(options.additionRepeatTimes)
                .fill(String(options.addition))
                .join(options.additionSeparator || '|')}`).join(options.separator || '+')
    // return
    //     .map(() =>
    //     .join(options.additionRepeatTimes ? options.additionSeparator || '||' : options.separator || '+')
}

module.exports = {
    repeater
};
