import Similarity from "../interface/Similarity";

export default class Levenshtein extends Similarity {
  public static similarity(pThanos: string, pRival: string): number {
    const [thanos, rival] = Similarity.initParams(pThanos, pRival);
    return !thanos.length && !rival.length
      ? 1
      : 1 -
          Number(this.distance(thanos, rival)) /
            Math.max(thanos.length, rival.length);
  }

  // edit distance1

  public static distance(pThanos: string, pRival: string) {
    const [thanos, rival] = Similarity.initParams(pThanos, pRival);

    if (thanos === rival) return 0;

    let [len1, len2] = [thanos.length, rival.length];
    if (!len1) return len2;
    if (!len2) return len1;

    // init array
    let dynamicArray = [...Array(len1 + 1)].map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; ++i) {
      dynamicArray[i][0] = i;
    }
    for (let j = 0; j <= len2; ++j) {
      dynamicArray[0][j] = j;
    }
    let temp;
    for (let i = 1; i <= len1; ++i) {
      for (let j = 1; j <= len2; ++j) {
        temp = thanos[i - 1] === rival[j - 1] ? 0 : 1;

        // delete  insert  replace
        dynamicArray[i][j] = Math.min(
          dynamicArray[i - 1][j] + 1,
          dynamicArray[i][j - 1] + 1,
          dynamicArray[i - 1][j - 1] + temp
        );
      }
    }

    return dynamicArray[len1][len2];
  }
}

// let ls = new Levenshtein()

// let a = 'healed'
// let b = ['mailed', 'edward', 'sealed', 'theatre']
// console.log(ls.sortMatch(a, b))
