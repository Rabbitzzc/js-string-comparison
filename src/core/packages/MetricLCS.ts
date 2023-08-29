import Similarity from "../interface/Similarity";

export default class MetricLCS extends Similarity {
  public static similarity(pThanos: string, pRival: string): number {
    // clear white space characters & to low
    const [thanos, rival] = Similarity.initParams(pThanos, pRival);

    if (!thanos.length && !rival.length) return 1;

    return thanos === rival
      ? 1
      : Number(this.lcsLength(thanos, rival)) /
          Math.max(thanos.length, rival.length);
  }

  private static lcsLength(thanos: string, rival: string) {
    // init array elements=0
    let [len1, len2] = [thanos.length, rival.length];
    let dynamicArray = [...Array(len1 + 1)].map(() => Array(len2 + 1).fill(0));

    for (let i = 1; i <= len1; ++i) {
      for (let j = 1; j <= len2; ++j) {
        dynamicArray[i][j] =
          thanos[i - 1] === rival[j - 1]
            ? dynamicArray[i - 1][j - 1] + 1
            : Math.max(dynamicArray[i][j - 1], dynamicArray[i - 1][j]);
      }
    }
    return dynamicArray[len1][len2];
  }

  public distance(pThanos: string, pRival: string) {
    const [thanos, rival] = Similarity.initParams(pThanos, pRival);
    return thanos === rival ? 0 : 1.0 - MetricLCS.similarity(thanos, rival);
  }
}
