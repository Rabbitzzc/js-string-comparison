import Similarity from '../interface/Similarity'

// https://www.geeksforgeeks.org/jaro-and-jaro-winkler-similarity/
export default class JaroWinkler extends Similarity {
  public distance(pThanos: string, pRival: string): number {
    Similarity.checkThanosType(pThanos)
    Similarity.checkRivalType(pRival)

    // clear white space characters & to low
    const [thanos, rival] = Similarity.initParams(pThanos, pRival)

    if (!thanos.length && !rival.length) return 1
    if (!thanos.length || !rival.length) return 0
    if (thanos === rival) return 1

    if (thanos === rival) {
      return 1.0
    }
    let len1 = thanos.length
    let len2 = rival.length

    if (len1 === 0 || len2 === 0) {
      return 0.0
    }

    let max_dist = Math.floor(Math.max(len1, len2) / 2) - 1
    let match = 0
    let hash_s1 = new Array(thanos.length).fill(0)
    let hash_s2 = new Array(rival.length).fill(0)

    for (let i = 0; i < len1; i++) {
      for (
        let j = Math.max(0, i - max_dist);
        j < Math.min(len2, i + max_dist + 1);
        j++
      )
        if (thanos[i] === rival[j] && hash_s2[j] === 0) {
          hash_s1[i] = 1
          hash_s2[j] = 1
          match++
          break
        }
    }

    if (match === 0) {
      return 0
    }

    let t = 0
    let point = 0

    for (let i = 0; i < len1; i++) {
      if (hash_s1[i] === 1) {
        while (hash_s2[point] === 0) {
          point++
        }
        if (thanos[i] !== rival[point++]) {
          t++
        }
      }
    }
    t /= 2

    return (match / len1 + match / len2 + (match - t) / match) / 3.0
  }

  public similarity(thanos: string, rival: string): number {
    let jaroDist = this.distance(thanos, rival)

    if (jaroDist > 0.7) {
      let prefix = 0

      for (let i = 0; i < Math.min(thanos.length, rival.length); i++) {
        if (thanos[i] === rival[i]) {
          prefix++
        } else {
          break
        }
      }

      prefix = Math.min(4, prefix)
      jaroDist += 0.1 * prefix * (1 - jaroDist)
    }

    return jaroDist
  }
}
