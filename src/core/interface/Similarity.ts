export interface SortMatchResultType {
  member: string
  index: number
  rating: number
}

export default abstract class Similarity {
  public static initParams(thanos: string, rival: string) {
    return [
      thanos.replace(/\s+/g, '').toLowerCase(),
      rival.replace(/\s+/g, '').toLowerCase(),
    ]
  }

  protected static checkThanosType(thanos: string) {
    if (typeof thanos !== 'string')
      throw new Error('first argument should be a string')
  }

  protected static checkRivalType(rival: string) {
    if (typeof rival !== 'string')
      throw new Error('second argument should be a string')
  }

  protected static checkAvengersType(avengers: string[]) {
    if (!Array.isArray(avengers))
      throw new Error('second argument should be an array of strings')
    if (avengers.find((s) => typeof s !== 'string'))
      throw new Error('second argument should be an array of strings')
  }

  /**
   * @description 寻找最佳匹配结果
   */
  public sortMatch(thanos: string, avengers: string[]): SortMatchResultType[] {
    Similarity.checkThanosType(thanos)
    Similarity.checkAvengersType(avengers)

    return avengers
      .map((str, index) => {
        return {
          member: str,
          index,
          rating: this.similarity(thanos, str),
        }
      })
      .sort((a, b) => a.rating - b.rating)
  }

  /**
   * @description 比较两个字符串
   */
  public abstract similarity(thanos: string, rival: string): number

  // distance
  public abstract distance(thanos: string, rival: string): number
}
