const Similarity = require('../interface/Similarity')


module.exports = class Cosine extends Similarity {
    constructor() {
        super()
    }
    compareTwoStrings(thanos, rival) {

        // clear white space characters & to low
        [thanos, rival] = super.initParams(thanos, rival)

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
        // console.log(dotproduct, mThanos, mRival)
        mThanos = Math.sqrt(mThanos)
        mRival = Math.sqrt(mRival)
        return (1.0 * dotproduct) / (mThanos * mRival)

    }

    findBestmThanostch(thanos, avengers) {
        try {
            super.checkParamType(thanos, avengers)


        } catch (error) {
            console.log(error)
        }
    }

    // string vectorization
    static stringVectorization(strArr, common) {
        return common.map(v => strArr.includes(v) ? 1 : 0)
    }

    a() {
        console.log('aaaaaaaaaa')
    }
}