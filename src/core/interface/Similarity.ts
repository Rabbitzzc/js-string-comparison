import SimilarityResult from "./SimilarityResult";

export default abstract class Similarity {
  /**
   * @description 比较两个字符串
   */
  protected static similarity: (thanos: string, rival: string) => number;

  // distance
  protected static distance: (thanos: string, rival: string) => number;

  /**
   * @description 寻找最佳匹配结果
   */
  public static sortMatch(thanos: string, avengers: string[]): SimilarityResult[] {
    return avengers
      .map((str, index) => {
        return {
          member: str,
          index,
          rating: Similarity.similarity(thanos, str),
        };
      })
      .sort((a, b) => a.rating - b.rating);
  }

  
  
  protected static initParams(thanos: string, rival: string): string[] {
    return [
      thanos.replace(/\s+/g, "").toLowerCase(),
      rival.replace(/\s+/g, "").toLowerCase(),
    ];
  }

  
}
