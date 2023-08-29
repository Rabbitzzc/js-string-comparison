import Similarity from '../interface/Similarity'

export default class Cosine extends Similarity {
  public similarity(pThanos: string, pRival: string) {
    Similarity.checkThanosType(pThanos)
    Similarity.checkRivalType(pRival)

    // clear white space characters & to low
    const [thanos, rival] = Similarity.initParams(pThanos, pRival)

    if (!thanos.length && !rival.length) return 1
    if (!thanos.length || !rival.length) return 0
    if (thanos === rival) return 1

    // string vectorization
    let common = Array.from(new Set(thanos.split('').concat(rival.split(''))))

    let vectorThanos = this.stringVectorization(thanos.split(''), common)
    let vectorRival = this.stringVectorization(rival.split(''), common)
    let [dotproduct, mThanos, mRival] = [0, 0, 0]

    for (let i = 0; i < vectorThanos.length; ++i) {
      dotproduct += vectorThanos[i] * vectorRival[i]
      mThanos += vectorThanos[i] * vectorThanos[i]
      mRival += vectorRival[i] * vectorRival[i]
    }
    mThanos = Math.sqrt(mThanos)
    mRival = Math.sqrt(mRival)
    return Number(dotproduct) / (mThanos * mRival)
  }

  public distance(thanos: string, rival: string) {
    return 1.0 - this.similarity(thanos, rival)
  }

  // string vectorization
  private stringVectorization(strArr: string | any[], common: any[]) {
    return common.map((v: any) => (strArr.includes(v) ? 1 : 0))
  }
}
