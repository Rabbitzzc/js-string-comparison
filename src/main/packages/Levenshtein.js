const Similarity = require('../interface/Similarity')

module.exports = class Levenshtein extends Similarity {
    constructor() {
        super()
    }
    similarity(thanos, rival) {
        Similarity.checkThanosType(thanos)
        Similarity.checkRivalType(rival)

        thanos = Similarity.initParams(thanos, rival)[0]
        rival = Similarity.initParams(thanos, rival)[1]

        if (!thanos.length && !rival.length) return 1

        return 1 - (1.0 * this.distance(thanos, rival)) / Math.max(thanos.length, rival.length)
    }

    // edit distance
    distance(thanos, rival) {
        Similarity.checkThanosType(thanos)
        Similarity.checkRivalType(rival)

        thanos = Similarity.initParams(thanos, rival)[0]
        rival = Similarity.initParams(thanos, rival)[1]

        if (thanos === rival) return 0

        let [len1, len2] = [thanos.length, rival.length]
        if (!len1) return len2
        if (!len2) return len1

        // init array
        let dynamicArray = [...Array(len1 + 1)].map(() => Array(len2 + 1).fill(0))

        for (let i = 0; i <= len1; ++i) {
            dynamicArray[i][0] = i
        }
        for (let j = 0; j <= len2; ++j) {
            dynamicArray[0][j] = j
        }
        let temp
        for (let i = 1; i <= len1; ++i) {
            for (let j = 1; j <= len2; ++j) {
                temp = thanos[i - 1] === rival[j - 1] ? 0 : 1

                // delete  insert  replace
                dynamicArray[i][j] = Math.min(dynamicArray[i - 1][j] + 1, dynamicArray[i][j - 1] + 1, dynamicArray[i - 1][j - 1] + temp)
            }
        }

        return dynamicArray[len1][len2]
    }
}

// let ls = new Levenshtein()

// let a = 'healed'
// let b = ['mailed', 'edward', 'sealed', 'theatre']
// console.log(ls.sortMatch(a, b))
