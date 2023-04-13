const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const res = {}
    for (let i = domains.length - 1; i >= 0; i -= 1) {
        const temp = domains[i].split('.')
        let dns = ''
        for (let j = temp.length - 1; j >= 0; j -= 1) {
            dns = `${dns}.${temp[j]}`
            res[dns] ? res[dns] += 1 : res[dns] = 1
        }
    }
    return res
}

module.exports = {
    getDNSStats
};
