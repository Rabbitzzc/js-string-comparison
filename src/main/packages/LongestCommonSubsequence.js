const Similarity = require('../interface/Similarity')


module.exports = class LongestCommonSubsequence extends Similarity {
    constructor() {
        super()
    }
    compareTwoStrings(thanos, rival) {

        // clear white space characters & to low
        [thanos, rival] = super.initParams(thanos, rival)

        if (!thanos.length && !rival.length) return 1
        if (thanos === rival) return 1

        // LCS similarity defined as S(A,B)=2⋅|LCS(A,B)| |A|+|B|
        return (2.0 * LongestCommonSubsequence.lcsLength(thanos, rival)) / (thanos.length +  rival.length)
    }

    findBestMatch(thanos, avengers) {
        try {
            super.checkParamType(thanos, avengers)


        } catch (error) {
            console.log(error)
        }
    }

    static lcsLength(thanos, rival) {
        // init array elements=0
        let [len1, len2] = [thanos.length, rival.length]
        let dynamicArray = [...Array(len1 + 1)].map(() => Array(len2 + 1).fill(0))

        for (let i = 1; i <= len1; ++i) {
            for (let j = 1; j <= len2; ++j) {
                // if (thanos[i-1] === rival[j-1]) {
                //     dynamicArray[i][j] = dynamicArray[i-1][j-1] + 1
                // } else {
                //     dynamicArray[i][j] = Math.max(dynamicArray[i][j-1], dynamicArray[i-1][j])
                // }
                dynamicArray[i][j] = thanos[i - 1] === rival[j - 1] ?
                    (dynamicArray[i - 1][j - 1] + 1) :
                    (Math.max(dynamicArray[i][j - 1], dynamicArray[i - 1][j]))
            }
        }
        return dynamicArray[len1][len2]
    }
}

// let [a, b] = ['打南边来了个喇嘛，手里提拉着五斤鳎目', '打北边来了个哑巴，腰里别着个喇叭']
// let [a, b] = ['healed', 'sealed']
// let lcs = new LongestCommonSubsequence()

// console.log(lcs.lcsLength(a, b))
// console.log(lcs.lcsLength(b, a))