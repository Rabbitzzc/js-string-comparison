import Similarity from "../interface/Similarity";

export default class Cosine extends Similarity {
  public static similarity(pThanos: string, pRival: string): number {
    // clear white space characters & to low
    const [thanos, rival] = Similarity.initParams(pThanos, pRival);

    if (!thanos.length && !rival.length) return 1;
    if (!thanos.length || !rival.length) return 0;
    if (thanos === rival) return 1;

    let common = Array.from(new Set(thanos.split("").concat(rival.split(""))));

    let vectorThanos = this.stringVectorization(thanos.split(""), common);
    let vectorRival = Cosine.stringVectorization(rival.split(""), common);
    let [dotproduct, mThanos, mRival] = [0, 0, 0];

    for (let i = 0; i < vectorThanos.length; ++i) {
      dotproduct += vectorThanos[i] * vectorRival[i];
      mThanos += vectorThanos[i] * vectorThanos[i];
      mRival += vectorRival[i] * vectorRival[i];
    }
    mThanos = Math.sqrt(mThanos);
    mRival = Math.sqrt(mRival);
    return Number(dotproduct) / (mThanos * mRival);
  }

  public static distance(thanos: string, rival: string): number {
    return 1.0 - Cosine.similarity(thanos, rival);
  }

  // string vectorization
  private static stringVectorization(strArr: string[], common: string[]) {
    return common.map((v) => (strArr.includes(v) ? 1 : 0));
  }
}
