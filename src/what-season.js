const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
    const year = ['winter', 'winter',
        'spring', 'spring', 'spring',
        'summer', 'summer', 'summer',
        'autumn', 'autumn', 'autumn',
        'winter']

    if (!date) {
        return 'Unable to determine the time of year!'
    }

    if (!(date instanceof Date) || Object.keys(date).length !== 0) {
        throw Error('Invalid date!')
    }

    return year[date.getMonth()]
}

module.exports = {
    getSeason
};
