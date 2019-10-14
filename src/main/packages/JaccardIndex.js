const Similarity = require('../interface/Similarity')


module.exports = class JaccardIndex extends Similarity {
    constructor() {
        super()
    }
    compareTwoStrings(thanos, rival) {

        // clear white space characters & to low
        [thanos, rival] = super.initParams(thanos, rival)

        let [length1, length2] = [thanos.length, rival.length]
        if (!thanos.length && !rival.length) return 1
        if (thanos === rival) return 1

        // split and Set
        let union = new Set(thanos.split('').concat(rival.split('')))
        let intersection = new Set(thanos.split('').filter(v => (new Set(rival)).has(v)))

        return (1.0 * intersection.size) / union.size
    }

    findBestMatch(thanos, avengers) {
        try {
            super.checkParamType(thanos, avengers)


        } catch (error) {
            console.log(error)
        }
    }
}
