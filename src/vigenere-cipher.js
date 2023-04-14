const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect
        this.alphabet = alphabet
        this.coderTable = {}

        alphabet.forEach(letter => this.coderTable[letter.charCodeAt(0)] = {})

        Object.keys(this.coderTable).forEach((rowKey, rowIndex) => {
            const row = {}
            alphabet.forEach((letter, index, array) => {
                const columnKey = index - rowIndex
                columnKey >= 0 ? row[columnKey + 65] = letter : row[columnKey + 26 + 65] = array[index]
            })
            this.coderTable[rowKey] = row
        })
    }

    getValidKeyAndMessage(message, key) {
        let letterOfKey = 0
        const lowMessage = message.toUpperCase()
        const lowKey = []
        for (let i = 0; i < message.length; i += 1) {
            if (this.alphabet.includes(message[i].toUpperCase())) {
                lowKey.push(key[letterOfKey].toUpperCase())
                key[letterOfKey + 1] ? letterOfKey += 1 : letterOfKey = 0
            } else {
                lowKey.push(message[i].toUpperCase())
            }
        }
        return {lowMessage, lowKey}
    }

    getResult(res) {
        return this.isDirect ? res.join('') : res.reverse().join('')
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw Error('Incorrect arguments!')
        }

        const {lowMessage, lowKey} = this.getValidKeyAndMessage(message, key)

        const res = []

        for (let i = 0; i < message.length; i += 1) {
            this.alphabet.includes(lowMessage[i])
                ? res.push(this.coderTable[lowKey[i].charCodeAt(0)][lowMessage[i].charCodeAt(0)])
                : res.push(lowMessage[i])

        }

        return this.getResult(res)
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw Error('Incorrect arguments!')
        }

        const {lowMessage, lowKey} = this.getValidKeyAndMessage(message, key)

        const res = []

        for (let i = 0; i < message.length; i += 1) {
            this.alphabet.includes(lowMessage[i])
                ? Object.entries(this.coderTable[lowKey[i].charCodeAt(0)])
                    .forEach(([letterKey, letterValue]) => {
                        if (letterValue === lowMessage[i]) {
                            res.push(String.fromCharCode(+letterKey))
                        }
                    })
                : res.push(lowMessage[i])

        }

        return this.getResult(res)
    }
}

module.exports = {
    VigenereCipheringMachine
};
