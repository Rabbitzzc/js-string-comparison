const Similarity = require('../interface/Similarity')

module.exports = class DiceCoefficient extends Similarity {
    constructor() {
        super()
    }
    similarity(thanos, rival) {
        Similarity.checkThanosType(thanos)
        Similarity.checkRivalType(rival)

        // clear white space characters & to low
        thanos = Similarity.initParams(thanos, rival)[0]
        rival = Similarity.initParams(thanos, rival)[1]

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

    distance(thanos, rival) {
        return 1.0 - this.similarity(thanos, rival)
    }
}