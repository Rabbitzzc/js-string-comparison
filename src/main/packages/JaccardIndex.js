const Similarity = require('../interface/Similarity')

module.exports = class JaccardIndex extends Similarity {
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

        // split and Set
        let union = new Set(thanos.split('').concat(rival.split('')))
        let intersection = new Set(thanos.split('').filter(v => (new Set(rival)).has(v)))

        return (1.0 * intersection.size) / union.size
    }

    distance(thanos, rival) {
        return 1.0 - this.similarity(thanos, rival)
    }
}