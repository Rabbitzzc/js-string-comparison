import Similarity from '../interface/Similarity'

export default class JaccardIndex extends Similarity {
  public similarity(pThanos: string, pRival: string): number {
    Similarity.checkThanosType(pThanos)
    Similarity.checkRivalType(pRival)

    const [thanos, rival] = Similarity.initParams(pThanos, pRival)

    if ((!thanos.length && !rival.length) || thanos === rival) return 1

    // split and Set
    let union = new Set(thanos.split('').concat(rival.split('')))
    let intersection = new Set(
      thanos.split('').filter((v) => new Set(rival).has(v)),
    )

    return Number(intersection.size) / union.size
  }

  public distance(thanos: string, rival: string): number {
    return 1.0 - this.similarity(thanos, rival)
  }
}
