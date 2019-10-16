const Similarity = require('../interface/Similarity')


module.exports = class Cosine extends Similarity {
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
        if (!thanos.length || !rival.length) return 0
        if (thanos === rival) return 1

        // string vectorization
        let common = Array.from(new Set(thanos.split('').concat(rival.split(''))))

        let vectorThanos = Cosine.stringVectorization(thanos.split(''), common)
        let vectorRival = Cosine.stringVectorization(rival.split(''), common)
        let [dotproduct, mThanos, mRival] = [0, 0, 0]

        for (let i = 0; i < vectorThanos.length; ++i) {
            dotproduct += (vectorThanos[i] * vectorRival[i])
            mThanos += (vectorThanos[i] * vectorThanos[i])
            mRival += (vectorRival[i] * vectorRival[i])
        }
        mThanos = Math.sqrt(mThanos)
        mRival = Math.sqrt(mRival)
        return (1.0 * dotproduct) / (mThanos * mRival)
    }
    
    distance(thanos, rival) {
        return 1.0 - this.similarity(thanos, rival)
    }

    // string vectorization
    static stringVectorization(strArr, common) {
        return common.map(v => strArr.includes(v) ? 1 : 0)
    }
}