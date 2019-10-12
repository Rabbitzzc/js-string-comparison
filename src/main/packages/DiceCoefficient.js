// import Similarity from '../interface/Similarity.js'

const Similarity = require('../interface/Similarity')

module.exports = class DiceCoefficient extends Similarity {
    constructor() {
        super()
    }
    compareTwoStrings(thanos, rival) {

        // clear white space characters & to low
        thanos = thanos.replace(/\s+/g, '').toLowerCase()
        rival = rival.replace(/\s+/g, '').toLowerCase()

        let [length1, length2] = [thanos.length, rival.length]

        if (!thanos.length && !rival.length) return 1
        if (thanos === rival) return 1

        if (length1 < 2 || length2 < 2) return 0

        let thanosBigrams = new Map()

        // get the intersecting character, two strings as a group
        for (let i = 0; i < length1 - 1; i++) {
            const bigram = thanos.substr(i, 2)
            const count = thanosBigrams.has(bigram) ? thanosBigrams.get(bigram) + 1 : 1

            thanosBigrams.set(bigram, count)
        }
        let intersectionSize = 0
        for (let i = 0; i < length2 - 1; i++) {
            const bigram = rival.substr(i, 2)
            const count = thanosBigrams.has(bigram) ? thanosBigrams.get(bigram) : 0

            if (count > 0) {
                thanosBigrams.set(bigram, count - 1)
                    ++intersectionSize
            }
        }

        return (2.0 * intersectionSize) / (length1 + length2 - 2)
    }

    findBestMatch(thanos, avengers) {}
}