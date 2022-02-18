import Cosine from './core/packages/Cosine';
import DiceCoefficient from './core/packages/DiceCoefficient';
import JaccardIndex from './core/packages/JaccardIndex';
import Levenshtein from './core/packages/Levenshtein';
import LongestCommonSubsequence from './core/packages/LongestCommonSubsequence';
import MetricLCS from './core/packages/MetricLCS';

export const cosine = new Cosine();
export const diceCoefficient = new DiceCoefficient();
export const jaccardIndex = new JaccardIndex();
export const levenshtein = new Levenshtein();
export const lcs = new LongestCommonSubsequence();
export const mlcs = new MetricLCS();
