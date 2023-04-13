const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    _links: '',
    getLength() {
        return length
    },
    addLink(value) {
        this._links = this._links ? `${this._links}~~( ${value} )` : `( ${value} )`
        return this
    },
    removeLink(position) {
        if (this._links.split('~~').length <= position
            || position < 1
            || typeof position !== "number"
            || Math.floor(position) !== position) {
            this._links = ''
            throw new Error('You can\'t remove incorrect link!')
        } else {
            this._links = this._links.split('~~').filter((_, index) => index + 1 !== position).join('~~')
            return this
        }

    },
    reverseChain() {
        this._links = this._links.split('~~').reverse().join('~~')
        return this
    },
    finishChain() {
        const res = this._links
        this._links = ''
        return res
    }
};

module.exports = {
    chainMaker
};
