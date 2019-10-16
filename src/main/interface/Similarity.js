module.exports = class Similarity {
    constructor() {}
    /**
     * 
     * @param {String} thanos 灭霸，主字符串
     * @param {String} rival  敌人，需要比较的字符串
     * @description 比较两个字符串
     */
    similarity(thanos, rival) {
        console.info(111)
    }

    /**
     * 
     * @param {String} thanos  
     * @param {[...String]} avengers  复仇者，字符串数组
     * @description 寻找最佳匹配结果
     */
    sortMatch(thanos, avengers) {
        Similarity.checkThanosType(thanos)
        Similarity.checkAvengersType(avengers)

        return avengers.map((str, index) => {
            return {
                member: str,
                index,
                rating: this.similarity(thanos, str)
            }
        }).sort((a,b) => a.rating-b.rating)
    }

    // distance
    distance(thanos, rival) {
        // 计算 distance
    }

    static checkThanosType(thanos) {
        if (typeof thanos !== 'string') throw new Error('first argument should be a string')
    }

    static checkRivalType(rival) {
        if (typeof rival !== 'string') throw new Error('second argument should be a string')
    }

    static checkAvengersType(avengers) {
        if (!Array.isArray(avengers)) throw new Error('second argument should be an array of strings')
        if (avengers.find(s => typeof s !== 'string')) throw new Error('second argument should be an array of strings')
    }

    static initParams(thanos, rival) {
        return [thanos.replace(/\s+/g, '').toLowerCase(), rival.replace(/\s+/g, '').toLowerCase()]
    }
}