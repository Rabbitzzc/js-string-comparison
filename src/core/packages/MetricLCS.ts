import Similarity from '../interface/Similarity'

export default class MetricLCS extends Similarity {
  public static lcsLength(thanos: string, rival: string) {
    Similarity.checkThanosType(thanos)
    Similarity.checkRivalType(rival)

    // init array elements=0
    let [len1, len2] = [thanos.length, rival.length]
    let dynamicArray = [...Array(len1 + 1)].map(() => Array(len2 + 1).fill(0))

    for (let i = 1; i <= len1; ++i) {
      for (let j = 1; j <= len2; ++j) {
        dynamicArray[i][j] =
          thanos[i - 1] === rival[j - 1]
            ? dynamicArray[i - 1][j - 1] + 1
            : Math.max(dynamicArray[i][j - 1], dynamicArray[i - 1][j])
      }
    }
    return dynamicArray[len1][len2]
  }

  public similarity(pThanos: string, pRival: string): number {
    Similarity.checkThanosType(pThanos)
    Similarity.checkRivalType(pRival)

    // clear white space characters & to low
    const [thanos, rival] = Similarity.initParams(pThanos, pRival)

    if (!thanos.length && !rival.length) return 1

    return thanos === rival
      ? 1
      : Number(MetricLCS.lcsLength(thanos, rival)) /
          Math.max(thanos.length, rival.length)
  }

  public distance(pThanos: string, pRival: string) {
    Similarity.checkThanosType(pThanos)
    Similarity.checkRivalType(pRival)

    const [thanos, rival] = Similarity.initParams(pThanos, pRival)
    return thanos === rival ? 0 : 1.0 - this.similarity(thanos, rival)
  }
}
