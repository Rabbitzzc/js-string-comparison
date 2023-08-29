import SimilarityResult from "./core/interface/SimilarityResult";
import Cosine from "./core/packages/Cosine";
import DiceCoefficient from "./core/packages/DiceCoefficient";
import JaccardIndex from "./core/packages/JaccardIndex";
import Levenshtein from "./core/packages/Levenshtein";
import LongestCommonSubsequence from "./core/packages/LongestCommonSubsequence";
import MetricLCS from "./core/packages/MetricLCS";

export type { SimilarityResult };

export {
  Cosine,
  DiceCoefficient,
  JaccardIndex,
  Levenshtein,
  LongestCommonSubsequence,
  MetricLCS,
};
