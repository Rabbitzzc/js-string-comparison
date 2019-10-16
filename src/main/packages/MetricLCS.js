const Similarity = require('../interface/Similarity')

module.exports = class MetricLCS extends Similarity {
    constructor() {
        super()
    }

    similarity(thanos, rival) {
        Similarity.checkThanosType(thanos)
        Similarity.checkRivalType(rival)

        // clear white space characters & to low
        thanos = Similarity.initParams(thanos, rival)[0]
        rival = Similarity.initParams(thanos, rival)[1]

        if (!thanos.length && !rival.length) return 1
        if (thanos === rival) return 1

        return (1.0 * MetricLCS.lcsLength(thanos, rival)) / Math.max(thanos.length, rival.length)
    }

    distance(thanos, rival) {
        Similarity.checkThanosType(thanos)
        Similarity.checkRivalType(rival)

        if (thanos === rival) return 0

        return 1.0 - this.similarity(thanos, rival)
    }

    static lcsLength(thanos, rival) {
        Similarity.checkThanosType(thanos)
        Similarity.checkRivalType(rival)

        thanos = Similarity.initParams(thanos, rival)[0]
        rival = Similarity.initParams(thanos, rival)[1]

        // init array elements=0
        let [len1, len2] = [thanos.length, rival.length]
        let dynamicArray = [...Array(len1 + 1)].map(() => Array(len2 + 1).fill(0))

        for (let i = 1; i <= len1; ++i) {
            for (let j = 1; j <= len2; ++j) {
                dynamicArray[i][j] = thanos[i - 1] === rival[j - 1] ?
                    (dynamicArray[i - 1][j - 1] + 1) :
                    (Math.max(dynamicArray[i][j - 1], dynamicArray[i - 1][j]))
            }
        }
        return dynamicArray[len1][len2]
    }
}